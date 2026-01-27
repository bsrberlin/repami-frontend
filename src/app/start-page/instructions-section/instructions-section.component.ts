import { Component, Input } from '@angular/core'
import { StartpageAnleitungSektionComponent } from '../../api/models';
import { AllImportsModule } from '../../all-imports.module';

@Component({
    selector: 'instructions-section',
    imports: [AllImportsModule],
    templateUrl: './instructions-section.component.html',
    styleUrl: './instructions-section.component.less'
})

export class InstructionsSectionComponent {
  @Input() instructionSection: StartpageAnleitungSektionComponent | undefined;
}