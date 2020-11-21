class Producto{
    //Variables estaticas
    static cont=0;
    constructor(nombre, descripcion, cantidad, costo){
        this.id=++Producto.cont;
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

    codigo(){
        return this.id;
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
            this.id + 
            " Nombre: " + 
            this._nombre +
            " costo " +
            this._costo +
            " $ "+
            this.valorMercancia);

    }

    get valorMercancia(){
        return this._costo*this._cantidad; 
    }

    mostrarInfoJSon(){ //Json
        return {id:this.id, Nombre:this._nombre, 
            Descripcion:this._descripcion, Cantidad:this._cantidad, 
            Costo:this._costo}

    }
}

