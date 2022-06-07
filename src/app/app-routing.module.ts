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
        path: 'look-book',
        loadChildren: () => import('./look-book/look-book.module').then(m => m.LookBookModule)
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
