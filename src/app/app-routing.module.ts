import { PageerrorComponent } from './components/pageerror/pageerror.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{
  path:'',
  component:LoginComponent
},
{
  path:'home',
  component:ProductsComponent
},{
  path:'**',
  component:PageerrorComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
