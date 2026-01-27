import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AllImportsModule } from '../../all-imports.module';
import { StartpageGruendeSektionComponent } from '../../api/models';
import _ from 'lodash';
import { environment } from '../../../environments/environment';
// import { environment } from '../../../environments/environment.development';

@Component({
    selector: 'reason-section',
    imports: [AllImportsModule],
    templateUrl: './reason-section.component.html',
    styleUrl: './reason-section.component.less'
})

export class ReasonSectionComponent implements OnInit {
  @Input() reasonSection!: StartpageGruendeSektionComponent | undefined;
  
  gruendeCards: any;
  slicedGruende: any;
  slicedGruendeMobil: any;

  async ngOnInit() {
    this.setSlides();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['reasonSection']) {
      this.setSlides();
    }
  }

  setSlides() {
    this.gruendeCards = this.reasonSection?.Grund;
    this.slicedGruende = this.generateSlides(this.gruendeCards, 2);
    this.slicedGruendeMobil = this.generateSlides(this.gruendeCards, 1);
  }

  generateSlides(data: any[], cardsPerSlide: number): any[][] {
    const slidesNumber: (any)[][] = []

    for (let i = 0; i < data.length; i += cardsPerSlide) {
      const slide = _.slice(data, i, i + cardsPerSlide);
      slidesNumber.push(slide);
    }

    return slidesNumber;
  }

  getImageSrc(card: any): string {
    if (card?.Icon?.data?.attributes?.url) {
      return environment.strapiUrl + card.Icon.data.attributes.url;
    }
      return '';
    } 
}
