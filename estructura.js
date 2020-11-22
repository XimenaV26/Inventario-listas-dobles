class Estructura{
    constructor(){
        this._incio= null; 
        this._final= null; 
    }

    agregar(producto){
        if(this._incio===null){
            this._incio=producto;
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
         producto._siguente=this._incio;
         this._incio=producto;
    }

    buscar(codigo){
        if(this._incio===null){
            return false
        }
        else if(this._incio.codigo() == codigo){
            return this._incio;
        }
        else{
            let aux= this._incio; 
            while(aux.mostrarSiguiente()!= null && aux.mostrarSiguiente().codigo() != codigo){
                aux=aux.mostrarSiguiente();
            }
            if(aux.mostrarSiguiente()===null){
                return false
            }else{
                return aux.mostrarSiguiente();
            }
        }  
    }

    borrar(codigo){
        let producto= this.buscar(codigo), aux;
        if(producto===false){
            return false
        }else if(this._incio.codigo() === codigo){
            if(this._incio.mostrarSiguiente()!=null){
                this._incio= this._incio.mostrarSiguiente()
                this._incio.CAnterior(null)
            }else{
                this._incio=null; 
            }
        }else if(producto.mostrarSiguiente()!=null){
            aux=producto.mostrarAnterior();
            aux.CSiguiente(producto.mostrarSiguiente())
            aux.mostrarSiguiente().CAnterior(aux)

            producto.CAnterior(null)
            producto.CSiguiente(null)

        }else{
            aux=producto.mostrarAnterior()
            aux.CSiguiente(producto.mostrarSiguiente())

            producto.CAnterior(null);
            producto.CSiguiente(null);
        }

        return producto
    }

    listar(){
        let salida= "";
       aux=this._incio;
       while(aux!=null){
           salida+= "<p>" + aux.mostrarInfo() + "</p>"
           aux=aux._siguente;
       }
       return salida;
    }

    borrarPrimero(){
        if(this._incio==null){
            return false
        }else{
            this._incio=this._incio.mostrarSiguiente()
            if(this._incio != null){
                this._incio.CAnterior(null)
            }
            return this._incio
        }
    }
}
