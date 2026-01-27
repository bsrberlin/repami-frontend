import { Component, OnInit } from '@angular/core';
import { AllImportsModule } from '../all-imports.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Observable, Observer, Subscription, of } from 'rxjs';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { ProductCategoryService, UploadFileService } from '../api/services';
import { ProductCategoryListResponseDataItem } from '../api/models';
import _ from 'lodash';

@Component({
    selector: 'repair-profile-edit-page',
    imports: [AllImportsModule],
    templateUrl: './repair-profile-edit-page.component.html',
    styleUrl: './repair-profile-edit-page.component.less'
})
export class RepairProfileEditPageComponent implements OnInit {
  currentUserId: number | undefined;
  reperaturProfileForm: FormGroup;
  allowedFormats: string = '.png,.jpg,.jpeg';
  uploadCounter: number = 0;
  showIcons = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    showDownloadIcon: false,
  };
  textAreaSize = { minRows: 2 };
  showSendButton: Boolean = true;

  uploadedImageIds: number[] = [];
  removeFileIds: string[] = [];
  initFileList: NzUploadFile[] = [];

  selectedOptions: ProductCategoryListResponseDataItem[] = [];
  productCategoriesOptions: ProductCategoryListResponseDataItem[] | undefined =
    [];

  profileIsPublished: boolean = false;
  profileExists: boolean = false;
  profileFinalSend: boolean = false;
  reparaturbetriebProfileId: number | undefined;
  changesFromExistingProfile: boolean = false;
  initialFormValues: any = {};

  reqBody: {
    data: {
      Image: number[] | undefined;
      Name: string | undefined;
      CompanyNo: string | undefined;
      Description: string | undefined;
      Address: string | undefined;
      PLZ: string | undefined;
      Location: string | undefined;
      URL: string | undefined;
      EMail: string | undefined;
      Telefone: string | undefined;
      Mobile: string | undefined;
      OpeningHours: string | undefined;
      product_categories: number[] | undefined;
      BrandsandModels: string | undefined;
      Services: string | undefined;
      Parking: string | undefined;
      PublicTransport: string | undefined;
      Languages: string | undefined;
      publishedAt: null | Date;
      user: number | undefined;
      createdByReaperaturbetrieb: boolean;
      finalSend: boolean | undefined;
      updateMail: boolean | undefined;
    };
  };

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private http: HttpClient,
    private uploadFileService: UploadFileService,
    private productCategoryService: ProductCategoryService
  ) {
    this.reperaturProfileForm = this.formBuilder.group({
      image: [],
      Name: ['', Validators.required],
      CompanyNo: ['', Validators.required],
      Description: ['', Validators.required],
      Address: ['', [Validators.required]],
      PLZ: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      URL: [''],
      EMail: ['', [Validators.email]],
      Telefone: ['', [Validators.required]],
      Mobile: [''],
      OpeningHours: ['', [Validators.required]],
      product_categories: [[], [Validators.required]],
      BrandsandModels: [''],
      Services: ['', [Validators.required]],
      Parking: [''],
      PublicTransport: [''],
      Languages: [''],
    });

    this.reqBody = {
      data: {
        Image: undefined,
        Name: undefined,
        CompanyNo: undefined,
        Description: undefined,
        Address: undefined,
        PLZ: undefined,
        Location: undefined,
        URL: undefined,
        EMail: undefined,
        Telefone: undefined,
        Mobile: undefined,
        OpeningHours: undefined,
        product_categories: undefined,
        BrandsandModels: undefined,
        Services: undefined,
        Parking: undefined,
        PublicTransport: undefined,
        Languages: undefined,
        publishedAt: null,
        user: undefined,
        createdByReaperaturbetrieb: true,
        finalSend: false,
        updateMail: false,
      },
    };
  }

  async ngOnInit() {
    this.fetchAllProductCategories();
    this.currentUserId = await this.getCurrentUserId();
    const reparaturbetriebData = await this.getReparaturbetriebProfileData();

    if (typeof reparaturbetriebData === 'undefined') {
      this.changesFromExistingProfile = true;
      return;
    }

    if (reparaturbetriebData?.publishedAt) {
      this.profileIsPublished = true;
    }

    this.profileFinalSend = reparaturbetriebData.finalSend;
    this.profileExists = true;

    for (const field of Object.keys(reparaturbetriebData)) {
      const fieldValue = reparaturbetriebData[field];

      if (field == 'product_categories' && Array.isArray(fieldValue.data)) {
        for (const product_category of fieldValue.data) {
          this.selectedOptions.push(product_category.id);
        }
      } else if (field == 'Image' && fieldValue.data != null) {
        for (const image of fieldValue.data) {
          const uploadFile: NzUploadFile = {
            id: image.id,
            uid: image.attributes.hash,
            name: image.attributes.name,
            filename: image.attributes.name,
            status: 'done',
            thumbUrl:
              environment.strapiUrl + image.attributes.formats.thumbnail.url,
          };

          this.initFileList = [...this.initFileList, uploadFile];
          this.uploadedImageIds.push(image.id);
        }
        this.uploadCounter = this.initFileList.length;
      } else if (this.reperaturProfileForm.controls[field]) {
        this.reperaturProfileForm.controls[field].patchValue(fieldValue!);
      }
    }

    this.reperaturProfileForm.controls['image'].patchValue([
      ...this.uploadedImageIds,
    ]);
    this.initialFormValues = this.reperaturProfileForm.value;
    this.changesFromExistingProfile = false;

    this.reperaturProfileForm.valueChanges.subscribe(() => {
      this.checkForChanges();
    });
  }

  checkForChanges() {
    const currentValues = this.reperaturProfileForm.value;
    const initialValues = this.initialFormValues;
    let hasChanges = false;

    for (const key of Object.keys(currentValues)) {
      if (currentValues[key] !== initialValues[key]) {
        if (
          Array.isArray(currentValues[key]) &&
          Array.isArray(initialValues[key])
        ) {
          if (!this.arraysEqual(currentValues[key], initialValues[key])) {
            hasChanges = true;
            break;
          }
        } else {
          hasChanges = true;
          break;
        }
      }
    }

    this.changesFromExistingProfile = hasChanges;
  }

  arraysEqual(a: any[], b: any[]) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  }

  async getReparaturbetriebProfileData() {
    var data = await fetch(
      `${environment.strapiUrl}/api/reparaturbetriebs?populate=*&publicationState=preview&filters[user]=${this.currentUserId}`,
      {
        method: 'GET',
      }
    ).then((response) => response.json());

    this.reparaturbetriebProfileId = data?.data?.[0]?.id;
    data = data?.data?.[0]?.attributes;
    return data;
  }

  fetchAllProductCategories(
    page: number = 1,
    uniqueIds: Set<number> = new Set()
  ) {
    this.productCategoryService
      .getProductCategories({
        sort: 'Label:ASC',
        'pagination[page]': page,
      })
      .subscribe((res) => {
        res.data?.forEach((option) => {
          if (option.id !== undefined && !uniqueIds.has(option.id)) {
            this.productCategoriesOptions?.push(option);
            uniqueIds.add(option.id);
          }
        });

        if (
          res.meta &&
          res.meta.pagination &&
          res.meta.pagination.total &&
          res.meta.pagination.total >
            (this.productCategoriesOptions?.length || 0)
        ) {
          this.fetchAllProductCategories(page + 1, uniqueIds);
        }
      });
  }

  checkFileSize = (file: NzUploadFile): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          timer: 3000,
          icon: 'error',
          title: this.translateService.instant(
            'repairProfile.edit.errorFileMessage'
          ),
          showConfirmButton: false,
        });
        observer.complete();
        return;
      }
      observer.next(isLt2M);
      observer.complete();
    });

  uploadFile(item: NzUploadXHRArgs): Subscription {
    this.checkForChanges();
    const formData = new FormData();
    const file = item.file as unknown as File;

    if (file && item) {
      formData.append('files', file);

      const uploadReq = new HttpRequest(
        'POST',
        `${environment.strapiUrl}/api/upload`,
        formData,
        {
          reportProgress: true,
        }
      );

      return this.http.request(uploadReq).subscribe({
        next: (result: any) => {
          if (result.type === HttpEventType.UploadProgress) {
            if (result.total && result.total > 0) {
              (result as any).percent = (result.loaded / result.total) * 100;
              item.onProgress!(result, item.file);
            }
          } else if (result instanceof HttpResponse) {
            item.onSuccess!(result.body, item.file, result);
            this.uploadedImageIds.push(result.body[0].id);
            this.uploadCounter++;
            this.reperaturProfileForm.controls['image'].patchValue(
              this.uploadedImageIds
            );
          }
        },
        error: (error) => {
          item.onError!(error, item.file);
        },
      });
    } else {
      return new Subscription();
    }
  }

  removeFile = (file: NzUploadFile): Observable<boolean> => {
    const fileId = file.response ? file.response[0].id : file['id'];
    const index = this.uploadedImageIds.indexOf(fileId);

    this.removeFileIds.push(fileId);
    this.uploadedImageIds.splice(index, 1);
    this.uploadCounter--;
    this.reperaturProfileForm.controls['image'].patchValue(
      this.uploadedImageIds
    );
    return of(true);
  };

  async getCurrentUserId() {
    const token = localStorage.getItem('jwtToken');

    const currentUser = await fetch(`${environment.strapiUrl}/api/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
    return currentUser.id;
  }

  async setReqBody(
    publish?: boolean,
    finalSend?: boolean,
    updateMail?: boolean
  ): Promise<void> {
    this.reqBody.data.Image = this.uploadedImageIds;
    this.reqBody.data.Name = this.reperaturProfileForm.controls['Name'].value;
    this.reqBody.data.CompanyNo =
      this.reperaturProfileForm.controls['CompanyNo'].value;
    this.reqBody.data.Description =
      this.reperaturProfileForm.controls['Description'].value;
    this.reqBody.data.Address =
      this.reperaturProfileForm.controls['Address'].value;
    this.reqBody.data.PLZ = this.reperaturProfileForm.controls['PLZ'].value;
    this.reqBody.data.Location =
      this.reperaturProfileForm.controls['Location'].value;
    this.reqBody.data.URL = this.reperaturProfileForm.controls['URL'].value;
    this.reqBody.data.EMail = this.reperaturProfileForm.controls['EMail'].value;
    this.reqBody.data.Telefone =
      this.reperaturProfileForm.controls['Telefone'].value;
    this.reqBody.data.Mobile =
      this.reperaturProfileForm.controls['Mobile'].value;
    this.reqBody.data.OpeningHours =
      this.reperaturProfileForm.controls['OpeningHours'].value;
    this.reqBody.data.product_categories =
      this.reperaturProfileForm.controls['product_categories'].value;
    this.reqBody.data.BrandsandModels =
      this.reperaturProfileForm.controls['BrandsandModels'].value;
    this.reqBody.data.Services =
      this.reperaturProfileForm.controls['Services'].value;
    this.reqBody.data.Parking =
      this.reperaturProfileForm.controls['Parking'].value;
    this.reqBody.data.PublicTransport =
      this.reperaturProfileForm.controls['PublicTransport'].value;
    this.reqBody.data.Languages =
      this.reperaturProfileForm.controls['Languages'].value;
    this.reqBody.data.publishedAt = !publish ? null : new Date();
    this.reqBody.data.user = await this.getCurrentUserId();
    this.reqBody.data.finalSend = finalSend;
    this.reqBody.data.updateMail = updateMail;
  }

  async saveData(finalSend: boolean) {
    if (this.reperaturProfileForm.valid) {
      await this.setReqBody(false, finalSend);

      for (const id of this.removeFileIds) {
        this.uploadFileService
          .uploadFilesIdDelete({
            id: id,
          })
          .subscribe();
      }

      const endpoint = this.profileExists
        ? `${environment.strapiUrl}/api/reparaturbetriebs/${this.reparaturbetriebProfileId}`
        : `${environment.strapiUrl}/api/reparaturbetriebs`;

      const method = this.profileExists ? 'PUT' : 'POST';

      try {
        const response = await fetch(endpoint, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.reqBody),
        });
        return response;
      } catch (error) {
        console.error('Error saving data:', error);
        return undefined;
      }
    } else {
      this.validateForm();
      return undefined;
    }
  }

  async onSubmit() {
    if (!this.changesFromExistingProfile) {
      return;
    }

    // Trigger validation for product_categories control
    this.reperaturProfileForm
      .get('product_categories')
      ?.updateValueAndValidity();

    // Check form validity
    try {
      const response = await this.saveData(false);
      this.handleResponse(response, 'repairProfile.edit.successMessage');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: this.translateService.instant('repairProfile.edit.errorMessage'),
      });
    }
  }

  async onSend() {
    this.reperaturProfileForm
      .get('product_categories')
      ?.updateValueAndValidity();

    Swal.fire({
      icon: 'info',
      text: this.translateService.instant('repairProfile.edit.sendMessage'),
      showCancelButton: true,
      cancelButtonText: this.translateService.instant(
        'repairProfile.edit.cancelButton'
      ),
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.saveData(true);
        this.handleResponse(response, 'repairProfile.edit.sendSuccessMessage');
      }
    });
  }

  async onUpdate() {
    if (!this.changesFromExistingProfile) {
      return;
    }

    this.reperaturProfileForm
      .get('product_categories')
      ?.updateValueAndValidity();

    if (this.reperaturProfileForm.valid) {
      await this.setReqBody(true, true, true);

      try {
        const response = await fetch(
          `${environment.strapiUrl}/api/reparaturbetriebs/${this.reparaturbetriebProfileId}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.reqBody),
          }
        );
        this.handleResponse(
          response,
          'repairProfile.edit.updateSuccessMessage'
        );
      } catch (error) {
        Swal.fire({
          icon: 'error',
          text: this.translateService.instant(
            'repairProfile.edit.errorMessage'
          ),
        });
      }
    } else {
      this.validateForm();
    }
  }

  private validateForm() {
    Object.values(this.reperaturProfileForm.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  private handleResponse(
    response: Response | undefined,
    successMessage: string
  ) {
    if (response?.ok) {
      Swal.fire({
        icon: 'success',
        text: this.translateService.instant(successMessage),
      }).then(() => {
        window.location.reload();
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: this.translateService.instant('repairProfile.edit.errorMessage'),
      });
    }
  }
}
