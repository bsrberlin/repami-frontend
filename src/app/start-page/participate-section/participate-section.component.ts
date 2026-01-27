import { Component, Input } from '@angular/core'
import { AllImportsModule } from '../../all-imports.module';
import { StartpageMitmachenSektionComponent } from '../../api/models';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'participate-section',
    imports: [AllImportsModule, TranslatePipe],
    templateUrl: './participate-section.component.html',
    styleUrl: './participate-section.component.less'
})

export class ParticipateSectionComponent {
  @Input() participateSection!: StartpageMitmachenSektionComponent;
}