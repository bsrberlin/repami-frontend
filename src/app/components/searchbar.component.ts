import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AllImportsModule } from '../all-imports.module';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategoryService } from '../api/services';
import { SharedService } from '../services/shared.service';
import { ICafeBetrieb } from '../interfaces/icafe-betrieb';
import _ from 'lodash';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Component({
    selector: 'searchbar',
    imports: [AllImportsModule],
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.less'
})
export class SearchbarComponent {
  @Input() showSearchButton: boolean = true;

  searchResults!: ICafeBetrieb;

  nodes: NzTreeNodeOptions[] = [];

  nzSearchOpen: boolean = false;

  dropDownClosed: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productCategoryService: ProductCategoryService,
    protected sharedService: SharedService,
    private elem: ElementRef
  ) {}

  async ngOnInit() {
    const subCategoriesCall = await firstValueFrom(
      this.productCategoryService.getProductCategories({
        'pagination[limit]': 100,
        populate: 'MainCategory',
        sort: 'MainCategory.Label, Label',
      })
    );

    const mainCategories: { title: string; children: string[] }[] = [];

    subCategoriesCall.data?.forEach((element) => {
      const current = element.attributes;
      const parent = current?.MainCategory?.data?.attributes;

      if (
        !mainCategories
          .map((x) => x.title)
          .includes(' ' + parent?.Label ?? 'Keine Kategorie')
      ) {
        mainCategories.push({
          title: ' ' + parent?.Label ?? 'Keine Kategorie',
          children: [],
        });
      }

      mainCategories
        .find((x) => x.title === ' ' + parent?.Label)
        ?.children.push(current?.Label ?? 'Fehler');

      mainCategories.forEach((mainCategory) => {
        mainCategory.children.sort((a, b) => {
          if (a.includes('Sonstige') && !b.includes('Sonstige')) return 1;
          if (!a.includes('Sonstige') && b.includes('Sonstige')) return -1;
          return a.localeCompare(b);
        });
      });
    });

    const dig = (
      path = '0',
      level = 1,
      subCategories: string[] = []
    ): NzTreeNodeOptions[] => {
      const list = [];
      if (level === 0) {
        for (let subCategory of subCategories) {
          const key = `${subCategory}`;
          const treeNode: NzTreeNodeOptions = {
            title: key,
            key,
            expanded: false,
            children: [],
            isLeaf: true,
          };
          list.push(treeNode);
        }
      }
      if (level === 1) {
        for (let mainCategory of mainCategories) {
          const key = `${mainCategory.title}`;
          const treeNode: NzTreeNodeOptions = {
            title: key,
            key,
            expanded: false,
            children: [],
            selectable: false,
            isLeaf: false,
          };
          treeNode.children = dig(key, level - 1, mainCategory.children);
          list.push(treeNode);
        }
      }
      return list;
    };

    this.nodes = dig();

    this.activatedRoute.queryParams.subscribe((params) => {
      const setSearchFormValueFromParams = _.debounce(() => {
        if (params['categoryFilter'] || params['postalCode']) {
          this.sharedService.searchForm.setValue({
            categoryFilter: params['categoryFilter'] ?? null,
            //postalCode: params['postalCode'] ?? null,
          });

          this.sharedService.updateSearchResults();
        } else {
        }

        if (params['s']) {
          this.sharedService.updateSearchExecuted(params['s']);
          document
            .getElementById('scroll-map')
            ?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);

      setSearchFormValueFromParams();
    });
  }

  toggleNodeExpansion(node: NzTreeNode): void {
    if (!node.isLeaf) {
      node.isExpanded = !node.isExpanded;
    }
  }

  handleTreeSelectOpenChange(isOpen: boolean): void {
    let elements = this.elem.nativeElement.querySelectorAll(
      '.ant-select-selector'
    );

    if (elements) {
      elements.forEach((element: any) => {
        if (this.dropDownClosed && isOpen) {
          this.dropDownClosed = false;
          element.classList.add('opened');
        }
        if (!this.dropDownClosed && !isOpen) {
          this.dropDownClosed = true;
          element.classList.remove('opened');
        }
      });
    }
  }

  onVisibleChange(event: boolean) {
    this.nzSearchOpen = event;
  }

  async submitForm(): Promise<void> {
    // if (this.sharedService.searchForm.value.postalCode === '') {
    //   this.sharedService.searchForm.patchValue({
    //     postalCode: null,
    //   });
    // }

    if (this.sharedService.searchForm.value.categoryFilter === '') {
      this.sharedService.searchForm.patchValue({
        categoryFilter: null,
      });
    }

    this.sharedService.updateSearchExecuted(true);
    this.router.navigate(['/'], {
      queryParams: {
        s: this.sharedService.searchExecuted.value,
        ...this.sharedService.searchForm.value,
      },
    });
  }
}
