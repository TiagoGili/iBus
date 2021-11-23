import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Variáveis
  //URL: string = 'https://academicapitcc.herokuapp.com/api_academic/login/login.php';
  URL: string = 'http://localhost/ibus/usuario/';

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  //Login
  consultar(login): Observable<any> {
    return this.http.post(this.URL + "/login.php", login).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirToast(erro.error.erro, 'danger'))
    );
  }

  //Cadastrar
  cadastrar(usuario): Observable<any> {
    return this.http.post(this.URL + "/cadastro.php", usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirToast(erro.error.erro, 'danger'))
    );
  }

  async exibirToast(mensagem, cor) {
    const toast = await this.toastController.create(
      {
        message: mensagem,
        duration: 2000,
        color: cor,
        position: 'bottom'
      }
    );
    toast.present();
  }

  exibeErro(erro): Observable<any> {
    console.log("Erro",erro);
    return null;
  }
}
