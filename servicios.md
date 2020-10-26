# **Servicios**

Un servicio nos permite compartir funcionalidades, y nos permite manejar la data que solicitamos al servidor, para asu vez compartir esta, sin problema entre componentes.

Un servicio sigue el patrón Singletón, sirve como un recurso compartido el cual aisla la implementación de un contexto global, es decir, puedo referenciarlo en varios lugares y llamar sus funciones. 

Un patrón de diseño, es una forma reutilizable de resolver un problema común. 

Un servicio de Angular usa  el decorador @Injectable(), que quiere decir que cualquier Componente, Servicio, Directiva o Pipe puede usar este «Injectable» sin preocuparse de crearlo o destruirlo, y que Angular se encarga de «inyectarle» el Servicio para ser usado por quien lo necesite. El elemento que necesite hacer uso del servicio lo usara, sin problema.

```ts
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor() { }

}
```

## Inyección de dependencias - DI

Inyección de Dependencias (Dependency Injection o DI) es un patrón de diseño en el que una clase requiere instancias de una o más clases y en vez de generarlas dentro de su propio constructor, las recibe ya instanciadas por un mecanismo externo.

En Angular mediante la inyección de dependencias podemos usar objetos sin necesidad de instanciarlos.