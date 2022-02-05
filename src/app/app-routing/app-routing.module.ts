import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVagasComponent } from '../lista-vagas/lista-vagas.component';
import { FormlistaComponent } from '../formlista/formlista.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { CandidatarComponent } from '../candidatar/candidatar.component';

const routes: Routes = [
{path:"list_vagas",component:ListaVagasComponent},
{path:"index",component:FormlistaComponent},
{path:"cadastro",component:CadastroComponent},
{path:"candidatar",component:CandidatarComponent},
{path:'',redirectTo:'/index',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
