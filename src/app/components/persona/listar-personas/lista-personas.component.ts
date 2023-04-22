import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit{
  
  personas:Persona[];

  constructor(private personaServices: PersonaService,  private router:Router){}

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  private obtenerPersonas(){
    this.personaServices.obtenerListaPersonas().subscribe(dato => {
      this.personas = dato;
    });
  }

  actualizarPersona(id:number){
    this.router.navigate(['actualizar-persona',id]);
  }


  eliminarPersona(id: number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el resgitro",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if(result.value){
        this.personaServices.eliminarPersona(id).subscribe(dato => {
          console.log(dato);
          this.obtenerPersonas();
          Swal.fire(
            'Registro eliminado',
            'La persona ha sido eliminada con exito',
            'success'
          )
        })
      } 
    })
    

  }


}
