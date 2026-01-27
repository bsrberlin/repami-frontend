import { Component, Input } from '@angular/core'
import { AllImportsModule } from '../../all-imports.module';
import { StartpageMitmachenSektionComponent } from '../../api/models';

@Component({
    selector: 'participate-section',
    imports: [AllImportsModule],
    templateUrl: './participate-section.component.html',
    styleUrl: './participate-section.component.less'
})

export class ParticipateSectionComponent {
  @Input() participateSection!: StartpageMitmachenSektionComponent;
}