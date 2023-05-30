import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Factura } from 'src/app/models/factura';
import { ProductoService} from 'src/app/services/producto.service';
import { FacturaService} from 'src/app/services/factura.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {

  productos: Producto[] = [];

  facturas: Factura[] = [];

  constructor(private productoService: ProductoService,
    private route: Router,
    private facturaService: FacturaService){

  }

  ngOnInit(){
    this.cargarFacturas();
  }


  cargarFacturas():void{
    this.facturaService.lista().subscribe(
      data =>{
        this.facturas=data;
      }, err => {
        console.log(err);
      }
      
    );
  }


  OnClickEliminar(idFactura: number):void{
    this.facturaService.eliminar(idFactura).subscribe(
      data =>{
      }, err => {
        
      }  
    ); this.route.navigateByUrl('/facturas',{skipLocationChange:true});
  }

  OnClickAdicionar(idFactura: number):void{
    window.open('/adicionar/'+idFactura);
  }

}
