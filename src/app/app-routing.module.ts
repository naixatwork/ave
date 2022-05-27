import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'brand',
        loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)
    },
    {
        path: 'local-stores',
        loadChildren: () => import('./local-stores/local-stores.module').then(m => m.LocalStoresModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
