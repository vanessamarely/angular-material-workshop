# 🎈Componentes de CDK 🎈

Los desarrolladores de Google al crear CDK, analizaron que existen varios componentes que tienen ciertas similitudes, al igual que ciertos comportamientos, y es por ello que CDK reúne una variedad de elementos que algunos de ellos encontrábamos en Angular Material, pero con la diferencia de que CDK nos lo brinda de una forma que nos permite realizar una personalización sobre ellos.

Entre lo afín que se encontró se puede mencionar que se pueden sacar algunos grupos como el Focus Trap, el overlay y los componentes dinámicos. 

De estos 3 grupos hay ciertos componentes que presentan la particularidad de este grupo o comportamiento, como por ejemplo en el overlay, podemos encontrar componentes como los snackbar, diálogos, menús, tooltips, autocomplete, etc. El focus trap, lo podemos ver en componentes como sidenav o diálogos. Por ultimo los componentes dinámicos, en este grupo podemos encontrar componentes como los stepper o los tabs, entre otros. 

[https://material.angular.io/cdk/categories](https://material.angular.io/cdk/categories)

## Accesibilidad

Son unas utilidades para screen readers, focus y más. Esta utilidad nos sirve para ayudarnos a implementar la accesibilidad siguiendo la guía de la pagina oficial de CDK.

En la guía menciona su instalación y ejemplos para hacer la implementación, sea del focus o alguna utilidad que necesitemos implementar en nuestra App.

[https://material.angular.io/cdk/a11y/overview](https://material.angular.io/cdk/a11y/overview)

## Bidireccionalidad

Es una utilidad que responde a los cambios LTR/RTL en la dirección del layout. 

Este paquete proporciona un sistema común para que los componentes obtengan y respondan a cambios en la dirección de diseño LTR / RTL de la aplicación.

Por ejemplo si nuestro diseño requiere seguir el modo de lectura de las páginas de medio oriente, podemos usar este paquete para realizar ese cambio.

En la guía menciona como podemos hacer uso de este paquete.

[https://material.angular.io/cdk/a11y/overview](https://material.angular.io/cdk/a11y/overview)

## Clipboard

Es un helper para trabajar con el clipboard del sistema. 

Con este helper solo es necesario darle click al elemento para copiarlo. 

La directiva se puede utilizar para agregar fácilmente la funcionalidad de copiar al hacer clic a un elemento existente. 

En la guía nos menciona como podemos hacer uso de este helper fácilmente.

[https://material.angular.io/cdk/clipboard/overview](https://material.angular.io/cdk/clipboard/overview)

## Drag&Drop

Es una directiva que habilita la interacción del Drag & Drop.

Proporciona una manera de crear fácil y declarativamente interfaces de arrastrar y soltar, con soporte para arrastrar libremente, ordenar dentro de una lista, transferir elementos entre listas, animaciones, dispositivos táctiles, arrastre personalizado identificadores, vistas previas y marcadores de posición, además de listas horizontales y bloqueo a lo largo de un eje.

En la guía podemos ver ejemplos de implementaciones para diferentes drag&drop.

[https://material.angular.io/cdk/drag-drop/overview](https://material.angular.io/cdk/drag-drop/overview)

## Layout

Es una utilidad que responde a los cambios del tamaño del viewport.

Proporciona utilidades para crear interfaces de usuario receptivas que reaccionan a los cambios de tamaño de la pantalla.

En la guía podemos ver como podemos hacer uso de los breakpoints propuestos, de acuerdo a los deferentes cambios en la pantalla.

[https://material.angular.io/cdk/layout/overview](https://material.angular.io/cdk/layout/overview)

## Observers

Es una utilidad que responde a cambios de propiedades de elementos.

El paquete de observadores proporciona directivas, creadas sobre los observadores de la plataforma Web nativa, como MutationObserver.

En la guía podemos ver como podemos implementar un Observer para estar pendientes de los cambios del Host.

[https://material.angular.io/cdk/observers/overview](https://material.angular.io/cdk/observers/overview)

## Overlay

Es una utilidad para mostrar contenido flotante dinámico.

El paquete de Overlay proporciona una forma de abrir paneles flotantes en la pantalla.

En la guía puedes encontrar la forma básica en la que podemos hacer uso de este componente, incluso se menciona en el caso de que no estés usando Angular Material, que debes tener en cuenta en la configuración.

[https://material.angular.io/cdk/overlay/overview](https://material.angular.io/cdk/overlay/overview)

## Platform

Provee información sobre la plataforma del usuario.

Es un  conjunto de utilidades que recopilan información sobre la plataforma actual y las diferentes funciones que admite.

En la guía puedes encontrar como podemos usar platform para identificar la plataforma que esta usando el usuario.

[https://material.angular.io/cdk/platform/overview](https://material.angular.io/cdk/platform/overview)

## Portal

Es una utilidad para mostrar contenido dinámico en un objetivo específico (puede ser otro componente).

Proporciona un sistema flexible para convertir contenido dinámico en una aplicación.

Un portal es una parte de la interfaz de usuario que se puede representar dinámicamente en un espacio abierto en la página.

La "parte de la interfaz de usuario" puede ser un componente, un TemplateRef o un elemento DOM y la "ranura abierta" es un PortalOutlet.

En la guía puedes encontrar mas sobre los tipos de Portal que podemos implementar.

[https://material.angular.io/cdk/portal/overview](https://material.angular.io/cdk/portal/overview)


## Scrolling

Es una directiva para manejar el evento del scroll.

El paquete de scrolling proporciona helpers para las directivas que reaccionan a los eventos de scroll.

En la guía encontraras como implementar la directiva y algunos ejemplos de su implementación.

[https://material.angular.io/cdk/scrolling/overview](https://material.angular.io/cdk/scrolling/overview)

## Stepper

Presenta contenido como pasos a través de los cuales podemos progresar.

El stepper de CDK proporciona una base sobre la que se pueden construir más variedades de steppers. Es un paso a paso, en un flujo de trabajo similar a un asistente que divide el contenido en pasos lógicos.

En la guia se encuentra el detalle de su implementación y ejemplos para usarlo.

[https://material.angular.io/cdk/stepper/overview](https://material.angular.io/cdk/stepper/overview)


## Table

Table o Tabla en español, es un componente configurable de datos tabulados.

Es una tabla de datos personalizable y sin comentarios con una API completamente basada en plantillas, columnas dinámicas y una estructura DOM accesible. Este componente actúa como el núcleo sobre el que cualquiera puede construir su propia experiencia de tabla de datos personalizada.

En la documentación encontraremos como podemos implementarla.

[https://material.angular.io/cdk/table/overview](https://material.angular.io/cdk/table/overview)

## Harnesses

Base para componentes de prueba de harnesses (Arnés, gancho).

Un harnesses de componentes es una clase que permite que una prueba interactúe con un componente a través de una API compatible. La API de cada harnesses interactúa con un componente de la misma manera que lo haría un usuario. Al utilizar la API de harnesses, una prueba se aísla contra las actualizaciones de los componentes internos, como cambiar su estructura DOM. La idea de los componentes harnesses proviene del patrón PageObject comúnmente utilizado para las pruebas de integración.

@angular/cdk/testing contiene infraestructura para crear y usar harnesses de prueba de componentes. Se puede crear harnesses de prueba para cualquier componente, desde pequeños widgets reutilizables hasta páginas de aplicaciones completas.

Se puede hacer uso del harnesses, siguiendo la documentación.

[https://material.angular.io/cdk/test-harnesses/overview](https://material.angular.io/cdk/test-harnesses/overview)

## TextField

Es una utilidad para trabajar con campos de texto.

El paquete de campo de texto proporciona utilidades útiles para trabajar con campos de entrada de texto como <input> y <textarea>.

Se puede ver parte de esas utilidades para estos campos en la documentación.

[https://material.angular.io/cdk/text-field/overview](https://material.angular.io/cdk/text-field/overview)

## Tree

El Tree, presenta contenido jerárquico como un árbol expandible.

Permite crear una experiencia de árbol personalizada para datos estructurados. 

Proporciona una base para construir otras características como el filtrado en la parte superior del árbol. 

Hay dos tipos de árboles: árbol plano y árbol anidado. Las estructuras DOM son diferentes para estos dos tipos de árboles.

Se pueden ver ejemplos de los dos tipos de árbol en la documentación.

[https://material.angular.io/cdk/tree/overview](https://material.angular.io/cdk/tree/overview)



