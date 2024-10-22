# Proyecto de Desarrollo Web y Aplicación Móvil: E-commerce de Electrodomésticos y Hogar


**1. Introducción**

El presente proyecto consiste en el desarrollo de una plataforma de comercio electrónico (E-commerce) que ofrecerá productos de electrodomésticos y artículos para el hogar. La plataforma estará disponible tanto en formato web como en aplicación móvil, brindando a los usuarios una experiencia de compra moderna, accesible y segura.

El objetivo principal es proporcionar una solución digital que facilite la compra de productos del hogar a través de una interfaz intuitiva, con un diseño limpio y funcional que permita una navegación fluida y rápida.

**2. Objetivos del Proyecto**
### 2.1. Objetivo General
Desarrollar una plataforma E-commerce (web y aplicación móvil) que permita la compra de productos del hogar, electrodomésticos, y otros artículos de manera ágil y segura, enfocada en una excelente experiencia de usuario.

**2.2. Objetivos Específicos**
- Implementar un sistema de registro e inicio de sesión para usuarios.

- Facilitar la búsqueda y navegación de productos mediante una interfaz de usuario limpia y organizada.

- Desarrollar una funcionalidad de carrito de compras donde los usuarios puedan guardar productos para comprarlos posteriormente.
Crear un sistema de pagos integrado que soporte varias formas de pago (tarjetas de crédito, débito, transferencias).

- Garantizar que tanto la aplicación móvil como la web ofrezcan una experiencia de usuario optimizada y responsive.

- Implementar medidas de seguridad para garantizar la protección de la información de los usuarios y las transacciones.

**3. Descripción del Proyecto**

 El E-commerce estará dividido en dos plataformas principales:

> 1. Página Web: El sitio web será accesible desde cualquier navegador, permitiendo a los usuarios navegar por las categorías de productos, registrarse, iniciar sesión, añadir productos al carrito y realizar compras.

> 2. Aplicación Móvil: La aplicación móvil, disponible para dispositivos iOS y Android, contará con las mismas funcionalidades que el sitio web, pero optimizada para su uso en smartphones, con un enfoque en la facilidad de uso y rapidez.

### 3.1. Funcionalidades Clave

- Registro e inicio de sesión: Los usuarios podrán registrarse con su correo electrónico y contraseña, así como iniciar sesión para acceder a su historial de compras, carrito y lista de deseos.

- Carrito de compras: Los productos seleccionados se guardarán en el carrito de compras hasta que el usuario decida proceder al pago.

- Guardado de productos: Los usuarios podrán guardar productos en su carrito y revisarlos posteriormente para completar su compra.

- Interfaz limpia y minimalista: El diseño de la plataforma se centra en la simplicidad, facilitando la navegación y permitiendo que los usuarios encuentren lo que buscan de manera rápida y sin distracciones.

- Búsqueda avanzada: El sistema de búsqueda ayudará a los usuarios a encontrar productos mediante filtros como categorías, precios, y marcas.

- Pasarela de pago: Se implementarán diversas opciones de pago (tarjetas de crédito/débito, pagos en línea) para que los usuarios puedan completar su compra de forma rápida y segura.

- Notificaciones: Los usuarios recibirán notificaciones sobre sus compras, productos en descuento y actualizaciones de la tienda.

## 4. Arquitectura del Sistema
### 4.1. Frontend
- Tecnologías: HTML5, CSS3, JavaScript (React.js para la web y React Native para la app móvil).

- Diseño: Se seguirá una línea de diseño minimalista y responsive para garantizar una experiencia óptima en diferentes dispositivos [Figma](https://www.figma.com/design/A3KoujBUIqteQV57sBjjCn/Untitled?node-id=0-1&t=4s4Ux9s6VtK198nL-1).

### 4.2. Backend
- Tecnologías: Node.js con Express.js para la gestión del servidor, junto con bases de datos SQL (MySQL o PostgreSQL) para el almacenamiento de la información de usuarios y productos.

Autenticación y seguridad: Autenticación basada en JWT (JSON Web Tokens) para el control de sesiones, y cifrado de contraseñas usando bcrypt.

### 4.3. Base de Datos
Sistema de Gestión de Base de Datos: MySQL o PostgreSQL.
Tablas principales: Usuarios, productos, categorías, pedidos, pagos.



