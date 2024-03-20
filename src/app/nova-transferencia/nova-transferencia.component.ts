import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";
import { Transferencia } from "../models/transferencia.model";
import { Router } from "@angular/router";



@Component({
  selector:'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  constructor(private service: TransferenciaService, private router: Router) {

  }

  @Output() aoTranferir = new EventEmitter<any>();

  @Output() valoresComErro = new EventEmitter<string>();

  @Output()  retirarMensagemDeErro = new EventEmitter<any>();

 valor: number;
 destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    if(this.ehValido()) {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino}
    this.aoTranferir.emit(valorEmitir);



    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.apagarMensagemDeErro();
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
    );

    }
  }

  private ehValido() {
    const valido = this.valor > 0;
    if(!valido) {
      this.valoresComErro.emit('Informe um valor válido')
    }
    return  valido;
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  apagarMensagemDeErro() {
    const semErro : string = "semErro"
    this.retirarMensagemDeErro.emit(semErro)

  }

}
