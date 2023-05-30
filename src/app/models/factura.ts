export class Factura {

    idFactura?: number;
    numeroFactura: number;
    fecha: String;    
    tipoPago: String;    
    documentoCliente: String;    
    nombreCliente: String;
    subtotal: number;
    descuento: number;
    iva: number;
    totalDescuento: number;
    totalImpuesto: number;
    total: number;

    constructor(idFactura: number,numeroFactura : number, fecha: string,  tipoPago : string, documentoCliente : string,
            nombreCliente : string, subtotal : number, descuento : number, iva : number, totalDescuento: number,
            totalImpuesto : number, total: number) {
        this.idFactura= idFactura;
        this.numeroFactura = numeroFactura;
        this.fecha = fecha;
        this.tipoPago = tipoPago;
        this.documentoCliente = documentoCliente;
        this.nombreCliente = nombreCliente;
        this.subtotal = subtotal;
        this.descuento = descuento;
        this.iva = iva;
        this.totalDescuento = totalDescuento;
        this.totalImpuesto = totalImpuesto;
        this.total = total;
    }
}
