
1. ¿Qué comando debes utilizar para crear un nuevo proyecto en Angular utilizando Angular CLI denominado ecommerce?

Para crea un nuevo proyecto en Angular, tenemos que utilizar el comando ng new ecommerce el cual va a generar un nnuevo proyecto con el nombre de "ecommerce" y un directorio que tendrá el mismo nombre

Ficheros de configuración en la raiz del proyecto
    -tsconfig.app.json Es el archivo de configuración TypeScript. El cual va a tener la configuración de varios campos como la ruta de salida del código que hemos compilado, la lista de archivos TypeScript...
    -angular.json Este fichero va a contener información sobre las rutas de compilación, las dependencias de nuestro proyecto... en resumen, este archivo es el de configuración principal de Angular CLI
    -package.json Es el archivo de configuración npm del proyecto.
    -.editorconfig Fichero que va a definir las reglas de estilo como por ejemplo el estilo de final de archivo, de línea...
    -gitignore Dentro de este archivo se va a definir una lista en la cual van a estar definidos todos los archivos y directorios que van a ser ignorador por GIT.

Directorio node_modules:  Es el directorio donde están todas las dependencias de nuestro proyecto, las cuales van a estar definidas en el package.json

Directorio src:
    -index.html Es el archivo HTML principal de nuestra aplicación, desde donde se cargará el componente raiz de Angular.
    -main.ts Es el archivo TypeScript que va a inicar nuestra aplicación, el cual va a importar el módulo principal llamado "AppModule".
    -styles.css Es el archivo CSS que va a contener todos los estilos globales de nuestra aplicción.
    -Directorio assets Es el directorio que va a contener archivos como imágenes, fuentes de letras... los archivos estáticos.
    -Directorio app
        -Ficheros app.component* Son todos los archivos que definen nuestro componente raiz. Estos serán los archivos TypScript, HTML, CSS...
        -Fichero app.module.ts Es el archivo que va a definir nuestro modulo principal de la aplicación, el cual tiene el nombre de "AppModule" y en el se van a importar todos los componentes, pipes... utilizados en la aplicación.

    
2. Explica cada uno de los siguientes decoradores generador por Angular CLI, detallando cada una de las propiedades que se definen en:

    -app.module.ts - @NgModule (declarations, imports, providers, bootstrap)
        declarations: Es la propiedad que contiene los componentes, directivas y pipes que forman parte del módulo actual, estos pueden ser utilizados por otros componentes con el requisito de que pertenezcan al mismo módulo.

        imports: Contiene los módulos que tienen que ser importados por nuestro módulo actual.

        providers: Son los servicios que tienen que estar disponibles para todos nuestros componentes del módulo.

        bootstrap: Va a ser el primer componente que se cargará al inicializar la aplicación.

    -app.component.ts - @Component (selector, templateUrl,styleUrls)
        selector: Contiene el selector CSS que Angular va a utilizar para identificar al componente dentro de nuestro código HTML.

        templateUrl: Contiene la ubicación donde se encuentra el archivo HTML que tiene la estructura y el diseño del componente.

        styleUrls: Contiene todas las rutas de los archivos CSS que tienen los estilos del componente.
    
3. ¿Es posible poder inyectar el template y los estilos en linea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacerlo?

Si que es posible inyectarlos directamente, para ello se tienen que utilizar las propiedades de "template" y "styles" dentro del @component. 

Aunque existe esta posibilidad, no siempre se recomienda utilizar, ya que en proyectos que son de gran tamaño utilizar esta inyección puede dificultar el mantenimiento del código y la legibilidad al realizar modificaciones. Esto también afectaría considerablemente a la hora de tener un código más organizado. Sin embargo, si el proyecto es de menor tamaño o tiene un código más simple, si que podría ser útil utilizar esta inyección debido a la facilidad de implementación.



