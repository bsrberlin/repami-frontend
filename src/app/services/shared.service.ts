import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICafeBetrieb } from '../interfaces/icafe-betrieb';
import { ReparaturbetriebService, ReparaturcafeService } from '../api/services';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private searchResults = new BehaviorSubject<ICafeBetrieb>({ reparaturbetriebe: [], reparaturcafes: [] });
  public searchResultsObservable = this.searchResults.asObservable();

  public searchForm: FormGroup;
  public searchFormValuesChanged$: Observable<any>;

  public searchExecuted = new BehaviorSubject<boolean>(false);
  public searchExecutedObservable = this.searchExecuted.asObservable();

  constructor(private fb: FormBuilder, private reparaturCafeService: ReparaturcafeService, private reparaturbetriebService: ReparaturbetriebService) {
    this.searchForm = this.fb.group({
      categoryFilter: '',
      //postalCode: ''
    });

    this.searchFormValuesChanged$ = this.searchForm.valueChanges;
  }

  updateFormValue(data: { [key: string]: any }): void {
    this.searchForm.patchValue(data);
  }

  updateSearchExecuted(value: boolean) {
    this.searchExecuted.next(value);
  }

  async updateSearchResults(): Promise<void> {

    const tempResult: ICafeBetrieb = { reparaturbetriebe: [], reparaturcafes: [] };

    const cafes = await firstValueFrom(this.reparaturCafeService.getReparaturcafes({
      populate: "product_categories",
      "pagination[limit]": 1000,
      filters: {
        "product_categories][Label": this.searchForm.value.categoryFilter,
        //"PostalCode": this.searchForm.value.postalCode
      }
    }));

    tempResult.reparaturcafes = [...new Set(tempResult.reparaturcafes.concat(cafes.data?.map(x => x.attributes)))];
    tempResult.reparaturcafes = tempResult.reparaturcafes.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t?.Name === value?.Name && t?.Street === value?.Street
      ))
    );

    const betriebe = await firstValueFrom(this.reparaturbetriebService.getReparaturbetriebs({
      populate: "product_categories",
      "pagination[limit]": 1000,
      filters: {
        "product_categories][Label": this.searchForm.value.categoryFilter,
        //"PLZ": this.searchForm.value.postalCode
      }
    }));

    const betriebeWithId = betriebe.data?.map((apiDataUnmapped: any) => {
      const apiDataMapped = apiDataUnmapped.attributes;
      apiDataMapped['internal_id'] = apiDataUnmapped.id;
      return apiDataMapped;
    }) ?? []

    tempResult.reparaturbetriebe = [...new Set(tempResult.reparaturbetriebe.concat(betriebeWithId))];
    tempResult.reparaturbetriebe = tempResult.reparaturbetriebe.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t?.Name === value?.Name && t?.Address === value?.Address
      ))
    );

    this.searchResults.next(tempResult);
    this.searchExecuted.next(true);
  }
}
