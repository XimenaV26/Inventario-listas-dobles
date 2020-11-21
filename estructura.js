class Estructura{
    constructor(){
        this._incio= null; 
        this.totalNodes=0; 
    }

    agregar(producto){
        if(this.incio===null){
            this.incio=producto;
        }
        else{
            let aux, aux2
            aux= this._incio;
            while(aux.mostrarSiguiente()!=null && aux.mostrarSiguiente().codigo() < producto.codigo()){
                aux=aux.mostrarSiguiente();
            }
            if(aux.mostrarSiguiente()===null){
                aux.CSiguiente(producto);
                producto.CAnterior(aux);
            }else {
                aux2= aux.mostrarSiguiente();
                aux.CSiguiente(producto);
                aux2.CAnterior(producto);
                producto.CSiguiente(aux2)
                producto.CAnterior(aux)
            }
           
        }
        return true
       
    }

    agregarInicio(producto){
         producto.siguente=this.incio;
         this.incio=producto;
    }

    buscar(codigo){
        
    }
}
