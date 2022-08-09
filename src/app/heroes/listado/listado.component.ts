import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes : String[] = ['SpiderMan', 'Iron Man ', 'Hulk','Thor'];

  heroeB : String = '';

  borrarHeroe(){ 
    const heroeB = this.heroes.shift() || '' ;  /// si no devuelve un heroe borrado , devuelve un string vacio.
    this.heroeB = heroeB;
  }
}
