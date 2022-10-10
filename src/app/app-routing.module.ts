import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { ImanesComponent } from './component/imanes/imanes.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { LlaverosComponent } from './component/llaveros/llaveros.component';
import { RetratosComponent } from './component/retratos/retratos.component';

const routes: Routes = [
  {path:'llaveros', component:LlaverosComponent},
  {path:'retratos', component:RetratosComponent},
  {path:'inicio', component:InicioComponent},
  {path:'imanes', component:ImanesComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
