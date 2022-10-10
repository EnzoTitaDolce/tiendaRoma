import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollModule } from './modules/scroll/scroll.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { RetratosComponent } from './component/retratos/retratos.component';
import { LlaverosComponent } from './component/llaveros/llaveros.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { ImanesComponent } from './component/imanes/imanes.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { InicioComponent } from './component/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RetratosComponent,
    LlaverosComponent,
    EncabezadoComponent,
    ImanesComponent,
    ContactoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
