
Acciones de Angular CLI

-ng new -> Es el comando que se utiliza para crear un nuevo proyecto de Angular. Va a crear todas las carpetas y archivos necesarios para iniciar a desarrollar una aplicación Angular.

-ng generate:
    component -> Crea un nuevo componente dentro de nuestro proyecto. Siendo este un bloque fundamental para la creación de la interfaz de usuario de la aplicación.

    directive -> Crea una nueva directiva dentro de nuestro proyecto. La cual es una clase que nos permite modificar el DOM.

    enum -> Crea un nuevo enumerado en nuestro proyecto de Angular. El cual nos sirve para definir un conjunto fijo de valores.

    guard -> Crea un nuevo guard en nuestro proyecto, el cual se utiliza para controlar el acceso a partes de la aplicación.

    interface -> Crea una nueva interfaz en nuestro proyecto. Sirve para definir la estructura de un objeto o un conjunto de datos. Por ejemplo
        export interface Usuario{
            id: number;
            name: string;
            direccion: string;
            ....
        }

    pipe -> Crea una nueva pipe (Tuberia) en nuestro proyecto, el cual es una función que nos va a permitir transformar datos en el html antes de que se muestren por la interfaz de usuario, como por ejemplo pasar un texto de minúscula a mayúscula.

    service -> Se va a utilizar para generar un nuevo servicio en nuestro proyecto. Este servicio se utiliza para encapsular la lógica.

-ng serve -> Este comando se utiliza para compilar y ejecutar nuestra aplicación en un servidor de desarrollo local (localhost).

-ng test -> Va a ejecutar las pruebas de la aplicacion, verificando así que las partes de nuestra aplicacion funcionen correctamente.

-ng version -> Nos va a mostrar la informacion de la versión y dependencias de Angular que tenemos en nuestro proyecto.

