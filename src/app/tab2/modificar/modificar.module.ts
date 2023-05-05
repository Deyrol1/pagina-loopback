

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPageRoutingModule } from './modificar-routing.module';

import { ModificarPage } from './modificar.page';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPageRoutingModule,
    SharedModule
    
  ],
  declarations: [ModificarPage]
})
export class ModificarPageModule {}
