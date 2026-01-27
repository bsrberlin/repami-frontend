import { Component, Input, OnInit } from '@angular/core';
import { AllImportsModule } from '../../all-imports.module';
import { SearchbarComponent } from '../../components/searchbar.component';
import { environment } from '../../../environments/environment';
import { HeaderHeaderSektionComponent } from '../../api/models';

@Component({
    selector: 'app-header-section',
    imports: [AllImportsModule, SearchbarComponent],
    templateUrl: './header-section.component.html',
    styleUrl: './header-section.component.less'
})

export class HeaderSectionComponent implements OnInit {
  @Input() startElementsHeader!: HeaderHeaderSektionComponent | undefined;
  headerImageUrl: string = ""

  async ngOnInit() {
    this.headerImageUrl = environment.strapiUrl + this.startElementsHeader?.Image?.data?.attributes?.url;
  }
}
