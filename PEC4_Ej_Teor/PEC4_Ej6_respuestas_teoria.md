

1.¿Cuales son los style encapsulation de los componentes?
    Dentro de Angular, tenemos 3 modos diferentes de encapsulación de los estilos para los componentes. Estos son:

    -None: Este modo no tiene encapsulación. Los estilos van a ser definidos dentro del componente y afectaran a todos los elementos del DOM

        Ejemplo:
        Tenemos un componente de barra de navegación y queremos que los estilos definidos en el afecten a toda la aplicación, por lo que usaremos el modo "None".

            import { Component, ViewEncapsulation } from '@angular/core';

            @Component({
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css'],
                encapsulation: ViewEncapsulation.None
            })
            export class NavbarComponent {
            
            }
            Al no tener encapsulados los estilos definidos en el componente, afectaran a todos los elementos de la aplicación, permitiendonos así crear estilos globales.

    -Shadow DOM: En este modo los estilos que se han definido en el componente solo van a afectar a los elementos dentro del Shadow DOM

        Ejemplo: Tenemos un botón que está personalizado y queremos que tenga unos estilos específicos que se le apliquen solo a este botón.

        import { Component, ViewEncapsulation } from '@angular/core';

        @Component({
            selector: 'app-custom-button',
            templateUrl: './custom-button.component.html',
            styleUrls: ['./custom-button.component.css'],
            encapsulation: ViewEncapsulation.ShadowDom
        })
        export class CustomButtonComponent {
        
        }

        En este ejemplo, se ha establecido encapsulation: ViewEncapsulation.ShadowDom, se van a encapsular los estilos del boton, por lo que todos los estilos que se pongan en el css del botón solo van a afectar a este botón y no a los demás elementos de la página. Esto nos va a facilitar poder crear componentes reutilizables y evitar así posibles conflictos de estilo con otros componentes.

    3- Emulated

    Este modo va a ser el modo que tiene Angular como predeterminado. Este modo, los estilos se van a aplicar de modo que no afectan a otros componentes y no van a ser afectados por estilos de otros componentes un ejemplo de ello es.

    Ejemplo: Tenemos un componente de un producto y queremos que cada una de las tarjetas tenga estilos específicos, pero que estos estilos no afecten a las tarjetas de otros productos que tengan la misma categoria.

    import { Component, ViewEncapsulation } from '@angular/core';

    @Component({
        selector: 'app-product-card',
        templateUrl: './product-card.component.html',
        styleUrls: ['./product-card.component.css'],
        encapsulation: ViewEncapsulation.Emulated
    })
    export class ProductCardComponent {
    
    }

    Al utilizar encapsulation: ViewEncapsulation.Emulated, los estilos que se definan en el .css de la tarjeta del producto solo van a afectar a esa tarjeta y o a los demás elementos.




2.¿Qué es shadow DOM?

    Es una tecnología web, la cual nos va a permitir encapsular nuestra estructura HTML, código CSS y Js de un componente web, para que así sean independientes del resto de la página web.

    El shadow DOM lo que nos proporciona es un ambiente aislado dentro de un componente web, el cual todos los elementos están encapsulados y no son accesibles desde fuera. Esto sigifica que el componente no se ve afectado por los estilos de la página principal, lo que nos ayuda a prevenir conflictos y a mantener una separación clara entre los diferentes componentes de la aplicación web.


3.¿Qué es el changeDetection?

    ChangeDetection es el proceso en el que Angular va a detectar y reaccionar a los cambios que ocurren en los datos de la aplicación. Para ello, va a estar de manera continuada monitoreando los modelos y los enlaces de datos con el objetivo de detectar los cambios. Cuando detecta algún cambio, va a actualizar automaticamente la vista para reflejar los cambios producidos. Esto nos asegura que la interfac esté siempre sincronizada con el estado actual de la aplicación, por lo que changeDetection nos está garantizando que nuestra aplicación va a reflejar los datos más recientes en todo momento. 

4.¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes

    Estrategia Default va a ser útil para aplicaciones de pequeño tamaño o con cambios frecuentes que puedan afectar a varios componentes. Si utilizamos esta estrategia, Angular revisa todos los componentes en cada ciclo de detección de cambios, lo que puede generar sobrecarga en aplicaciones de gran tamaño. Aunque es fácil de usar y entender, puede no ser óptima para aplicaciones más complejas. 

    La estrategia OnPush va a ser utilizada cuando nuestra aplicación cuente con una gran cantidad de componentes o cuando se necesite optimizar el rendimiento, ya que solo va a revisar los componentes en las que las referencias de entrada han cambiado. Como ventaja tiene que nos va a mejorar el rendimiento al reducir las comprobaciones de cambios pero sin embargo puede ser más dificil de implementar debido a la necesidad de tener que comprender la inmutabilidad de los datos.

5.Explica con detalle el ciclo de vide de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados

    El ciclo de vida de un componente sirve para describir las diferentes etapas por las que va a pasar un componente desde su creación hasta su destrucción. 

    Los hooks son:

    -OnChanges: Este hook se va a disparar cuando se cambian los datos de entrada del componente. Este va a recibir un objeto con los cambios detectados en las propiedades de entrada.

    -OnInit: Este hook se va a disparar cuando Angular ha inicilizado todos los datos del componente. Este será el primer punto en el ciclo de vida del componente, y va a tener todos los datos de entrada disponibles

    -AfterViewInit: Este hook se va a ejecutar después de que se hayan inicializado las vistas del componente y sus vistas secundarias. Cuando se ejecuta este hook, la vista del componente ya estará disponible y se podrá acceder a los elementos del DOM

    -OnDestroy: Este hook se va a disparar justo antes devla destrucción  del componente. Gracias a este hook, se van a poder liberar recursos y cancelar suscripciones para evitar posibles fugas de memoria.