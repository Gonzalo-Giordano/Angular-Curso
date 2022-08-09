import { CommonModule } from "@angular/common";
import {  NgModule} from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [  /// que cosas tiene este modulo ej que componentes tenemos declarados y vamos a utilizar. aca esta todo invisible para la app, hay que exportarlo.
        HeroeComponent,
        ListadoComponent
    ],
    exports: [   // que cosas quiero q sean visibles fuera de este modulo
        ListadoComponent
    ],
    imports: [  // aqui adentro van modulos.
         CommonModule  // se importa para el ngIF/ngFOR .  Si utilizamos directivas especificas de angular se utiliza          
    ],
})

export class heroesModule{

}