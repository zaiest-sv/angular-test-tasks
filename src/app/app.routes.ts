import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'timezone', loadChildren: () => import('./components/timezone/timezone.routes').then(m => m.TIMEZONE_ROUTES) },
    { path: 'search-form', loadChildren: () => import('./components/search-form/search-form.routes').then(m => m.SEARCH_FORM_ROUTES) },
    { path: '', redirectTo: 'timezone', pathMatch: 'full' },
    { path: '**', redirectTo: 'timezone' }
];
