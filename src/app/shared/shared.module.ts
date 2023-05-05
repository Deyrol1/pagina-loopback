import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2PageRoutingModule } from '../tab2/tab2-routing.module';



@NgModule({
  declarations: [PlantillaComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
  ],
  exports:[
    PlantillaComponent
  ]
})
export class SharedModule { }
