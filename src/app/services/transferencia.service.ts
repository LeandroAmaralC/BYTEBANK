import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

 private listaDeTransferencia: any[];
 private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaDeTransferencia = [];
}

get transferencias() {
  return this.listaDeTransferencia;
}

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }


adicionar(transferencia: Transferencia): Observable<Transferencia> {
  // const transferencia = {...$event, data: new Date()}
  // this.listaDeTransferencia.push(transferencia)  ;
  this.hidratar(transferencia);
  return  this.httpClient.post<Transferencia>(this.url, transferencia)


}



private hidratar(transferencia: any) {
transferencia.data = new Date();
}

}
