import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "./auth.guard";
import { MaterialDemoComponent } from "./material-demo/material-demo.component";

const appRoutes: Routes = [
  {
    path: '',
    component: MaterialDemoComponent,
    // pathMatch: 'full',
    // redirectTo: 'my-page',
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
