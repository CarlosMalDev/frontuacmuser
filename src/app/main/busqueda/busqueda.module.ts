import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';




import { BusquedaComponent } from './busqueda.component';


const routes = [
  // {
  //   path: '',
  //   component: BusquedaComponent
  // },
  {
    path: ':idTipo/:idValue',
    component: BusquedaComponent
  }
]


@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FlexLayoutModule,
  ]
})
export class BusquedaModule { }
