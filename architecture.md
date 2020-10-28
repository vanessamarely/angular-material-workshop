# **Repaso: Arquitectura en Angular** 

Según la documentación oficial de Angular,  la arquitectura de una aplicación en Angular, se basa en ciertos conceptos fundamentales. Los bloques de construcción básicos del marco angular son componentes angulares que están organizados en NgModules. NgModules recopila código relacionado en conjuntos funcionales; una aplicación Angular está definida por un conjunto de NgModules. Una aplicación siempre tiene al menos un módulo raíz que permite el arranque y, por lo general, tiene muchos más módulos de funciones.

Siguiendo este marco de Angular hay unos conceptos básicos que es fundamental aprender para crear nuestras aplicaciones como son: Módulos, Componentes, Servicios; que en conjunto con otros conceptos como Routing, Schematics, Directivas, Formularios y algunos patrones (DI), nos ayudan a crear nuestras aplicaciones en Angular.

Basado en ese marco inicial, en la página oficial podemos encontrar un diagrama, que enseña cómo se relacionan estas piezas básicas.


![Diagrama](https://angular.io/generated/images/guide/architecture/overview2.png)

[https://angular.io/guide/architecture](https://angular.io/guide/architecture)


## Arquitectura Modular

A la hora de organizar nuestro código deseamos que nuestra aplicación sea escalable y limpia, y en esa escalabilidad nos ayuda a encontrar una estructura de carpetas adecuada para nuestro proyecto.

El tener una estructura bien definida nos ayuda a ubicar los diferentes elementos que vamos a ir creando, y nos da una mejor visibilidad.

Cada estructura varía, como cada proyecto o aplicación, antes de crear nuestros componentes, módulos, servicios, etc., tenemos que tener claro cuál será la responsabilidad que este va a tener. En la guía de estilo menciona todas estas prácticas en las que nos podemos basar para lograr esto.

De acuerdo a nuestro proyecto podemos tener diferentes formas de organizar nuestros archivos, sea crear módulos por cada feature que vaya a tener nuestra aplicación, o incluso crear módulos, donde se agruparán ciertos elementos de acuerdo a su uso, si es común, o compartido.

Comúnmente se tienen los siguientes módulos en las aplicaciones:

- Core: El CoreModule, asume el rol de AppModule raíz, tendrá aquellos componentes universales y otras características donde solo hay una instancia por aplicación, servicios Singleton, entre otros.

- Share: El SharedModule es donde deben ir todos los componentes, pipes/filters y directivas compartidas en nuestra aplicación. El SharedModule se puede importar en cualquier otro módulo cuando esos elementos se reutilicen. El módulo compartido no debería depender del resto de la aplicación y, por lo tanto, no debería depender de ningún otro módulo.

- Feature: Para aquellos componentes que realizan una funcionalidad específica en el proyecto.

En la documentación de Angular, podemos ver un ejemplo sencillo del uso de los modelos mencionados:

<img src="./images/folder-structure.png"
     alt="Ejemplo"
      />

[https://angular.io/guide/styleguide#folders-by-feature-structure](https://angular.io/guide/styleguide#folders-by-feature-structure)

**Nota**
Si tenemos en cuenta el proyecto que vamos a construir en este curso, podemos pensar en el concepto de tener una aplicación con una arquitectura modular o por features, por que podemos definir que el home sea un feature y el tablero o board sea otro feature.

<img src="./images/example.png"
     alt="Ejemplo"
     />

# **Style Guide** 

Teniendo en cuenta los conceptos básicos, a la hora de crear nuestras aplicaciones debes tener muy en cuenta la guía de estilo, que nos da una pauta para convenciones, nombramientos, buenas prácticas y patrones que es importante conocer y seguir las recomendaciones que la guía nos enseña, para crear buenas aplicaciones.

[https://angular.io/guide/styleguide](https://angular.io/guide/styleguide)

