/* tslint:disable */
/* eslint-disable */
import { HeaderHeaderSektionComponent } from '../models/header-header-sektion-component';
import { StartpageAnleitungSektionComponent } from '../models/startpage-anleitung-sektion-component';
import { StartpageFaqSektionComponent } from '../models/startpage-faq-sektion-component';
import { StartpageGruendeSektionComponent } from '../models/startpage-gruende-sektion-component';
import { StartpageMitmachenSektionComponent } from '../models/startpage-mitmachen-sektion-component';
import { StartpageReperaturSektionComponent } from '../models/startpage-reperatur-sektion-component';
import { StartseiteListResponseDataItemLocalized } from '../models/startseite-list-response-data-item-localized';
export interface Startseite {
  Anleitung?: StartpageAnleitungSektionComponent;
  FAQ?: StartpageFaqSektionComponent;
  Gruende?: StartpageGruendeSektionComponent;
  Header?: HeaderHeaderSektionComponent;
  Mitmachen?: StartpageMitmachenSektionComponent;
  Reperatur?: StartpageReperaturSektionComponent;
  createdAt?: string;
  createdBy?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
  locale?: string;
  localizations?: {
'data'?: Array<StartseiteListResponseDataItemLocalized>;
};
  publishedAt?: string;
  updatedAt?: string;
  updatedBy?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
}
