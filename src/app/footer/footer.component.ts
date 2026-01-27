import { Component, Input } from '@angular/core'
import { AllImportsModule } from '../all-imports.module';
import { NavigationselementListResponseDataItem } from '../api/models';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'footer',
    imports: [AllImportsModule, TranslatePipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.less'
})

export class FooterComponent {
  @Input() footerLinks!: NavigationselementListResponseDataItem[];

  openUsercentrics(): void {
    if (window && window.UC_UI) {
      window.UC_UI.showSecondLayer();
    } else {
      console.error('Usercentrics is not initialized');
    }
  }
}