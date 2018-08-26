import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
} from 'ng2-translate/ng2-translate';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatStepper,
  MatPaginatorIntl
} from '@angular/material';
import { Ng5BreadcrumbModule, BreadcrumbService } from 'ng5-breadcrumb';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import 'hammerjs';
import { RoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.user';
import { ForgotPasswordComponent } from './pages/session/forgot-password/forgot.password';
import { LockScreenComponent } from './pages/session/lockscreen/lockscreen.component';
import { MainComponent } from './pages/main/main.component';
import { ShareComponent } from './pages/share/share.component';
import { CountdownModule } from 'ngx-countdown';
import { UploadLogoComponent } from './pages/dashboard/upload/upload.logo';
import { UploadFileComponent } from './pages/dashboard/upload/upload.file';
import { PendingFileComponent } from './pages/dashboard/pending/pending.file';
import { DetailComponent } from './pages/dashboard/detail/detail.component';
import { EditPermissionComponent } from './pages/main/permission/permission.edit';
import { FlowTemplateComponent } from './pages/main/flowTemplate/flow.template';
import { NewTemplateComponent } from './pages/main/flowTemplate/new.template';
import { FileCategoryComponent } from './pages/main/file/file.category';
import { UserNavComponent } from './pages/main/user/user.nav';
import { UserFolderComponent } from './pages/main/user/user.folder';
import { UserProfileComponent } from './pages/main/user/user.profile';
import { UserPasswordComponent } from './pages/main/user/user.password';
import { RegisterCompany } from './pages/register/register.company';
import {
  ConfirmationService,
  JasperoConfirmationsModule
} from '@jaspero/ng-confirmations';
import { AlertsService, JasperoAlertsModule } from '@jaspero/ng-alerts';
import { BreadcrumbModule, CheckboxModule } from 'primeng/primeng';
import { SingleFileInfoComponent } from './pages/dashboard/single-file-info/single-file-info.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxEchartsModule } from 'ngx-echarts';
import { MultipleFilesInfoComponent } from './pages/dashboard/multiple-files-info/multiple-files-info.component';
import { FileOperatorsComponent } from './pages/dashboard/file-operators/file-operators.component';
import { HttpClientModule } from '@angular/common/http';
import { ReversePipe } from 'ngx-pipes';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserSpaceComponent } from './pages/main/user/user.space';
import { Custermonitor } from './pages/main/clusterMonitor/custermonitor';
import { UserSignComponent } from './pages/main/user/user.sign';
import { UserFaceComponent } from './pages/main/user/user.face';
import { UserAuthSettingComponent } from './pages/main/user/user.authSetting';
import { myPaginator } from './pages/main/my-paginator';
import { UserSpecialPasswordComponent } from './pages/main/user/user.specialpassword';
//import {MenuToggleModule} from './component/menu/menu-toggle.module';
//import {PageTitleService} from './service/page-title.service';
//import { TreeModule } from '../lib/tree/angular-tree-component';
//import { FileUploadModule } from '../lib/file-upload';
//import { ByteToMbPipe } from './pipe/byteToMb.pipe';
//import { Context } from './service/context.service';
//import { SearchService } from './service/search.service';
//import { FileService } from './service/file.service';
//import { FolderService } from './service/folder.service';
//import { OrganizeService } from './service/organize.service';
//import { DlgCategoryComponent } from './dialog/dialog.category';
//import { DlgAuthSettingComponent } from './dialog/dialog.authSetting';
//import { DlgScopeComponent } from './dialog/dialog.scope';
//import { DlgFolderComponent } from './dialog/dialog.folder';
//import { DlgSendMailComponent } from './dialog/dialog.sendMail';
//import { DlgSignatureComponent } from './dialog/dialog.signature';
//import { DlgEditorComponent } from './dialog/dialog.editor';
//import { DlgFlowPicComponent } from './dialog/dialog.flowPic';
//import { DlgAutherizeComponent } from './dialog/dialog.autherize';
//import { MessageService } from './service/message.service';
//import { CompanyService } from './service/company.service';
//import { AuthGuard } from './service/auth.guard';
//import { ImageCropperModule } from '../lib/image-cropper/imageCropperModule';
//import { FirstLetterCapitalPipe } from './pipe/first-letter-capital.pipe';
//import { WorkFlowService } from './service/workFlow.service';
//import { IProInstService } from './service/iProInst.service';
//import { DebounceClickDirective } from './directive/debounceClick.directive';
//import { IAgentService } from './service/iAgent.service';
//import { DlgResetPwdComponent } from './dialog/dialog.resetpwd';
//import { DlgPermissionsComponent } from './dialog/dialog.permissions';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import {
  MenuToggleModule,
  PageTitleService,
  TreeModule,
  FileUploadModule,
  ByteToMbPipe,
  Context,
  SearchService,
  FileService,
  FolderService,
  OrganizeService,
  DlgCategoryComponent,
  DlgAuthSettingComponent,
  DlgScopeComponent,
  DlgFolderComponent,
  DlgSendMailComponent,
  DlgSignatureComponent,
  DlgEditorComponent,
  DlgFlowPicComponent,
  DlgAutherizeComponent,
  MessageService,
  CompanyService,
  AuthGuard,
  ImageCropperModule,
  FirstLetterCapitalPipe,
  WorkFlowService,
  IProInstService,
  DebounceClickDirective,
  IAgentService,
  DlgResetPwdComponent,
  DlgPermissionsComponent
} from '@wkycg/ngx3-common';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2DeviceDetectorModule.forRoot(),
    RoutingModule,
    FlexLayoutModule,
    Ng5BreadcrumbModule.forRoot(),
    PerfectScrollbarModule,
    MenuToggleModule,
    HttpModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    JasperoConfirmationsModule,
    JasperoAlertsModule,
    TreeModule,
    CheckboxModule,
    BreadcrumbModule,
    FileUploadModule,
    PdfViewerModule,
    NgxEchartsModule,
    CountdownModule,
    MatStepperModule,
    MatStepperModule,
    ImageCropperModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    })
  ],
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LockScreenComponent,
    ShareComponent,
    UploadLogoComponent,
    UploadFileComponent,
    PendingFileComponent,
    DetailComponent,
    EditPermissionComponent,
    FlowTemplateComponent,
    NewTemplateComponent,
    FileCategoryComponent,
    UserNavComponent,
    UserFolderComponent,
    UserProfileComponent,
    UserPasswordComponent,
    RegisterCompany,
    SingleFileInfoComponent,
    DlgCategoryComponent,
    DlgAuthSettingComponent,
    DlgScopeComponent,
    DlgFolderComponent,
    DlgSendMailComponent,
    DlgSignatureComponent,
    DlgEditorComponent,
    DlgFlowPicComponent,
    DlgAutherizeComponent,
    DlgResetPwdComponent,
    DlgPermissionsComponent,
    ByteToMbPipe,
    UserSpaceComponent,
    UserSignComponent,
    UserFaceComponent,
    UserAuthSettingComponent,
    UserSpecialPasswordComponent,
    Custermonitor,
    MultipleFilesInfoComponent,
    FileOperatorsComponent,
    FirstLetterCapitalPipe,
    DebounceClickDirective
  ],
  entryComponents: [
    DlgCategoryComponent,
    DlgAuthSettingComponent,
    DlgScopeComponent,
    DlgFolderComponent,
    DlgSendMailComponent,
    DlgSignatureComponent,
    DlgEditorComponent,
    DlgFlowPicComponent,
    DlgAutherizeComponent,
    DlgResetPwdComponent,
    DlgPermissionsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AlertsService,
    ConfirmationService,
    ReversePipe,
    BreadcrumbService,
    PageTitleService,
    WorkFlowService,
    IProInstService,
    IAgentService,
    Context,
    SearchService,
    FileService,
    FolderService,
    OrganizeService,
    MessageService,
    CompanyService,
    { provide: MatPaginatorIntl, useValue: myPaginator() },
    AuthGuard,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: MatStepper, useValue: {} },
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
