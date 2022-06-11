# ESTA ES LA ESTRUCTURA INICIAL DE CUALQUEIR PROYECTO AL QUE LE VAYA A APLICAR SASS CON GULP

## INICIAR PROYECTO

* Copiar la carpeta BASE y ponerle el nombre del proyectpo
* Instalar todas las dependencias que se van a necesitar, esto se hace automáticamente ejecutando el comando: npm i en la terminal.
* Ejecutar el monitor de GULP: gulp dev


## RAMA OptimizaV2

* En esta rama se eliminan las animaciones de todas las páginas para optimizar la carga del HTML

## RAMA RESP19MAY

* Hice esta rama para dejar un respaldo de la página antes de afectar por completo el HEADER de las paginas de los sistemas. 

## RAMA OptimizaV3
### Optimización de la página web para tratar de que sea más rápida en los dispositivos móviles

* Se cambian las imagenes de FONDO para que en celulares se muetre una imagen más pequeña
* Se eliminan algunas animaciones
* Se agregan imagenes para la versión MOVIL

## RAMA OptimizaV4
### Optimización de la página web : Recomendaciones realizadas por el analisis de Google

* Se cambia el método para obtener los fonts de Google Fonts, se pasa de CSS al IMPORT.
* Se divide el código JS en 2 partes, uno para que inicie normal con las funciones de arranque y otro exclusivo para los cliks
* Se elimina la etiqueta de G Analytics
* Se agrega una nueva reseña
* Se agregan los destinos en los HREF de los enlaces
* Se elimina la animación de la galería
* Se elimina el código JQUERY
* Se elimina la animación del equipo de cómputo
* Se crearon varias imagenes para la versión móvil
* Se optimza el código para tener 1 sola clase en el HERO y no un hero por página
* Se optimza el HTML para mostrar la imagen de fondo en forma optimizada, es decir, dependiendo del tipo de dispositivo se mostrará la imagen correspondiente.
* Se optimiza el HTML del index.
* Se optimiza parte del código CSS
* se cambian los estilos de la sección de precios de PAGINASWEB.HTML por los estilos de las paginas de los sistemas para ahorrar código.

## RAMA OptimizaV5
### Optimización de la página web : Se optimiza página para móviles ya que hay textos muy largos y con tamaño de letra muy pequeño

* BDKBARBER: Se analiza página para ver que textos se pueden ocultar en la versión móvil
* Se sigue encontrando código CSS que se puede optimizar
* Se unifican las listas de opciones con una sola clase de estilos llamada: LISTA_ELEMENTOS en el archivo GLOBALES.SASS y se eliminan todas las otras clases como elLista que hacian referencia a diseños de listas
* Se crea una sola clase llamada filtro-negro que sirve para poner una imagen de fondo en cualquier contenedor y lleva un filtro negro degradado encima de la imagen. 

## RAMA Version2
### En esta versión se cambiará la parte del mapa para que en lugar de puntos de referencia, agregaremos CARDS con las diferentes funcionalidades, esto para evitar que los visitantes den clic ya que no suelen hacerlo.

* Se agrega NORMALIZE.CSS al proyecto
* Se agrega Google Tag Manager
