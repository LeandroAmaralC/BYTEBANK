import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
destino: number;
valor: number;
// transferencias: any[] = [];
mensagemComErro: string;

constructor(private service: TransferenciaService) {

}




  exibirModalErro($event) {
    this.mensagemComErro = $event;
  }

  retirarModalErro($event) {
    this.mensagemComErro = null;
  }


}
