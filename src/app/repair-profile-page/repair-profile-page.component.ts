import { Component, Input, OnInit } from '@angular/core';
import { AllImportsModule } from '../all-imports.module';
import { environment } from '../../environments/environment';
//import { environment } from '../../environments/environment.development';
import _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { ProductCategoryService } from '../api/services';

@Component({
    selector: 'repair-profile-page',
    imports: [AllImportsModule],
    templateUrl: './repair-profile-page.component.html',
    styleUrl: './repair-profile-page.component.less'
})
export class RepairProfilePageComponent implements OnInit {
  reperaturProfilId: string | null = '';
  expandDescription: boolean = false;
  expandServices: boolean = false;

  reperaturbetriebInfo!: any;
  gruendeCards: any;
  slicedGruende: any;
  slicedGruendeMobil: any;

  reperaturBetriebImages: any;
  reperaturBetriebLanguages: any;

  mainCategories: any;
  selectedProductCategories: any[] = [];
  productCategoriesOfAllMainCategories: any[] = [];
  mergedCategories: any[] = [];
  productCategoriesWithoutMainCategory!: any[];

  constructor(
    private route: ActivatedRoute,
    private categoriesProductService: ProductCategoryService
  ) {}

  async ngOnInit() {
    this.reperaturProfilId = this.route.snapshot.paramMap.get('id');

    try {
      const response = await fetch(
        `${environment.strapiUrl}/api/reparaturbetriebs/${this.reperaturProfilId}?populate=Image&populate=product_categories.MainCategory&populate=product_main_categories&populate=BrandsandModels&populate=Services&populate=Parking&populate=PublicTransport&populate=languages`
      );
      const data = await response.json();

      if (data && data.data.attributes) {
        this.reperaturbetriebInfo = data.data.attributes;
        this.reperaturBetriebImages = this.reperaturbetriebInfo.Image.data;
        this.reperaturBetriebLanguages = this.reperaturbetriebInfo.Languages;
        this.selectedProductCategories =
          this.reperaturbetriebInfo.product_categories.data;

        this.mergedCategories = this.selectedProductCategories;

        this.reperaturbetriebInfo['Description'] = this.reperaturbetriebInfo[
          'Description'
        ].replace(/\n/g, '<br>');
        this.reperaturbetriebInfo['Services'] = this.reperaturbetriebInfo[
          'Services'
        ].replace(/\n/g, '<br>');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  removeDuplicates(
    selectedProductCategories: any[],
    productCategoriesOfAllMainCategories: any[]
  ): any[] {
    const mainCategoryIds = new Set(
      productCategoriesOfAllMainCategories.map(
        (productCategoriesOfAllMainCategories) =>
          productCategoriesOfAllMainCategories.attributes.Label
      )
    );

    return selectedProductCategories.filter(
      (selectedProductCategories) =>
        !mainCategoryIds.has(selectedProductCategories.attributes.Label)
    );
  }

  getImageSrc(image: any): string {
    if (image?.attributes?.url) {
      return environment.strapiUrl + image.attributes.url;
    }
    return '';
  }

  getLanguages(language: any): string {
    if (language?.attributes?.Language) {
      return language.attributes.Language;
    }
    return '';
  }

  toggleDescription() {
    this.expandDescription = !this.expandDescription;
  }

  toggleServices() {
    this.expandServices = !this.expandServices;
  }

  manipulateWebsiteLink(url: string): string {
    const pattern = /^(?:https?:\/\/)?(.*)$/;
    return url.replace(pattern, '$1');
  }
}
