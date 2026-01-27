import { Component, Input } from '@angular/core'
import { AllImportsModule } from '../../all-imports.module';
import { StartpageReperaturSektionComponent } from '../../api/models';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'repair-section',
    imports: [AllImportsModule, TranslatePipe],
    templateUrl: './repair-section.component.html',
    styleUrl: './repair-section.component.less'
})

export class RepairSectionComponent {
  @Input()
  repairSection: StartpageReperaturSektionComponent | undefined;
}