import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit{

  persona: Persona = new Persona();

  //constructor(private personaServices: PersonaService){}
  constructor(private personaService: PersonaService, private router:Router){}

  ngOnInit(): void {}

  agregarPersona(){
    this.personaService.registrarPersona(this.persona).subscribe(
      dato => {
        console.log(dato);
        this.redirListaPersonas();
      }, error => console.error(error)
    );
  }

  redirListaPersonas(){
    this.router.navigate(['/personas'])
    Swal.fire('Persona registrada', 'La persona '+this.persona.nombre + ' ha sido registrada con exito', 'success');
    //Swal.fire('asdsad');
  }

  onSubmit(){
    console.log(this.persona);
    this.agregarPersona();
  }
}
