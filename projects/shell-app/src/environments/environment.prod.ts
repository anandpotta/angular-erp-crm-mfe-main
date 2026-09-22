const repoName = 'angular21-erp-crm-microfrontends';

export const environment = {
  production: true,
  remoteEntries: {
    'crm-app': `/${repoName}/remotes/crm/remoteEntry.json`,
    'inventory-app': `/${repoName}/remotes/inventory/remoteEntry.json`,
    'accounting-app': `/${repoName}/remotes/accounting/remoteEntry.json`,
  },
};
