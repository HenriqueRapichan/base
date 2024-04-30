import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../../services/requisicao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
public listaUsuarios: any = [];

constructor(private requisicaoService: RequisicaoService ){
}
ngOnInit(): void {
  this.buscarUsuario();
}

  buscarUsuario() {
    // this.carregando = true;
    let rotas: string = "/usuario";
    this.requisicaoService.get(rotas).subscribe(
      (retorno: any) => {
        this.listaUsuarios = [];
        this.listaUsuarios = retorno;
        console.log(this.listaUsuarios);
        // this.carregando = false;
      },
    )
  }

}
