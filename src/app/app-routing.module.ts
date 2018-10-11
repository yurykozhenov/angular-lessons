import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "./auth.guard";

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-page',
  },
  {
    path: 'gallery',
    loadChildren: './my-page-module/my-page.module#MyPageModule',
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
