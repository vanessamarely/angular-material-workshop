# **Schematics**

Los Schematics son pequeñas recetas que al ejecutarlas nos permiten crear diferentes tipos de elementos en Angular.

Según la documentación oficial de Angular un Schematic, es un generador de código basado en plantillas que admite lógica compleja. Es un conjunto de instrucciones para transformar un proyecto de software generando o modificando código. Se empaquetan en colecciones y se instalan con npm.

Pueden ser una poderosa herramienta para crear, modificar y mantener cualquier proyecto de software, pero es particularmente útil para personalizar proyectos de Angular. Se pueden usar para generar patrones de IU de uso común o componentes específicos, usando plantillas o diseños predefinidos. Se pueden utilizar para hacer cumplir las reglas y convenciones arquitectónicas, haciendo que los proyectos sean coherentes e interoperativos.

Ejemplos:

- Generar Componente
```text
ng generate component component-name
```

- Generar Modulo
```text
ng generate module module-name
```

- Generar Servicio
```text
ng generate service service-name
```

- Generar Modulo con enrutamiento
```text
ng generate module module-name --routing
```

- Añadir CDK
```text
ng add @angular/cdk
```

- Dashboard Schematic
```text
ng generate @angular/material:dashboard component-name
```

En la documentación oficial podemos encontrar más ejemplos de schematics:

[https://material.angular.io/guide/schematics](https://material.angular.io/guide/schematics)