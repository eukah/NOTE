import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './cabecalho/main/main.component';
import { CriarnotaComponent } from './cabecalho/criarnota/criarnota.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'criar-nota',
    component: CriarnotaComponent
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
