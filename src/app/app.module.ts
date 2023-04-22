import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './components/persona/listar-personas/lista-personas.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPersonaComponent } from './components/persona/registrar-persona/registrar-persona.component'; // Se agrega
import { FormsModule } from '@angular/forms';
import { ActualizarPersonaComponent } from './components/persona/actualizar-persona/actualizar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    RegistrarPersonaComponent,
    ActualizarPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // También se agrega
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
