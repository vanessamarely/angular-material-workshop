# **Router**

El enrutamiento o Router es la navegación entre las diferentes páginas. Nos permite crear [SPA](spa.md).

El Router se encarga de decidir que componentes de Angular se muestran en cada momento.

Los elementos principales del Router son:

- RouterModule: Contiene toda la lógica necesaria para enrutar en el navegador.

- Router outlet: Este se encarga de la carga dinámica. Se encarga de saber qué componente cargar y dónde mostrarlo. Este actúa como un contenedor dinámico, incrustando el componente adecuado para cada ruta.

```html
<router-outlet></router-outlet>
```

- Router Link: Son los hipervínculos o enlaces donde especificaremos donde navegará nuestra página. El RouterLink es una directiva, se usa en sustitución del atributo href.

```html
<a routerLink="/">Go home</a>
```

## Lazy Loading

El Lazy Load es un patrón de diseño, el cual consiste en retrasar la carga o la inicialización de un objeto hasta el momento de su utilización.

El Lazy Load, obtiene los datos o procesa los objetos cuando se necesitan. 

Cada vez que creamos un componente vamos agregándolo en nuestro modulo y al archivo de rutas; esta acción podría tomarse como mala practica, debido a que podría afectar la carga de nuestra aplicación. Lo recomendable es crear módulos por cada feature, y dependiendo del modulo en particular añadirlo en las rutas.

Cuando creamos un modulo que va a ser añadido en las rutas, podemos usar el siguiente schematic:

```text
ng g m modules/module-name --routing
```

Con el Lazy load en nuestras rutas, añadimos nuestros módulos en las rutas, podemos estructurarlas y nuestro código se verá más limpio y los demás componentes serán llamados a medida que serán solicitados por sus rutas respectivas.