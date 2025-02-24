// Tenemos un li de productos
//movi las imagenes a una carpeta y corregi la ruta de la imagen de los productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./images/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./images/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./images/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./images/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./images/zapato-rojo.jpg"}

];//coloque el punto y coma

const li = document.getElementById("lista-de-productos");//se cambia getElementByName porque no devuelve un solo elemento a 
//getElementById para obtener un solo elemento y se cierra con el punto y coma.
const $i = document.querySelector(".input");//Cambie a comillas dobles ya que son los que se estan utilizando en este archivo.

// se define la variable de displayProductos 
//Agregue esta linea para limpiar el contenido del elemento li antes de agregar nuevos productos, 
const displayProductos=(productos)=>{//movi todo el for dentro de este displayProductos 
  li.innerHTML = ``;
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}; //cerre con punto y coma
displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  const texto = $i.value.toLowerCase();//agrege el toLowerCase() 
  // para asegurar que el texto ingresado de entrada se compare correctamente
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );//movi esta linea para que este dentro de la funcion

  displayProductos(productosFiltrados); // agrege esta linea para mostrar los productos filtrados

};//cerre la funcion con punto y coma
  
/** Es la misma instruccion asi que lo deje comentado
 * for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

 */

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};// cerre con punto y coma
  
 
  
 
