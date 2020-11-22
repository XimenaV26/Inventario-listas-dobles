class Producto{
    //Variables estaticas
    static cont=0;
    constructor(codigo, nombre, descripcion, cantidad, costo){
        this._codigo=++Producto.cont;
        this._nombre=nombre;
        this._descripcion=descripcion;
        this._cantidad=cantidad;
        this._costo=costo;
        this._siguiente= null;
        this._anterior=null;

    }

    mostrarSiguiente(){
        return this._siguiente;
    }

    mostrarAnterior(){
        return this._anterior;
    }

    codigo(){
        return this._codigo;
    }

    CSiguiente(siguiente){
        return this._siguiente= siguiente;
    }

    CAnterior(anterior){
        return this._anterior= anterior;

    }

    mostrarInfo(){
        return (
            "ID: " + 
            this._codigo + 
            " Nombre: " + 
            this._nombre +
            " Descripcion " +
            this._descripcion +
            " costo " +
            this._costo +
            " $ "+
            this.valorMercancia());

    }

    valorMercancia(){
        return this._costo*this._cantidad; 
    }

    mostrarInfoJSon(){ //Json
        return {id:this._codigo, Nombre:this._nombre, 
            Descripcion:this._descripcion, Cantidad:this._cantidad, 
            Costo:this._costo}

    }
}

