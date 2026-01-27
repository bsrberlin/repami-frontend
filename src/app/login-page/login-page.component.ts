import { Component } from '@angular/core';
import { AllImportsModule } from '../all-imports.module';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {
  StartseiteService,
  UsersPermissionsAuthService,
} from '../api/services';
import { LocaleService } from '../services/locale-service.service';
import { StartpageMitmachenSektionComponent } from '../api/models';
import { ParticipateSectionComponent } from '../start-page/participate-section/participate-section.component';

@Component({
    selector: 'login-page',
    imports: [AllImportsModule, ParticipateSectionComponent],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.less'
})
export class LoginPageComponent {
  loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;
  participateSection!: StartpageMitmachenSektionComponent | undefined;

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private userService: UsersPermissionsAuthService,
    private _startSeiteService: StartseiteService,
    private _localeService: LocaleService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
    this.getStartseiteData();
  }

  submitForm(): void {
    if (!this.loginForm.valid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    this.userService
      .authLocalPost({
        body: {
          identifier: this.loginForm.value.email,
          password: this.loginForm.value.password,
        },
      })
      .subscribe(
        (res) => {
          localStorage.setItem('jwtToken', res.jwt ?? '');
          this.router.navigate(['/reparaturbetriebsprofil/bearbeiten']);
        },
        (error) => {
          if (error.status === 400 || error.status === 500) {
            Swal.fire({
              icon: 'error',
              text: 'Ungültige E-Mail oder falsches Passwort',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Da hat etwas nicht funktioniert',
            });
          }
        }
      );
  }

  async getStartseiteData() {
    this._startSeiteService
      .getStartseites({
        populate: 'Mitmachen',
        locale: this._localeService.localeCode,
      })
      .subscribe((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          const data = res.data[0];
          this.participateSection = data.attributes?.Mitmachen;
        }
      });
  }
}
