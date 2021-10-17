
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './layout/users/users.component';
import { AdminGuard } from '../../guards/admin.guard';import { UploadImageComponent } from './helpers/upload-image/upload-image.component';
import { TitleComponent } from './helpers/title/title.component';
import { MultiselectDropdownComponent } from './helpers/multiselect-dropdown/multiselect-dropdown.component';
import { SmallLoadingComponent } from './helpers/loading/small-loading/small-loading.component';
import { FilterComponent } from './helpers/filter/filter.component';
import { FormComponent as UserFormComponent } from './layout/users/form/form.component';
import { TableComponent as UsersTableComponent } from './layout/users/table/table.component';
import { DeleteComponent as UserDeleteComponent } from './layout/users/delete/delete.component';
import { SelectFormComponent } from './helpers/form/select-form/select-form.component';
import { InputFormComponent } from './helpers/form/input-form/input-form.component';
import { ErrorsFormComponent } from './helpers/form/errors-form/errors-form.component';
import { ButtonConfirmFormComponent } from './helpers/form/button-confirm-form/button-confirm-form.component';
import { ButtonCloseFormComponent } from './helpers/form/button-close-form/button-close-form.component';
import { CustomFormComponent } from './helpers/form/custom-form/custom-form.component';
import { ButtonEditComponent } from './helpers/form/button-edit/button-edit.component';
import { ButtonCreateComponent } from './helpers/form/button-create/button-create.component';


@NgModule({
  declarations: [
    PanelComponent,
    LoginComponent,
    FilterComponent,
    SmallLoadingComponent,
    MultiselectDropdownComponent,
    TitleComponent,
    UploadImageComponent,
    UsersComponent,
    UsersTableComponent,
    UserFormComponent,
    UserDeleteComponent,
    SelectFormComponent,
    InputFormComponent,
    ErrorsFormComponent,
    ButtonConfirmFormComponent,
    ButtonCloseFormComponent,
    CustomFormComponent,
    ButtonEditComponent,
    ButtonCreateComponent

  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
	providers: [ AdminGuard ]
})
export class PanelModule { }
