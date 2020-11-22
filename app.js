const miInfo= 0;

const btnAgregar=document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",e =>{
    /*
    Recuperar cada caja de texto
    Crear un producto
    Mostrar en Div details y su informacion
    Agregarlo al Array
      
    */

    let nombre= document.getElementById("textNombre").value; 
    let descripcion = document.getElementById("textDescripcion").value;
    let cantidad= document.getElementById("textCantidad").value;
    let costo = document.getElementById("textCosto").value;

    let product= new Producto(nombre, descripcion, cantidad, costo);

    let details= document.getElementById("details");
    details.innerHTML += `
    <div class= "p-3 mb-2 bg-info text-white p-3 m-3" > 
    <p><strong>ID ${product._codigo} - </strong>${product._nombre}</p>
    <p>Descripcion: ${product._descripcion}</p>
    <p>Valor total: ${product.valorMercancia()}</p>
    <p>${product.mostrarInfo()}</p>
    </div>

    `;
    console.log(product.mostrarInfoJSon);
});

const buscar=document.getElementById("btnBuscar");
buscar.addEventListener("click", e =>{
    
    let dato=document.getElementById("textNombre").value;
    let resultado=miInfo.buscar(dato);
    let details=document.getElementById("details");
    if(resultado===null){
        details.innerHTML+="<div><p>Buscar</p><p>No se encontro " + dato + "</p></div>";
    }else{
        details.innerHTML+="<div><p>Buscar</p><p>Busqueda exitosa " + dato + "</p></div>";

    }

})
