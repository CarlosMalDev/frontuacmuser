import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { InicioComponent } from './inicio.component';

const routes = [
  {
    path: '',
    component: InicioComponent
  }
]

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FlexLayoutModule,
  ]
})
export class InicioModule { }
