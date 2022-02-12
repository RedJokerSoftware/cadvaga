import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public vagas: Vaga[]=[];
  public vaga: Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService:VagasService) { }

  ngOnInit(): void {
    this.listarVagas()
  }

  listarVagas(){
    this._vagasService.getVagas().subscribe(
      retornaVaga =>{ 
        this.vagas=retornaVaga.map(
          item=>{return new Vaga(
            item.id,
            item.nome,
            item.foto,
            item.descricao,
            item.salario
          );}
        )
      }
    )
    
    }


cadastrar(){
  this._vagasService.cadastrarVaga(this.vaga).subscribe(
  vaga =>{this.vaga = new Vaga(0,"","","",0)},
  err => {console.log("erro ao cadastrar vaga")});

  window.location.href="/list_vagas";
}

atualizar(id:number){
  this._vagasService.atualizarVaga(id,this.vaga).subscribe(
  vaga =>{this.vaga = new Vaga(0,"","","",0)},
  err => {console.log("erro ao atualizar vaga")});

  window.location.href="/list_vagas";
}

excluir(id:number){
  this._vagasService.deletarVaga(id).subscribe(
  vaga =>{this.vaga = new Vaga(0,"","","",0)},
  err => {console.log("erro ao deletar vaga")});

  window.location.href="/list_vagas";
}


  
  

}
