import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { InterfasVentaComponent } from './interfas-venta/interfas-venta.component';
const routes: Routes = [
  {path: '',component:PrincipalComponent},
  {path:'header', component:HeaderComponent},
  {path:'ventaIn',component:InterfasVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
