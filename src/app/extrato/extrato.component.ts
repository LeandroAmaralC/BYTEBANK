import { Component, OnInit, Input } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

   transferencias: any[];
  @Input() mensagemComErros: string;
  listaDeContas : any[] =[];



  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  // this.transferencias = this.service.transferencias
  this.service.todas().subscribe((transferencias: Transferencia[]) => {
    console.table(transferencias);
    this.transferencias = transferencias;
  })


  }

 receberDados() {

 }

}
