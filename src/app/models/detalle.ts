export class Detalle {

    idDetalle?: number;
    idFactura: number;
    idProducto: number;
    idCantidad: number;
    precioUnitario: number;

    constructor(idFactura: number, idProducto:number, idCantidad: number, PrecioUnitario:number){
        this.idFactura=idFactura;
        this.idProducto=idProducto;
        this.idCantidad=idCantidad;
        this.precioUnitario=PrecioUnitario;
    }

}
