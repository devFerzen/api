/*
mutation creandoObjetoWerk($input: ObjWerkInput!){
  creandoObjetoWerk(input: $input){
    ... on Anuncio {
      descripcion,
      werker{
        nombre
      }
    }
  }
}
----
const session = await dbInstance.startSession()
await session.startTransaction()
query ...
query ...
await session.commitTransaction()
session.endSession()
----
**
Junta sobre: Sobrenombre ( pendiente accion cambiar sobrenombre tmb,
analizar el porque linkedin tiene dos formas de ingresar a un página.)


Lista de acciones
  Creación objeto..werk Anuncio ->>> COMPLETADO <<<-
  Creación objeto..werk Vacante ->>> COMPLETADO <<<-
  Creación objeto..werk Freelancer ->>> COMPLETADO <<<-
  Creación de portafolio ->>> COMPLETADO <<<-
  Edición objeto..werk Anuncio ->>> COMPLETADO <<<-
  Edición objeto..werk Vacante ->>> COMPLETADO <<<-
  Edición objeto..werk Freelancer ->>> COMPLETADO <<<-
  Edición de portafolio ->>> COMPLETADO <<<-
    { testear edición  como el bloqDesbloqObjetoWerk }

  Eliminar objeto..werk Anuncio ->>> COMPLETADO <<<-
  Eliminar objeto..werk Vacante ->>> COMPLETADO <<<-
  Eliminar objeto..werk Freelancer ->>> COMPLETADO <<<-
  Eliminar de portafolio ->>> COMPLETADO <<<-

  ¿? Como un usuario observará su objeto werk banneado
  Vista de un Anuncio Creador ->>> Pendiente <<<-
  Vista de un Anuncio No Creador ->>> Pendiente Testear <<<-
  Vista de un Freelancer Creador ->>> Pendiente <<<-
  Vista de un Freelancer No Creador ->>> Pendiente Testear <<<-
  Vista de una Vacante Creador ->>> Pendiente <<<-
  Vista de una Vacante No Creador ->>> Pendiente Testear <<<-
  si hay mensajes que hacer en runtime agregar un field
{cada objeto werk debe de guardar información de analisis sobre el mismo}
{ Pendiente actualizar la suma del objetoWerk en el número de vistas }

  Vista de un portafolio ->>> COMPLETADO <<<-
  Listado de Portafolios ->>> COMPLETADO <<<-
  Portafolio debe que ser capaz de destacar.
    (Cambio en junta en convertir el Portafolio en un a Objeto Werk)

  Agregar a Favoritos/Like Objeto..Werk  ->>> PENDIENTE TESTEAR <<<-
  Quitar a Favoritos/Like Objeto..Werk  ->>> PENDIENTE TESTEAR <<<-
    { Pendiente actualizar la suma del objetoWerk en el número de likes y favs }

  Reportar Objeto..Werk ->>> PENDIENTE TESTEAR <<<-

  Incremento del total de vistas de un Objeto..Werk

  Desbloqueo de Objeto..Werk ->>> COMPLETADO <<<-
  Bloqueo de Objeto..Werk ->>> COMPLETADO <<<-
  userActivo ->>> COMPLETADO <<<-
  loginUsuario ->>> COMPLETADO <<<-
  creandoUsuario (Registro) ->>> COMPLETADO con Pendiente <<<-
      {pendiente: falta añadir el pensamiento nuevo}


Funciones en temas pendientes
  Toda compra / paquetes / werkcoins / smart / destacado / Reportes
  Postulaciones y administración contratante
  Funciones administrativas
  Funciones automaticas para actualizar smart / destacado
  Sistema notificaciones
  Sistema de correos
  Sistema de postulaciones -> este tiene un patron llamado bucket para el conteo de vistas / likes.(este solo se actualizará aplicando suma 1 en cada accion de vista, like)
    tambien tendrá un patron Outliner para los objetos werk vacantes este guardará las postulaciones más recientes unicamente, si tiene más se guardarán en otra lista.
  Sistema administrativo un patron de diseño bucket 

Funciones pendientes pero para el Front-end - Codigo back
  Objetos..werk Recomendados
  Objetos..werk conforme a perfil/Interes
  Objetos..werk en base a búsqueda de filtros


ESTUDIAR LO SIGUIENTE {
  (1) => https://es.vuejs.org/v2/guide/custom-directive.html
  (3) => https://router.vuejs.org/guide/advanced/scroll-behavior.html
  (4) => https://www.tutorialspoint.com/graphql/graphql_query.htm  // https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
  https://www.graphql-tools.com/docs/resolvers  //  https://developer.okta.com/blog/2019/05/29/build-crud-nodejs-graphql
  (6) => https://www.positronx.io/mongoose-schema-types-validation-queries-tutorial-with-examples/
  (7) => https://infinityknow.com/vuejs-dynamically-add-css-class/
}
Trabajo: 18/11
Tema => Tabla anuncio{
  * (4) Definir la longitud máxima del titulo,
  * (3) Verificar el index a usar luego, si at a path level or schema level for compound indexes.
  * (2) El string en el array categorizaciones está como string, esto es correcto?, lo hace más eficiente que un ID?
  * (1) Como por medio de una URL vuejs
}

Tema: Edición Contratante {
  * (1) >>> Pregunta En la edición contratante los tres botones de arriba, tienen una función en particular?
}

Tema: Router {
  * (1) // named route examples router-link hace el mismo trabajo y es un tag
  este se usará en js
  router.push({ name: 'user', params: { userId: '123' } })
  // with query, resulting in /register?plan=private
  router.push({ path: 'register', query: { plan: 'private' } })
}

Tema: Vista anuncio o perfil {
  * (1) P => Si el usuario quiere ir a ver otro anuncio dentro de anuncio, se tiene que usar un
  <router-link :to="{ name: 'NombreDelView', params: { nombreId: 'haha'} }"></router-link>
  esto dará como resultado que no se renderize de nuevo el componente y con un watch extraer y pintar
  la nueva información ya que el watch acepta funciones asyncrhonas.
  * (2) P => {Responsividad de tarjeta minimizarlo, tags sin edición, cambiar de carrusel, actions-werk-tarjeta}
  * (3) P => form tags error in key
}

Tema => portafolioView {
>>>*** T(1) Q => La descripción de abajo es algo que va a tener cada tarjeta o que información es?
    No es solo un como se vería. (-- la bd es capaz de agregar campos nuevos)
  * T(2) P,Q => El icono interno del carrusel no se ha podido cambiar de color a blanco.
  * T(3) Q => DocumentoCard -- Qué lo compone?,
    Titulo - subtitulo - descripción
}

Tema => werker Home {
  * (1) Q => El background circulo se me hace muy grande, quizás un 225 como minimo se hace
}

Tema => Anuncio Edit {
  * (1) P=> Hacer el drag and drop https://www.wrappixel.com/vue-js-drag-and-drop/
  * (2) p=> El state no se deja ser cambiado
}

Tema => Header y Footer {
  * (1) El diseño será con componentes para cuando inice sesion el personal
  de Werk.. este renderize o no el diseño para werk.
  * (2) cant substring of undefiend
}

Tema => Librerias {

  * (1) Debounce espera al usuario una acción para efectuar otra
  https://lodash.com/docs/4.17.15#debounce
}

Tema => Animaciones de elementos {
  * (1) https://es.vuejs.org/v2/guide/transitioning-state.html, https://greensock.com/
}










*/
