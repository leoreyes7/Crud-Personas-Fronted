import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './components/persona/listar-personas/lista-personas.component';
import { RegistrarPersonaComponent } from './components/persona/registrar-persona/registrar-persona.component';
import { ActualizarPersonaComponent } from './components/persona/actualizar-persona/actualizar-persona.component';

const routes: Routes = [
  {path : 'personas', component: ListaPersonasComponent},
  {path : '', redirectTo: 'personas', pathMatch: 'full'}, // cada vez que se ingrese a una ruta vacia va a lista personas
  {path : 'registrar-persona', component: RegistrarPersonaComponent},
  {path : 'actualizar-persona/:id', component: ActualizarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
