import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../models/detalle'

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  detalleURL= 'http://localhost:8080/detalle/'

  constructor(private httpClient: HttpClient) {
    }

    public lista():Observable<Detalle[]> {
      return this.httpClient.get<Detalle[]>(this.detalleURL+'lista');
    }

    public listaPorIdFactura(idFactura:number):Observable<Detalle[]>{
      return this.httpClient.get<Detalle[]>(this.detalleURL+`detalle/'${idFactura}`);
    }

    public save(detalle: Detalle): Observable<any>{
      return this.httpClient.post<any>(this.detalleURL+'crear', detalle);
    }

  }