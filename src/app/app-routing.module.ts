import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {
      path: "", component: BlogListComponent
  }, {
      path: "blogDetails/:blogId", component: BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
