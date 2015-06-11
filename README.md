#Ejercicio P2P Obligatorio del Curso *Desarrollo de servicios en la nube con HTML5, Javascript y node.js*

##Tarea del Módulo 6. Explicación de la tarea

Se deben añadir los siguientes cambios a Quiz:

1. Modificar el servidor Quiz para añadir un enlace en el píe de página `<footer>`
del marco de las páginas renderizadas que apunte a la página de su proyecto en GitHub.

2. Modificar el servidor Quiz para que sirva una nueva página con
los datos de los autores de la práctica. Este desarrollo se realizará
en una rama llamada `créditos`. Cree la rama `creditos` y cámbiese a
ella para hacer el desarrollo pedido en este apartado.

3. Crear un nuevo enlace en la barra de navegación que apunte a la página de créditos. 
La ruta de acceso a esta página debe ser `/author`.

4. Modifique el router (routers/index.js) para que atienda las
peticiones "GET /author" y sirva una nueva vista views/author.ejs
con los datos de los autores o autor de la página, mostrando el
nombre de los autores, su fotografía y un pequeño video (opcional)
de 30 seg.

5.  Cuando se haya terminado este desarrollo, integrelo en la rama master, y súbalo a GitHub.

7. Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar allí el servidor desarrollado en esta práctica.

##Despliegue en Heroku

* [https://git.heroku.com/quizcas.git](https://git.heroku.com/quizcas.git)

## Para leer

* [Diseño Web Responsivo (Responsive Web Design)](http://xn--diseowebresponsive-q0b.org/?utm_source=redirects&utm_medium=dise%25C3%25B1owebresponsivo.com.ar&utm_campaign=301_Redirects)

## Troubleshooting

###  Refresh favicon the simple way

See [http://www.phpjunkyard.com/tutorials/force-favicon-refresh.php](http://www.phpjunkyard.com/tutorials/force-favicon-refresh.php):

I found a very simple way to update the favicon that works in FireFox, Internet Explorer, Chrome, Opera and probably in other browsers too. Just follow these easy steps:

* Start your favorite browser.
* Open the `favicon.ico` file directly, for example http://localhost:3000/favicon.ico
* Refresh the favico.ico URL by pressing F5 or the appropriate browser Refresh (Reload) button
* Close the browser and open your website - voila, your favicon has been updated!
