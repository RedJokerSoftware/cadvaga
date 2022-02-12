import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FormlistaComponent } from './formlista/formlista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CandidatarComponent } from './candidatar/candidatar.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaVagasComponent,
    MenuComponent,
    RodapeComponent,
    FormlistaComponent,
    CadastroComponent,
    CandidatarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
