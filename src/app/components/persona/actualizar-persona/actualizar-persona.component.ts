import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit{

  id: number;
  persona: Persona = new Persona();

  //constructor(private personaServices: PersonaService){}
  constructor(private personaService: PersonaService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaService.listarPersonaPorId(this.id).subscribe(
      dato=>{
        this.persona = dato;
      }, error => console.log(error)
    );
  }

  redirListaPersonas(){
    this.router.navigate(['/personas'])
    Swal.fire('Persona actualizada', 'La persona '+this.persona.nombre + ' ha sido actualizada con exito', 'success');
    //Swal.fire('asdsad');
  }

  onSubmit(){
    this.personaService.actualizarPersona(this.id,this.persona).subscribe(dato => {
      this.redirListaPersonas();
    },error => console.log(error));
  }
}
