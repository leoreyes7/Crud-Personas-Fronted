import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../models/persona/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // URL que obtiene todas las personas desde el backend
  private API_SERVER="http://localhost:8080/persona/";

  constructor(private httpClient : HttpClient) { }

  // Obtener lista de personas
  public obtenerListaPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.API_SERVER+"listar");
  }

  // Registrar persona
  public registrarPersona(persona: Persona): Observable<Object>{
    return this.httpClient.post(this.API_SERVER+"agregar", persona);
  }

  public actualizarPersona(id: number, persona:Persona): Observable<Object>{
    return this.httpClient.put(this.API_SERVER+"actualizar/"+id, persona)
  }

  public eliminarPersona(id: number): Observable<Object>{
    return this.httpClient.delete(this.API_SERVER+"eliminar/"+id)
  }

  public listarPersonaPorId (id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.API_SERVER+"listar/"+id);
  }

} 
