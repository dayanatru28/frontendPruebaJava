import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from 'src/app/models/factura'

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  productoURL= 'http://localhost:8080/factura/'

  constructor(private httpClient: HttpClient) {
  }

  public lista():Observable<Factura[]> {
    return this.httpClient.get<Factura[]>(this.productoURL+'lista');
  }

  public save(factura: Factura):Observable<any>{
    return this.httpClient.post<any>(this.productoURL+'create',factura)
  }

  public eliminar(idFactura:number):Observable<any> {
    return this.httpClient.delete<any>(this.productoURL+`eliminar/${idFactura}`);
  }

  
}
