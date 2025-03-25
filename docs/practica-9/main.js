const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $cartCount = d.querySelector("#cart-count"); // Contador del carrito

// Mostrar/Ocultar el carrito al hacer clic en el ícono
const cartIcon = d.getElementById('cart-icon');
const cartSection = d.getElementById('carrito');

cartIcon.addEventListener('click', () => {
  cartSection.classList.toggle('active');
});

// Función para obtener datos de productos
async function obtenerDatosProductos() {
  let apiURL = "./data.json";
  let response = await fetch(apiURL);
  let data = await response.json();

  const $sectionProducts = d.querySelector("#products");

  let content = "";

  data.productos.forEach(function (el) {
    content += `
      <article class="producto" data-nombre="${el.title}" data-precio="${el.price}">
        <h4>${el.title}</h4>
        <h5>$${el.price}</h5>
        <h5>${el.category}</h5>
        <img alt="${el.title}" src="${el.image}" />
        <button class="btn-agregar">Agregar al carrito</button>
      </article>
    `;
  });

  $sectionProducts.innerHTML = content;
}

// Función para actualizar el total del carrito y el contador
function actualizarTotalCarrito() {
  let total = 0;
  let cantidadProductos = 0;

  Array.from($listaCarrito.children).forEach(item => {
    const $precio = item.querySelector(".precio-producto");
    const $cantidad = item.querySelector(".cantidad");
    total += parseFloat($precio.textContent) * parseInt($cantidad.textContent);
    cantidadProductos += parseInt($cantidad.textContent);
  });

  $totalCarrito.textContent = total.toFixed(2);
  $cartCount.textContent = cantidadProductos; // Actualizar el contador del carrito
}

// Evento para el botón de compra
$btnCompra.addEventListener("click", function () {
  if ($listaCarrito.children.length > 0) {
    $mensajeCompra.classList.remove("hidden"); // Mostrar el loader

    setTimeout(function () {
      $mensajeCompra.classList.add("hidden"); // Ocultar el loader
      $listaCarrito.innerHTML = ""; // Vaciar el carrito
      $totalCarrito.textContent = "0"; // Reiniciar el total
      $cartCount.textContent = "0"; // Reiniciar el contador del carrito
      alert("Compra realizada con éxito");
    }, 5000);
  } else {
    alert("El carrito está vacío");
  }
});

// Evento para agregar productos al carrito
d.addEventListener("click", function (e) {
  if (e.target.matches(".btn-agregar")) {
    const $producto = e.target.closest(".producto");
    let nombre = $producto.getAttribute("data-nombre");
    let precio = parseFloat($producto.getAttribute("data-precio"));

    let $itemExistente = Array.from($listaCarrito.children).find(item => {
      return item.querySelector(".nombre-producto").textContent === nombre;
    });

    if ($itemExistente) {
      let $cantidad = $itemExistente.querySelector(".cantidad");
      $cantidad.textContent = parseInt($cantidad.textContent) + 1;
    } else {
      const $itemCarrito = d.createElement("li");
      $itemCarrito.innerHTML = `
        <span class="nombre-producto">${nombre}</span> - $<span class="precio-producto">${precio.toFixed(2)}</span>
        <span class="cantidad">1</span>
        <button class="btn-mas">+</button>
        <button class="btn-menos">-</button>
      `;
      $listaCarrito.appendChild($itemCarrito);
    }

    actualizarTotalCarrito();
  }

  if (e.target.matches(".btn-mas") || e.target.matches(".btn-menos")) {
    const $itemCarrito = e.target.closest("li");
    const $cantidad = $itemCarrito.querySelector(".cantidad");
    let cantidad = parseInt($cantidad.textContent);

    if (e.target.matches(".btn-mas")) {
      cantidad++;
    } else if (cantidad > 1) {
      cantidad--;
    } else {
      $itemCarrito.remove();
    }

    $cantidad.textContent = cantidad;
    actualizarTotalCarrito();
  }
});

// Cargar datos al cargar la página
d.addEventListener("DOMContentLoaded", function () {
  obtenerDatosProductos();
});