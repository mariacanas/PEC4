

1. Explica que son y cuando se deberían de utilizar las siguientes variables locales de la directiva estructural NgFor
    -index: Nos va a dar información sobre el número de posición del elemento de la lista
    -even: Es una variable booleana, la cual será verdadera si el índice del elemento que estamos mirando es par
    -odd:  Es una variable booleana, la cual será verdadera si el índice del elemento que estamos mirando es impar
    -first: Es una variable booleana, la cual será verdadera si el elemento que estammos mirando es el primero
    -last: Es una variable booleana, la cual será verdadera si el elemento que estammos mirando es el último

2.¿Para qué sirve la opción trackBy de la directiva estructural NgFor?

Sirve para que Angular pueda actualizar los únicos elementos que han cambiado y no tener que reconstruir toda la lista, por lo que es útil cuando trabajamos con listas que cambian con el tiempo ya que se nos va a mejorar el rendimiento.

Ejemplos:
    Por ejemplo, si tenemos una lista de string que van a ser nombres de personas y queremos que nos lo muestre mediante una lista.

    export class AppComponent{
        nombres = ['Maria', 'Jose', 'Manuel'];

        trackByFn(index: number, name: string): string{
            return name;
        }
    }

    <div *ngFor="let name of nombres; trackBy: trackByFn">
        {{name}}
    </div>

    Otro ejemplo, es si en vez de una lista de string es una lista de objetos y queremos que se devuelva una de sus propiedades

    
    export class AppComponent{
        nombres = [
            {id:1, nombre: 'Maria'},
            {id: 2, nombre: 'Jose'},
            {id: 3, nombre: 'Manuel'}];

        trackByFn(index: number, nombre: any): string{
            return nombre.nombre;
        }
    }

    <div *ngFor="let nombre of nombres; trackBy: trackByFn">
        {{nombre.nombre}}
    </div>

3. ¿Es posible ejecutar dos directivas estructurales simultaneamente?

Si que se pueden ejecutar dos directivas simultaneamente, debido a la forma en la que Angular va a procesar las plantillas y las directivas estructurales, ya que las plantillas van a ser procesadas en varias fases de compilación y de ejecicón. Durante la compilacion, se van a transformar las plantillas y directivass a código Typescript el cual será ejecutado por el navegador. Agular es capaz de realizar multiples directivas estructurales al mismo tiempo, estas se van a poder anidar una dentro de otra, facilitando asi una flexibilidad en cuanto a la contrucción de la interfaz y de la lógica.