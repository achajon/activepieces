import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiEePlatformRoutes } from './lib.routes';
import { UiCommonModule } from '@activepieces/ui/common';
import { PlatformDashboardContainerComponent } from './pages/platform-dashboard-container/platform-dashboard-container.component';
import { ProjectsTableComponent } from './pages/projects-table/projects-table.component';
import { CreateProjectDialogComponent } from './pages/projects-table/create-project-dialog/create-project-dialog.component';
import { UpdateProjectDialogComponent } from './pages/projects-table/update-project-dialog/update-project-dialog.component';
import { PlatformAppearanceComponent } from './pages/platform-appearance/platform-appearance.component';
import { PlatformSettingsComponent } from './pages/platform-settings/platform-settings.component';
import { PiecesTableComponent } from './pages/pieces-table/pieces-table.component';
import { EditAddPieceOAuth2CredentialsDialogComponent } from './components/dialogs/edit-add-piece-oauth-2-credentials-dialog/edit-add-piece-oauth-2-credentials-dialog.component';
import { SmtpSettingsComponent } from './components/smtp-settings/smtp-settings.component';
import { SigningKeysTableComponent } from './components/signing-keys-table/signing-keys-table.component';
import { CreateSigningKeyDialogComponent } from './components/dialogs/create-signing-key-dialog/create-signing-key-dialog.component';
import { TermsAndServicesSettingsComponent } from './components/terms-and-services-settings/terms-and-services-settings.component';
import { CustomDomainTableComponent } from './components/custom-domain-table/custom-domain-table.component';
import { CreateCustomDomainDialogComponent } from './components/dialogs/create-custom-domain-dialog/create-custom-domain-dialog.component';
import { ApiKeysTableComponent } from './components/api-keys-table/api-keys-table.component';
import { CreateApiKeyDialogComponent } from './components/dialogs/create-api-key-dialog/create-api-key-dialog.component';
import { TemplatesTableComponent } from './pages/templates-table/templates-table.component';
import { CreateOrUpdateTemplateDialogueComponent } from './components/dialogs/create-or-update-template-dialogue/create-or-update-template-dialogue.component';
import { UiFeaturePiecesModule } from '@activepieces/ui/feature-pieces';
import { UsersTableComponent } from './pages/users-table/users-table.component';
import { SsoSettingsComponent } from './components/sso-settings/sso-settings.component';
import { AddAllowedEmailDomainDialogComponent } from './components/dialogs/add-allowed-email-domain-dialog/add-allowed-email-domain-dialog.component';
import { AllowedEmailDomainsListComponent } from './components/cards/allowed-email-domains-list/allowed-email-domains-list.component';
import { ConfigureConfederatedAuthnCardComponent } from './components/cards/configure-confederated-authn-card/configure-confederated-authn-card.component';
import { EnableFederatedAuthnProviderDialogComponent } from './components/dialogs/enable-federated-authn-provider-dialog/enable-federated-authn-provider-dialog.component';
import { ConfigureAllowingEmailLoginsCardComponent } from './components/cards/configure-allowing-email-logins-card/configure-allowing-email-logins-card.component';
@NgModule({
  imports: [
    UiCommonModule,
    CommonModule,
    RouterModule.forChild(uiEePlatformRoutes),
    UiFeaturePiecesModule,
  ],
  declarations: [
    PlatformDashboardContainerComponent,
    ProjectsTableComponent,
    CreateProjectDialogComponent,
    UpdateProjectDialogComponent,
    PlatformAppearanceComponent,
    PlatformSettingsComponent,
    ApiKeysTableComponent,
    SigningKeysTableComponent,
    CreateApiKeyDialogComponent,
    CreateSigningKeyDialogComponent,
    CreateCustomDomainDialogComponent,
    PiecesTableComponent,
    CreateOrUpdateTemplateDialogueComponent,
    EditAddPieceOAuth2CredentialsDialogComponent,
    SmtpSettingsComponent,
    TermsAndServicesSettingsComponent,
    TemplatesTableComponent,
    CustomDomainTableComponent,
    UsersTableComponent,
    SsoSettingsComponent,
    AddAllowedEmailDomainDialogComponent,
    AllowedEmailDomainsListComponent,
    ConfigureConfederatedAuthnCardComponent,
    EnableFederatedAuthnProviderDialogComponent,
    ConfigureAllowingEmailLoginsCardComponent,
  ],
})
export class UiEePlatformModule {}
