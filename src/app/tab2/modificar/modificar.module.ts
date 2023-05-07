

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPageRoutingModule } from './modificar-routing.module';

import { ModificarPage } from './modificar.page';
import { Plantilla2Component } from '../plantilla2/plantilla2.component';







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPageRoutingModule,

  ],
  declarations: [ModificarPage,Plantilla2Component]
})
export class ModificarPageModule {}
