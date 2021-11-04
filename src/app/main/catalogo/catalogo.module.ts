import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CatalogoComponent } from './catalogo.component';


const routes = [
  {
    path: '',
    component: CatalogoComponent
  }
]

@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FlexLayoutModule,
  ]
})
export class CatalogoModule { }
