import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./page/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'item-detail',
    loadChildren: () => import('./page/item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
  },
  {
    path: 'account-setting',
    loadChildren: () => import('./page/account-setting/account-setting.module').then( m => m.AccountSettingPageModule)
  },
  {
    path: 'list-message',
    loadChildren: () => import('./page/list-message/list-message.module').then( m => m.ListMessagePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./page/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'add-book',
    loadChildren: () => import('./page/add-book/add-book.module').then( m => m.AddBookPageModule)
  },
  {
    path: 'search-filter',
    loadChildren: () => import('./page/search-filter/search-filter.module').then( m => m.SearchFilterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
