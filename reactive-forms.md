# **Formularios**

Los formularios nos permiten recolectar datos, sea información personal del usuario, comentarios, sugerencias, autenticarnos a una página, entre otros usos.

La librería@angular/forms, nos permite hacer uso de los formularios en Angular.

Hay tres tipos de formularios en Angular:

- Formularios de Plantillas - Template Driven

- Formularios Reactivos - Reactive Forms

- Formularios Dinámicos - Dynamic Forms

# **Reactive Form**

Los formularios reactivos tienen la particularidad que la manipulación de los datos,  los elementos del HTML y sus validaciones, se hacen principalmente en el componente (por ejemplo app.component.ts).

El término reactivo se refiere a  que nuestro form va a «Reaccionar» ante ciertos eventos o cambios.

Para usarlos tenemos que declarlos en el @NgModule:

```typescript
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ...,
    ReactiveFormsModule
  ],
  ...
```

Los formularios reactivos requieren de ciertos elementos para su funcionamiento, y estos son:

- Form Builder, es un servicio que se utiliza para construir un formulario creando un FormGroup, (un grupo de controles) que hace un seguimiento del valor y estado de cambio y validez de los datos.

- FormGroup, es un conjunto de FormControls, el estado de este objeto depende del estado de todos sus objetos, en otras palabras si uno de los FormControl es inválido, el grupo es inválido.

- FormControl, es un objeto qué se usa en los formularios para tener un control sobre su valor y su estado en el formulario.

```typescript
export class FormComponent implements OnInit {
  public formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }
  
  buildForm(){
    this.formGroup = this.formBuilder.group({});
  }
}
```

Nota:  una vez han sido creados los elementos necesarios en nuestro componente, en la vista es necesario incluir dos directivas que vienen dentro del módulo reactivo son [formGroup]="objetoFormulario" para el formulario en su conjunto, y formControlName="nombreDelControl" para cada control.

```html
<form [formGroup]="formGroup">
  <label for="name">Nombre</label>
  <input id="name" name="name"
        formControlName="name"
        type="text />
</form>
```

- Validaciones

Las validaciones son muy importantes en nuestros formularios, permiten que nuestros usuarios digiten la información en el formato que se necesita y es una gran defensa ante los errores de nuestros usuarios.

Las validaciones en los formularios reactivos se realizan en el archivo de lógica, en nuestro componente.

Los Validadores los añadimos cuando estamos creando nuestro formgroup, haciendo uso de una función llamada **Validators**.

```typescript
export class FormComponent implements OnInit {
  public formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }
  
  buildForm(){
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
}
```

En la documentación oficial puedes encontrar mucha más información sobre los formularios reactivos: [https://angular.io/guide/reactive-forms](https://angular.io/guide/reactive-forms)


