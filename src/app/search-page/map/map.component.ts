import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { firstValueFrom } from 'rxjs';
import {
  ReparaturbetriebService,
  ReparaturcafeService,
} from '../../api/services'; // Import RepairService
import { Reparaturbetrieb, Reparaturcafe } from '../../api/models';
import 'leaflet.markercluster';
import { IMarkerInfo, MarkerTypes } from '../../interfaces/imarker-info';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { AllImportsModule } from '../../all-imports.module';
import { SharedService } from '../../services/shared.service';
import { ICafeBetrieb } from '../../interfaces/icafe-betrieb';
import { icon, LatLngBounds, Marker } from 'leaflet';
import { ISearchResult } from '../../interfaces/isearch-result';
import GestureHandling from 'leaflet-gesture-handling';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [AllImportsModule, ProfileCardComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent implements OnInit {
  private map!: Leaflet.Map;
  private markersLayer!: Leaflet.MarkerClusterGroup;

  markerInfo: IMarkerInfo = {
    reparaturcafes: [],
    reparaturbetriebe: [],
  };

  allRepairCafes: (Reparaturcafe | undefined)[] = [];
  allRepairBetriebe: (Reparaturbetrieb | undefined)[] = [];

  allCafeBetriebe: ICafeBetrieb = { reparaturbetriebe: [], reparaturcafes: [] };

  searchResultList: ISearchResult[] = [];

  selectedButton: string = 'liste';
  clickedBefore: Marker = new Leaflet.Marker([0, 0], {
    icon: new Leaflet.Icon({
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      iconUrl:
        ""
    }),
    title: "",
  })
  clickedBeforeType: MarkerTypes = MarkerTypes.Both
  clickedElementIdDesktop: string = ""
  clickedElementId: string = ""
  touch: string = '';
  scroll: string = '';
  macScroll: string = '';

  constructor(
    private reparaturCafeService: ReparaturcafeService,
    private reparaturBetriebService: ReparaturbetriebService,
    private sharedService: SharedService
  ) { }

  async ngOnInit() {
    await this.getData();
    this.initializeMap();
    this.sharedService.searchExecutedObservable.subscribe(
      async (searchExecuted) => {
        this.searchResultList = [];
        if (
          searchExecuted &&
          ((this.sharedService.searchForm.value.categoryFilter !== '' &&
            this.sharedService.searchForm.value.categoryFilter !== null))
        ) {
          this.sharedService.searchResultsObservable.subscribe(
            (searchResults) => {
              this.showMarkers(searchResults);
              this.showSearchResultsAsList(searchResults);
            }
          );
        } else {
          this.showAllMarkers();
        }
      }
    );

    document.getElementById('search-results')?.addEventListener(
      'wheel',
      function (event) {
        event.stopPropagation();
      },
      { passive: false }
    );
  }

  initializeMap(): void {
    Leaflet.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

    this.map = Leaflet.map('map-repair', {
      center: [52.520008, 13.404954],
      zoom: 11,
      zoomControl: false,
      gestureHandling: true,
      gestureHandlingText: {
        touch: this.touch,
        scroll: this.scroll,
        scrollMac: this.macScroll,
      },
    } as L.MapOptions);

    // new Leaflet.Control.Zoom({ position: 'topright' }).addTo(this.map);   // Kommentar behalten, da nicht sicher, ob für Barierefreiheit benutzt wird

    Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
    ).addTo(this.map);

    this.markersLayer = Leaflet.markerClusterGroup({
      polygonOptions: {
        fillColor: 'transparent',
        color: 'transparent',
        weight: 0,
        opacity: 0,
        fillOpacity: 0,
      },
      iconCreateFunction: (cluster) => {
        const allChildMarkers = cluster.getAllChildMarkers();

        const cafes = allChildMarkers.some((x) =>
          this.markerInfo.reparaturcafes.map((x) => x.marker).includes(x)
        );
        const betriebe = allChildMarkers.some((x) =>
          this.markerInfo.reparaturbetriebe.map((x) => x.marker).includes(x)
        );

        let className = '';

        if (cafes && betriebe) {
          className = 'cluster-icon-both';
        } else if (cafes) {
          className = 'cluster-icon-cafes';
        } else if (betriebe) {
          className = 'cluster-icon-betriebe';
        }

        const dimsOfCluster = Math.log(allChildMarkers.length * 1000) * 5;

        return Leaflet.divIcon({
          html: `<div>
                    ${cluster.getChildCount()}
                 </div>`,
          className: 'cluster-icon ' + className,
          iconSize: Leaflet.point(dimsOfCluster, dimsOfCluster),
        });
      },
    });

    this.map.addLayer(this.markersLayer);
  }

  async getData() {
    this.allCafeBetriebe.reparaturbetriebe =
      await this.fetchDataAndReturnAsList(
        this.reparaturBetriebService.getReparaturbetriebs.bind(
          this.reparaturBetriebService
        )
      );
    this.allCafeBetriebe.reparaturcafes = await this.fetchDataAndReturnAsList(
      this.reparaturCafeService.getReparaturcafes.bind(
        this.reparaturCafeService
      )
    );
  }

  private async fetchDataAndReturnAsList(apiCall: Function): Promise<any[]> {
    let amountTotal = Number.MAX_SAFE_INTEGER;
    let amountFetched = 0;
    let list: any[] = [];


    while (amountFetched < amountTotal) {
      const apiData: any = await firstValueFrom(
        apiCall({
          'pagination[limit]': 100,
          'pagination[start]': amountFetched,
        })
      );
      amountTotal =
        apiData.meta?.pagination?.total &&
          amountTotal === Number.MAX_SAFE_INTEGER
          ? apiData.meta?.pagination?.total
          : amountTotal;
      amountFetched += apiData.data ? apiData.data?.length : 0;
      list = list.concat(
        apiData.data?.map((apiDataUnmapped: any) => {
          const apiDataMapped = apiDataUnmapped.attributes;
          apiDataMapped['internal_id'] = apiDataUnmapped.id;
          return apiDataMapped;
        }) ?? []
      );
      if (amountFetched === 0) {
        break;
      }
    }

    return list;
  }

  showAllMarkers(): void {
    this.showMarkers(this.allCafeBetriebe);
  }

  resetAllMarkers() {
    this.markersLayer.clearLayers();
    this.markerInfo.reparaturbetriebe = [];
    this.markerInfo.reparaturcafes = [];
    this.clickedBefore = new Leaflet.Marker([0, 0], {
      icon: new Leaflet.Icon({
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        iconUrl: ""
      }),
      title: "",
    });
    this.clickedBeforeType = MarkerTypes.Both;
  }

  showMarkers(cafebetriebe: ICafeBetrieb): void {
    this.resetAllMarkers();
    if (
      cafebetriebe.reparaturbetriebe.length === 0 &&
      cafebetriebe.reparaturcafes.length === 0
    ) {
      this.map.setView([52.520008, 13.404954], 11);
    }

    this.markersLayer.clearLayers();

    let bounds: any = null;

    this.markerInfo = {
      reparaturcafes: [],
      reparaturbetriebe: [],
    };

    cafebetriebe.reparaturbetriebe?.forEach((betrieb) => {
      if (
        betrieb &&
        betrieb.MapLocation &&
        betrieb.MapLocation.lat &&
        betrieb.MapLocation.lng
      ) {
        this.addMarkerToLayer(
          betrieb,
          betrieb.MapLocation.lat,
          betrieb.MapLocation.lng,
          betrieb.Name ?? 'Default Name',
          MarkerTypes.Reparaturbetrieb,
          bounds
        );
      }
    });

    cafebetriebe.reparaturcafes?.forEach((cafe) => {
      if (cafe && cafe.Coordinates.lat && cafe.Coordinates.lng) {
        this.addMarkerToLayer(
          cafe,
          cafe.Coordinates.lat,
          cafe.Coordinates.lng,
          cafe.Name ?? 'Default Name',
          MarkerTypes.Reparaturcafe,
          bounds
        );
      }
    });

    this.markerInfo.reparaturbetriebe
      .map((x) => x.marker)
      .forEach((x) => {
        if (!bounds) {
          bounds = new Leaflet.LatLngBounds(x.getLatLng(), x.getLatLng());
        }
        bounds = bounds.extend(x.getLatLng());
      });

    this.markerInfo.reparaturcafes
      .map((x) => x.marker)
      .forEach((x) => {
        if (!bounds) {
          bounds = new Leaflet.LatLngBounds(x.getLatLng(), x.getLatLng());
        }
        bounds = bounds.extend(x.getLatLng());
      });

    if (bounds && bounds.isValid()) {
      this.map.fitBounds(bounds, {
        padding: [50, 50],
      });
    }
  }

  showSearchResultsAsList(cafebetriebe: ICafeBetrieb) {
    let results: ISearchResult[] = [];

    results = results.concat(
      cafebetriebe.reparaturbetriebe.map((x) => {
        let displayableResult = {
          id: x?.internal_id ?? '',
          type: MarkerTypes.Reparaturbetrieb,
          title: x?.Name ?? 'Kein Name angegeben',
          description: x?.Description ?? '',
          street: x?.Address ?? 'Keine Straße angegeben',
          postalCode: `${x?.PLZ ?? ''} ${x?.Location ?? ''}`,
          openingHours: x?.OpeningHours ?? 'Keine Öffnungszeiten angegeben',
          link: x?.URL ?? '',
        };

        return displayableResult;
      })
    );

    results = results.concat(
      cafebetriebe.reparaturcafes.map((x) => {
        let displayableResult = {
          id: null,
          type: MarkerTypes.Reparaturcafe,
          title: x?.Name ?? 'Kein Name angegeben',
          description: '',
          street: x?.Street ?? 'Keine Straße angegeben',
          postalCode: `${x?.PostalCode ?? ''} ${x?.City ?? ''}`,
          nextEvent: x?.NextEvent,
          link: x?.Landingpage ?? '',
        };

        return displayableResult;
      })
    );

    results.sort((a, b) => a.title.localeCompare(b.title));

    this.searchResultList = results;
  }

  resetSearchResultList(): void {
    this.searchResultList = [];
  }

  private resetOldMarker() {
    const marker = this.clickedBefore
    this.markersLayer.removeLayer(marker)
    marker.setIcon(icon({
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      iconUrl:
        this.clickedBeforeType === MarkerTypes.Reparaturcafe
          ? 'assets/map-icons/marker-cafe.svg'
          : 'assets/map-icons/marker-betrieb.svg',
    }))
    this.markersLayer.addLayer(marker);
  }


  private addMarkerToLayer(
    entity: Reparaturbetrieb | Reparaturcafe,
    lat: number,
    lng: number,
    title: string,
    type: MarkerTypes,
    bounds: LatLngBounds
  ): void {
    const marker = new Leaflet.Marker([lat, lng], {
      icon: new Leaflet.Icon({
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        iconUrl:
          type === MarkerTypes.Reparaturcafe
            ? 'assets/map-icons/marker-cafe.svg'
            : 'assets/map-icons/marker-betrieb.svg',
      }),
      title: title,
    });

    marker.on('click', (event) => {
      const clickedMarker = event.target;
      if (clickedMarker != this.clickedBefore) {
        this.resetOldMarker();
        marker.setIcon(icon({
          iconSize: [40, 45],
          iconAnchor: [20, 20],
          iconUrl:
            type === MarkerTypes.Reparaturcafe
              ? 'assets/map-icons/Standortpin_orange.svg'
              : 'assets/map-icons/Standortpin_lila.svg',
          className: "pin"
        })
        )
      }
      this.clickedBefore = marker;
      this.clickedBeforeType = type;
      this.selectedButton = 'liste';

      if (this.searchResultList.length > 1) {
        let clickedElement: Reparaturbetrieb | Reparaturcafe | undefined =
          this.markerInfo.reparaturbetriebe.find(
            (x) => x.marker === clickedMarker
          )?.betrieb;
        if (typeof clickedElement === 'undefined') {
          clickedElement = this.markerInfo.reparaturcafes.find(
            (x) => x.marker === clickedMarker
          )?.cafe;
        }
        setTimeout(() => {
          const elementDesktop = document.getElementById(
            'profile-' + clickedElement?.Name
          );
          this.clickedElementIdDesktop = 'profile-' + clickedElement?.Name
          const elementMobile = document.getElementById(
            'profile-' + clickedElement?.Name + '-mobile'
          );
          this.clickedElementId = 'profile-' + clickedElement?.Name + '-mobile'
          const element =
            elementDesktop?.clientHeight! > 0 ? elementDesktop : elementMobile;
          if (element) {
            const containerDesktop = document.getElementById(
              'multiple-result-container'
            );
            const containerMobile = document.getElementById(
              'multiple-result-container-mobile'
            );
            const container =
              containerDesktop?.clientHeight! > 0
                ? containerDesktop
                : containerMobile;

            if (container) {
              const elementRect = element.getBoundingClientRect();
              const containerRect = container?.getBoundingClientRect();
              const scrollPosition =
                elementRect.top - containerRect.top + container.scrollTop;

              container.scrollTo({ top: scrollPosition, behavior: 'smooth' });
            }
          }
        }, 50);
      } else {
        const singleResult: ICafeBetrieb = {
          reparaturbetriebe: [],
          reparaturcafes: [],
        };
        let clickedProfile = this.markerInfo.reparaturcafes.find(
          (x) => x.marker === clickedMarker
        )?.cafe;
        if (typeof clickedProfile === 'undefined') {
          clickedProfile = this.markerInfo.reparaturbetriebe.find(
            (x) => x.marker === clickedMarker
          )?.betrieb;
          singleResult.reparaturbetriebe.push(
            clickedProfile as Reparaturbetrieb
          );
        } else {
          singleResult.reparaturcafes.push(clickedProfile as Reparaturcafe);
        }
        this.showSearchResultsAsList(singleResult);
      }
    });

    if (type === MarkerTypes.Reparaturcafe) {
      this.markerInfo.reparaturcafes.push({
        marker: marker,
        cafe: entity,
      });
    } else {
      this.markerInfo.reparaturbetriebe.push({
        marker: marker,
        betrieb: entity,
      });
    }

    this.markersLayer.addLayer(marker);
  }

  resetDisplayedResult() {
    this.searchResultList = [];
  }
}
