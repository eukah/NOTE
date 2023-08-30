import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho/cabecalho.component';
import { SideComponent } from './cabecalho/side/side.component';
import { MainComponent } from './cabecalho/main/main.component';
import { CriarnotaComponent } from './cabecalho/criarnota/criarnota.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    SideComponent,
    MainComponent,
    CriarnotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
