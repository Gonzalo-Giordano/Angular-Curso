import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  // templateUrl: './heroes/heroe/heroe.component.html',  // OTRA FORMA DE MOSTRAR OTRO HTML CAMBIANDO EL HOS
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo : String = 'Contador APP';
  numero : number = 10;


  base : number = 5;

  sumar(){
    this.numero += 1;
  }

  restar() {
    this.numero -= 1; 
  }

  acumular( base : number ){
    this.numero += base;
  }
}
