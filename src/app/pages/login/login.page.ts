import { ILogin } from '../../model/ILogin.model'; 
import { IUsuario } from '../../model/IUsuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Login
  login: ILogin = {
    email: '',
    senha: ''
  }

  //Usuario
  usuario: IUsuario = {
    id: null,
    nome: '',
    email: '',
    senha: ''
  }

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  conectar() {
    if(this.validarCampos()){
      this.usuarioService.consultar(this.login).subscribe( 
        retorno => {
          //environment.codigo = null;
          //environment.codigo = retorno.codigo;
          //this.usuario.id = retorno.codigo;
          //console.log(retorno);
          this.usuarioService.exibirToast("Acesso realizado com sucesso.", "success");
          this.router.navigate(['/home-map']);
        } 
      );
    }
    //console.log(this.usuario);
  }

  validarCampos(): boolean{
    if (this.login.email == null || this.login.senha == null){
      this.usuarioService.exibirToast("Todos os campos devem ser preenchidos para acessar sua conta.", "danger");
      return false;
    } else {
      return true;
    }
  }
}
