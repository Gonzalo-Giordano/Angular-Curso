import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl : 'heroe.component.html',
})
export class HeroeComponent{

    nombre: String = 'Iron Man';
    edad  : number = 40;


    obtenerNombre():String{
        // return this.nombre +    ' ' + this.edad;
        return `${this.nombre} ${this.edad}`; 
    }

    get nombreMayuscula2(){
        return this.nombre.toUpperCase();
    }

    nombreMayuscula():String{ 
    
        return this.nombre.toUpperCase();
    }

    cambiarNombre(){
        this.nombre = ' Spider Man';
    }
    
    cambiarEdad(){
        this.edad = 20;
    }





}