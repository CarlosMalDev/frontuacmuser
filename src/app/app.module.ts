import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';





import { MatButtonModule } from '@angular/material/button';



import { AppComponent } from './app.component';

import { MenuComponent } from './main/menu/menu.component';
import { NosotrosComponent } from './main/nosotros/nosotros.component';
import { FooterComponent } from './main/footer/footer.component';


const appRoutes: Routes = [
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./main/menu/menu.module').then(m => m.MenuModule)
  // }
  {
    path: 'inicio',
    loadChildren: () => import('./main/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./main/catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./main/registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./main/busqueda/busqueda.module').then(m => m.BusquedaModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  },
]
                            
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NosotrosComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({ positionClass: 'toast-top-full-width' }),
    FormsModule,


  ],
  exports: [],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
