# **Componentes Dinámicos**

En Angular los componentes que comúnmente creados son llamados componentes estáticos, los usamos en los templates mediante los selectores, tienen una ubicación fija y los desarrolladores tenemos un control sobre ellos, en cuanto a que definimos su ubicación en nuestra aplicación.

Los componentes dinámicos, son componentes que no están definidos en el tiempo de compilación de la aplicación y no usan un template de Angular y no es necesario declararlos en el NGModule. Estos componentes se instancian y se colocan en la aplicación en tiempo de ejecución.

Para crear un componente dinámico requerimos conocer ciertos conceptos que nos ayudan en este proceso y estos son: ViewContainerRef, FactoryResolver y FactoryComponent.

En la documentación oficial de Angular puedes ver un ejemplo de carga de un componente dinámico: [https://angular.io/guide/dynamic-component-loader](https://angular.io/guide/dynamic-component-loader)



