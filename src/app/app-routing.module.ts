import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateListComponent } from './update-list/update-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'update/:id', component: UpdateListComponent},
  {path:'product', component: ProductListComponent},
  {path:'add', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
