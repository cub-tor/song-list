import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})



export class PrincipalComponent {
  @ViewChild('formpro') formpro: NgForm;
  //provider: any;
  formulario: any;
  formatos: string[] = ["mp3","wab","ogg", "aiff", "raw"];
  datosCancion: any;
  canciones: {cancion: string, autor: string, formatos: string}[] = [];
  

 
 

  constructor() {
    this.formulario = {
      cancion: "",
      autor: "",
      formatos: ""
    }
  }

  onSubmit() {

    //El valor de los campos se almacena en el objeto datosCancion
    this.datosCancion = {
      cancion: this.formpro.value.cancion,
      autor: this.formpro.value.autor,
      formatos: this.formpro.value.formatos
    };

    //Introduce el obejto datosCancion (el valor de los campos) en  un array
    this.canciones.push(this.datosCancion);

    //Resetea los campos después de enviar los datos
    this.formpro.reset({
      cancion: '',
      autor: '',
      formatos: ''
    });
    
    
  }

 



  /*onSubmit(){
    
    this.formulario.cancion = this.formpro.value.cancion;
    this.formulario.autor = this.formpro.value.autor;
    this.formulario.formatos = this.formpro.value.formatos;

  }*/

  

}
