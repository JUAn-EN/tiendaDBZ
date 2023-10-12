import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { InterfasVentaComponent } from './interfas-venta/interfas-venta.component';
import { InterfasVentaGokuComponent } from './interfas-venta-goku/interfas-venta-goku.component';
const routes: Routes = [
  {path: '',component:PrincipalComponent},
  {path:'header', component:HeaderComponent},
  {path:'ventaIn',component:InterfasVentaComponent},
  {path:'ventaGOku',component:InterfasVentaGokuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
