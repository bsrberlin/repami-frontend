import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AllImportsModule } from '../../all-imports.module';
import { ISearchResult } from '../../interfaces/isearch-result';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile-card',
    imports: [AllImportsModule],
    templateUrl: './profile-card.component.html',
    styleUrl: './profile-card.component.less'
})
export class ProfileCardComponent {

  @Input() searchResult!: ISearchResult;
  @Input() closable: boolean = true;
  @Input() clickedCard: boolean =false;
  @Output() closeEvent = new EventEmitter<void>();

  constructor(private router: Router) { }

  close(): void {
    this.closeEvent.emit();
  }

  navigateTo(): void {
    if (this.searchResult.id !== null) {
      window.open(
        `/reparaturbetriebsprofil/${this.searchResult.id}`,
        '_blank'
      );
    }
    else {
      window.open(
        this.searchResult.link,
        '_blank'
      );
    }
  }

  formatDateIfNeeded(possibleDate: string): string {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (datePattern.test(possibleDate)) {
      return this.formatDateToDeFormat(possibleDate);
    }

    return possibleDate;
  }

  formatDateToDeFormat(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    return new Intl.DateTimeFormat('de-DE', options).format(date);
  }


}
