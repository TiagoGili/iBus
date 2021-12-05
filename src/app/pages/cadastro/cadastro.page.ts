import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../model/IUsuario.model'; 
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  //Usuário
  usuario: IUsuario ={
    id: null,
    nome: '',
    email: '',
    senha: ''
  } 

  corSenha = "white";
  confirmarSenha: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastrarUsuario() {
    console.log(this.usuario);
    if(this.validarCamposUsuario()){
      if(this.usuario.senha == this.confirmarSenha){
        this.usuarioService.cadastrar(this.usuario).subscribe( 
          retorno => { 
            //this.usuarioService.exibirToast(retorno.mensagem,'success');
            this.usuarioService.exibirToast("Acesso realizado com sucesso.", "success");
            this.router.navigate(['/home-map']);
          } 
        ); 
      } else {
        this.usuarioService.exibirToast("As senhas informadas não coincidedem.", "danger");
      }
    }
  }

  validarCamposUsuario(): boolean{
    if (this.usuario.nome == '' || this.usuario.senha == '' || this.usuario.email == '' || this.confirmarSenha == ''){
      this.usuarioService.exibirToast("Todos os campos devem ser preenchidos para realizar o cadastro.", "danger");
      return false;
    } else {
      return true;
    }
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
