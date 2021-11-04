import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FlexLayoutModule } from '@angular/flex-layout';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';




import { RegistroComponent } from './registro.component';

const routes = [
  {
    path: '',
    component: RegistroComponent
  }
]

@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,

    ReactiveFormsModule,
  ]
})
export class RegistroModule { }
