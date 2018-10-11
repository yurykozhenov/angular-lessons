import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from "./gallery/gallery.component";
import { Gallery2Component } from "./gallery2/gallery2.component";
import { Gallery3Component } from "./gallery3/gallery3.component";
import { GalleryItemComponent } from "./gallery-item/gallery-item.component";
import { AuthGuard } from "../auth.guard";
import { DeactivateGuard } from "../deactivate.guard";
import { ItemsResolver } from "../items.resolver";

const myRoutes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: GalleryComponent,
      },
      {
        path: ':id',
        component: GalleryItemComponent,
        data: {
          title: 'My Gallery Item',
          asd: 'asd',
        },
        canDeactivate: [DeactivateGuard],
        resolve: {
          items: ItemsResolver
        }
      },
      // {
      //   path: 'gallery2',
      //   component: Gallery2Component,
      // },
      // {
      //   path: 'gallery3',
      //   component: Gallery3Component,
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(myRoutes)],
  exports: [RouterModule],
})
export class MyPageRoutingModule {}
