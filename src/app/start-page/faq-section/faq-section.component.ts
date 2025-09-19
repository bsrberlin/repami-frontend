import { Component, Input, OnInit } from '@angular/core'
import { AllImportsModule } from '../../all-imports.module';
import { marked } from 'marked';

@Component({
  selector: 'faq-section',
  standalone: true,
  imports: [AllImportsModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.less'
})


export class FAQSectionComponent implements OnInit{
  @Input() faqSection!: { id?: number | undefined; Frage?: string | undefined; Antwort?: string | undefined; }[] | undefined;

  async ngOnInit() {
    await this.preprocessFaqSection();
  }

  async preprocessFaqSection(): Promise<void> {
    if (!this.faqSection) return;
  
    for (const faq of this.faqSection) {
      if (faq.Antwort) {
        faq.Antwort = await marked(faq.Antwort);
      }
    }
  }
}