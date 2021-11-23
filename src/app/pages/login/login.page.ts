import { ILogin } from '../../model/ILogin.model'; 
import { Component, OnInit } from '@angular/core';
//import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //Login
  login: ILogin ={
    email: '',
    senha: ''
  } 

  constructor(
    //private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  conectar() {
    console.log(this.login);
  }
}
