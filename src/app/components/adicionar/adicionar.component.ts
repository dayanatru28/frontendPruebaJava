import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Detalle } from 'src/app/models/detalle';
import { Factura } from 'src/app/models/factura';
import { ProductoService} from 'src/app/services/producto.service';
import { FacturaService} from 'src/app/services/factura.service';
import { DetalleService} from 'src/app/services/detalle.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {


  productos: Producto[] = [];

  factura: Factura[] = [];

  detalle: Detalle[] = [];

  detalleFiltrado: Detalle[] = [];

  idFactura: number = 0;
  idProducto:number=0;
  cantidad: number=0;
  precioUnitario: number =0;
  total :number=0;

  constructor(private productoService: ProductoService,
  private facturaService: FacturaService,
  private detalleService: DetalleService,
  private route: Router,
  private actRoute: ActivatedRoute){

  }

  ngOnInit(){

    this.actRoute.paramMap.subscribe((params: any) => {
      this.idFactura = params.get('idFactura');
    });
  
    this.cargarDetalle();    this.cargarProductos();
  }


  cargarDetalle():void{
    this.detalleService.lista().subscribe(
      data =>{
        this.detalle=data;
        for (let i = 0; i < this.detalle.length; i++) {
          if(this.detalle[i].idFactura==this.idFactura){
            this.detalleFiltrado.push(this.detalle[i]);
          }          
        }

      }, err => {
        console.log(err);
      }
      
    );
  }


  onCreate():void{
    const detalleNuevo = new Detalle(this.idFactura,this.idProducto, this.cantidad, this.precioUnitario);
    this.detalleService.save(detalleNuevo).subscribe(
        data => {
            console.log("Detalle Almacenado");
            this.cargarDetalle();
            this.total=0;
            for (let i = 0; i < this.detalleFiltrado.length; i++) {
              this.total = this.total+this.detalleFiltrado[i].idCantidad*this.detalleFiltrado[i].idProducto;
            }
            this.onUpdate(this.total);

        }, err => {
            console.log(err)
        }
    );

    this.route.navigateByUrl('');
  }

  onUpdate(total:number):void{
    console.log(total);
  // Total calculado para adicionar en el update
  }


  cargarProductos():void{
    this.productoService.lista().subscribe(
      data =>{
        this.productos=data;
      }, err => {
        console.log(err);
      }
      
    );
  }

}
