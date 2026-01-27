import { Component } from '@angular/core';
import { AllImportsModule } from '../all-imports.module';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {
  StartseiteService,
  UsersPermissionsAuthService,
} from '../api/services';
import { ParticipateSectionComponent } from '../start-page/participate-section/participate-section.component';
import { LocaleService } from '../services/locale-service.service';
import { StartpageMitmachenSektionComponent } from '../api/models';

@Component({
    selector: 'registration-page',
    templateUrl: './registration-page.component.html',
    styleUrl: './registration-page.component.less',
    imports: [AllImportsModule, ParticipateSectionComponent]
})
export class RegistrationPageComponent {
  registerForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    passwordConfirm: FormControl<string>;
    terms: FormControl<boolean>;
    criteria: FormControl<boolean>;
  }>;
  participateSection!: StartpageMitmachenSektionComponent | undefined;
  isSubmitting = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private userService: UsersPermissionsAuthService,
    private _startSeiteService: StartseiteService,
    private _localeService: LocaleService
  ) {
    this.registerForm = this.fb.group({
      email: [
        '',
        [Validators.email, Validators.required, this.emailTldValidator()],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: [
        '',
        [
          Validators.required,
          this.confirmationValidator,
          Validators.minLength(8),
        ],
      ],
      terms: [false, Validators.requiredTrue],
      criteria: [false, Validators.requiredTrue],
    });
    this.getStartseiteData();
  }

  emailTldValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /\.[a-zA-Z]{2,6}$/;
      const valid = regex.test(control.value);
      return valid ? null : { emailTld: true };
    };
  }

  updateEmailError(): void {
    this.registerForm.controls.email.setErrors({ emailTaken: false });
    this.registerForm.controls.email.markAsDirty();
    this.registerForm.controls.email.updateValueAndValidity();
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.registerForm.controls.passwordConfirm.updateValueAndValidity()
    );
  }

  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  submitForm(): void {
    if (this.isSubmitting) {
      return;
    }

    if (!this.registerForm.valid) {
      Object.values(this.registerForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    this.isSubmitting = true;

    this.userService
      .authLocalRegisterPost({
        body: {
          username: this.registerForm.value.email,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
        },
      })
      .subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Das hat geklappt!',
            text: 'Wir haben dir einen Link an die angegebene Mailadresse geschickt, mit dem du deinen Account bestätigen kannst. Prüfe bitte auch deinen Spam-Ordner.',
          }).finally(() => {
            this.router.navigate(['/']);
          });
        },
        error: (error) => {
          if (error.status === 400 && error.error) {
            const errMsg = error.error.error.message;
            if (errMsg === 'Email or Username are already taken') {
              this.registerForm.controls.email.setErrors({ emailTaken: true });
            } else if (error.status === 404) {
              Swal.fire({
                icon: 'error',
                title: 'E-Mail konnte nicht gesendet werden',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Da hat etwas nicht funktioniert',
              });
            }

            this.isSubmitting = false;
          }
        },
        complete: () => {
          this.isSubmitting = false;
        },
      });
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
