//1. Crear un Arreglo de Productos:
let productos = [
    { nombre: "Camiseta", precio: 15, stock: 10 },
    { nombre: "Pantalón", precio: 25, stock: 8 },
    { nombre: "Zapatos", precio: 50, stock: 5 },
    { nombre: "Sombrero", precio: 10, stock: 20 },
    { nombre: "Vestido", precio: 30, stock: 15 },
];

  //2. Agregar Productos al Carrito:
let carrito = [];

function agregarAlCarrito(productoNombre, cantidad) {
    for (let producto of productos) {
    if (producto.nombre === productoNombre) {
        if (producto.stock >= cantidad) {
        carrito.push({
            nombre: productoNombre,
            cantidad: cantidad,
            precio: producto.precio,
        });

        producto.stock -= cantidad;
        console.log(
            `* ${cantidad} ${productoNombre}(s) agregado(s) al carrito.`
        );
        console.log(productos);
        console.log(carrito);
        console.log("***************************");
        } else {
        console.log(
            `No hay suficiente stock del producto "${productoNombre}".`
        );
        return;
        }
    }
    }
}

  //3. Calcular el Total del Carrito:
function calcularTotal() {
    let total = 0;
    for (let item of carrito) {
      total += item.precio * item.cantidad;
    }

    return total;
}

let imprimirTotal = calcularTotal();
  //console.log(`Venta Total: $${imprimirTotal}`);

  // 4.Aplicar Descuentos:
function aplicarDescuento(total) {
    if (total > 100) {
      return total * 0.9;
    }

    return total;
}

let imprimirDescuento = aplicarDescuento(imprimirTotal);
  //console.log(`Venta con Descuento del 10%: $${imprimirDescuento}`);

//5. Simular el Proceso de Compra
const procesarCompra = () => {
  console.log("Procesando compra...");
  let tiempoRestante = 3;
  const intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
          console.log(`Tiempo para finalizar la compra ${tiempoRestante}...`);
          tiempoRestante--;
      } else {
          clearInterval(intervalo);
          let total = calcularTotal();
          total = aplicarDescuento(total);
          console.log(`Compra completada. Total a pagar: $${total.toFixed(2)}`);
      }
  }, 1000);
};

const eliminarDelCarrito = (productoNombre, cantidad) => {
  for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === productoNombre) {
          if (carrito[i].cantidad >= cantidad) {
              carrito[i].cantidad -= cantidad;
              if (carrito[i].cantidad === 0) {
                  carrito.splice(i, 1);
              }
              for (let producto of productos) {
                  if (producto.nombre === productoNombre) {
                      producto.stock += cantidad;
                      break;
                  }
              }
              console.log(`* ${cantidad} ${productoNombre}(s) eliminado(s) del carrito.`);
              console.log(productos);
              console.log(carrito);
              console.log("***************************");
              return;
          } else {
              console.log(`No hay suficiente cantidad del producto "${productoNombre}" en el carrito.`);
              return;
          }
      }
  }
  console.log(`El producto "${productoNombre}" no está en el carrito.`);
};


  //7. Ejecuta el Código:
agregarAlCarrito("Sombrero", 10);
agregarAlCarrito("Zapatos", 3);
agregarAlCarrito("Sombrero", 10);
agregarAlCarrito("Zapatos", 8);
eliminarDelCarrito("Sombrero", 5);
procesarCompra();