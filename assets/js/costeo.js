let botonAgregar=document.querySelector("button");
let contenedor=document.querySelector(".contenedor-costeo");


botonAgregar.addEventListener("click", (e)=>{

    let formulario=document.createElement("form");
    formulario.innerHTML=`
        <label for="">Producto</label>
        <input type="text" id="nombreProducto" placeholder="Nombre del producto"/>

        <label for="">Presentación</label>
        <input type="text" placeholder="ml"/>
        <input type="text" placeholder="$"/>

        <label for="">Receta</label>
        <input type="text" placeholder="ml"/>
        <input type="text" placeholder="$"/>
    `
    console.log(formulario);

})