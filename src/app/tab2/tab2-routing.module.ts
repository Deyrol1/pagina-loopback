import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'modificar/:id/:i',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)

  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
