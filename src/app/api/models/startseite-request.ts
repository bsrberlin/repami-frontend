/* tslint:disable */
/* eslint-disable */
import { HeaderHeaderSektionComponent } from '../models/header-header-sektion-component';
import { StartpageAnleitungSektionComponent } from '../models/startpage-anleitung-sektion-component';
import { StartpageFaqSektionComponent } from '../models/startpage-faq-sektion-component';
import { StartpageGruendeSektionComponent } from '../models/startpage-gruende-sektion-component';
import { StartpageMitmachenSektionComponent } from '../models/startpage-mitmachen-sektion-component';
import { StartpageReperaturSektionComponent } from '../models/startpage-reperatur-sektion-component';
export interface StartseiteRequest {
  data: {
'Header'?: HeaderHeaderSektionComponent;
'Anleitung'?: StartpageAnleitungSektionComponent;
'Reperatur'?: StartpageReperaturSektionComponent;
'Gruende'?: StartpageGruendeSektionComponent;
'FAQ'?: StartpageFaqSektionComponent;
'Mitmachen'?: StartpageMitmachenSektionComponent;
'locale'?: string;
};
}
