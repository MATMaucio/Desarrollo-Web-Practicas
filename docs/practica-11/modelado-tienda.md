# Modelo Entidad–Relación de la Tienda Online

## Entidades y Atributos

### 1. **Producto**
- **ID_Producto** (PK): Identificador único del producto.
- **Nombre**: Nombre del producto.
- **Descripción**: Descripción detallada del producto.
- **Categoría**: Categoría a la que pertenece el producto (Cuidado Facial, Maquillaje, etc.).
- **Marca**: Marca del producto.
- **Precio**: Precio del producto.
- **Stock**: Cantidad disponible en inventario.

### 2. **Cliente**
- **ID_Cliente** (PK): Identificador único del cliente.
- **Nombre**: Nombre completo del cliente.
- **Correo**: Correo electrónico del cliente.
- **Teléfono**: Número de contacto.
- **Dirección**: Dirección de envío.

### 3. **Pedido**
- **ID_Pedido** (PK): Identificador único del pedido.
- **Fecha**: Fecha en que se realizó el pedido.
- **Total**: Monto total del pedido.
- **ID_Cliente** (FK): Relación con la entidad Cliente.

### 4. **Detalle_Pedido**
- **ID_Detalle** (PK): Identificador único del detalle del pedido.
- **ID_Pedido** (FK): Relación con la entidad Pedido.
- **ID_Producto** (FK): Relación con la entidad Producto.
- **Cantidad**: Cantidad de productos solicitados.
- **Subtotal**: Subtotal por producto.

### 5. **Método_Pago**
- **ID_Metodo** (PK): Identificador único del método de pago.
- **Tipo**: Tipo de método de pago (Tarjeta de crédito, PayPal, etc.).
- **ID_Pedido** (FK): Relación con la entidad Pedido.

## Relaciones
1. **Cliente** realiza **Pedidos** (1:N).
2. **Pedido** contiene **Detalle_Pedido** (1:N).
3. **Detalle_Pedido** está asociado a **Producto** (N:1).
4. **Pedido** utiliza **Método_Pago** (1:1).

## Diagrama en Texto
- **Cliente** (1) — (N) **Pedido**
- **Pedido** (1) — (N) **Detalle_Pedido**
- **Detalle_Pedido** (N) — (1) **Producto**
- **Pedido** (1) — (1) **Método_Pago**

## Imagen de Modelo Entidad Relacion
![Moodboard](/docs/practica-11/IMG/Diagrama%20en%20blanco.png)