import { Component, Input, OnInit } from '@angular/core'
import { AllImportsModule } from '../../all-imports.module';
import { StartpageReperaturSektionComponent } from '../../api/models';
import { StartseiteService } from '../../api/services';
import { LocaleService } from '../../services/locale-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'repair-section',
  standalone: true,
  imports: [AllImportsModule],
  templateUrl: './repair-section.component.html',
  styleUrl: './repair-section.component.less'
})

export class RepairSectionComponent {
  @Input()
  repairSection: StartpageReperaturSektionComponent | undefined;
}