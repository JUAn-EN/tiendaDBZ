import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Asegúrate de importar el módulo de enrutamiento

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';
import { LfigurasComponent } from './lfiguras/lfiguras.component';
import { InterfasVentaComponent } from './interfas-venta/interfas-venta.component';
import { ScrollListenerDirective } from './scroll/scroll-listener.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    FooterComponent,
    Footer2Component,
    LfigurasComponent,
    InterfasVentaComponent,
    ScrollListenerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
