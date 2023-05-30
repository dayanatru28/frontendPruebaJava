import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL= 'http://localhost:8080/producto/'

  constructor(private httpClient: HttpClient) {
  }

  public lista():Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL+'lista');
  }
  
}
