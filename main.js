const productos = [
    { nombre:"pipa calavera", precio: 1800},
    { nombre: "pipa aluminio", precio: 1600},
    { nombre:"pipa fuegos", precio: 1800},
    { nombre:"pipa hongo", precio: 600},
    { nombre:"pipa flower", precio: 1600},
    { nombre:"pipa cosmo", precio: 2300},
    { nombre:"pipa alien", precio: 2000},
    { nombre: "pipa berenjena", precio: 1000}

];

let carrito = []

let seleccion = prompt("Bienvenido a Flower Child desea comprar un producto? si o no")

while (seleccion != "si" && seleccion != "no"){
    alert("ingrese si para continuar o no para salir")
    seleccion = prompt ("Bienenido desea comprar un producto si o no")
}

if(seleccion == "si"){
    alert("A continuacion nuestros productos en stock")


    let todoslosProductos = productos.map(
    (producto) => producto.nombre + "" + producto.precio + "$"
    );  
    alert(todoslosProductos.join (" - ") )

} else if (seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto!")
}

while (seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "pipa calavera" || producto == "pipa aluminio" || producto == "pipa fuegos" ||producto == "pipa hongo" || producto == "pipa flower" || producto == "pipa cosmos" || producto == "pipa alien" || producto =="pipa berenjena" ){
        switch(producto){
            case "pipa calavera":
                precio = 1800;
                break;
            case "pipa aluminio":
                precio = 1600;
                break;
            case "pipa fuegos":
                precio = 1800;
                break;
            case "pipa hongo":
                precio = 600;
                break;
            case "pipa flower":
                precio = 1600;
                break;
            case "pipa cosmos":
                precio = 2300;
                break;
            case "pipa alien":
                precio = 2000;
                break;
            case "pipa berenjena":
                precio = 1000;
                break;
            default:
                break;
        }

        let unidades = parseInt(prompt("Cuantas unidades quieres llevar"))
        carrito.push({producto,unidades,precio})
        console.log(carrito)
    } else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando?")

    while(seleccion === "no"){
        alert("gracias por la compra")
        carrito.forEach ((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
     break;    
    }
}

const total = carrito.reduce ((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es : ${total}`)
