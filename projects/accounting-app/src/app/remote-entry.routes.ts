import { Routes } from '@angular/router';
import {
  AccountingWorkspaceComponent,
  InvoicesComponent,
  LedgerComponent,
  PaymentsComponent,
} from './accounting-feature.component';

export const REMOTE_ROUTES: Routes = [
  {
    path: '',
    component: AccountingWorkspaceComponent,
    children: [
      { path: '', pathMatch: 'full', component: InvoicesComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'ledger', component: LedgerComponent },
    ],
  },
];
