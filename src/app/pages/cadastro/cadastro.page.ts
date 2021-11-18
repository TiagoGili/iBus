import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../model/IUsuario.model'; 
//import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  //Usuário
  usuario: IUsuario ={
    nome: '',
    email: '',
    senha: ''
  } 

  corSenha = "white";
  confirmarSenha: string = '';

  constructor(
    //private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  cadastrarUsuario() {
    console.log(this.usuario);
  }

  verificarSenha(){
    if(this.usuario.senha != '' && this.confirmarSenha != ''){
      if(this.usuario.senha == this.confirmarSenha){
        this.corSenha = "#D6EAF8";
      } else {
        this.corSenha = "#FADBD8";
      }
    } else {
      this.corSenha = "white";
    }
  }
  
}
