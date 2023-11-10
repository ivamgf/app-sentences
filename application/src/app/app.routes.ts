import { Routes } from '@angular/router';
import { SigninComponent } from './sign/signin/signin.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { KnowledgeComponent } from './modules/knowledge/knowledge.component';
import { PolicyComponent } from './modules/policy/policy.component';
import { RecoveryComponent } from './modules/recovery/recovery.component';
import { TermsComponent } from './modules/terms/terms.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign/signin',
    pathMatch: 'full'
  },
  {
    path: 'sign/signin',
    component: SigninComponent
  },
  {
    path: 'modules/home',
    component: HomeComponent
  },
  {
    path: 'modules/about',
    component: AboutComponent
  },
  {
    path: 'modules/contacts',
    component: ContactsComponent
  },
  {
    path: 'modules/knowledge',
    component: KnowledgeComponent
  },
  {
    path: 'modules/policy',
    component: PolicyComponent
  },
  {
    path: 'modules/recovery',
    component: RecoveryComponent
  },
  {
    path: 'modules/terms',
    component: TermsComponent
  }
];
