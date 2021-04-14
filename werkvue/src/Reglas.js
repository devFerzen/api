/*
....EN CASO DE VER CODIGO INCUMPLIENDO DICHAS REGLAS FAVOR DE HACER LOS CAMBIOS
CORRESPONDIENTES PARA CUMPLIR CON LAS NOMENCLATURAS....

>>>Reglas en template HTML
ID: serían en lowerlCamelCase
**Clases: son nombrados bajo kebab-case
**Componentes-vue: son nomrados kebab-case

>>>Reglas JS
**Variables: son nombrados lowerlCamelCase
**Funciones: son nombrados lowerlCamelCase
**Clases / Objetos / Arreglos: son nombrados UpperCamelCase
**QUERIES Y RESOLVERS: son nombrados UPPERCASE_SNAKE_CASE

>>>Reglas Funciones
**Funciones solo pueden tener un máximo de parametros de 3, si hay uno de 4 favor
de refatorizarlo.
¿¿¿¿¿Si es una función que usa un metodo await, este debe que estar dentro de  un try {
catch.????

>>>Vue
**Una sección de html con comportamientos u acciones, si es consumida en más de
dos lugares dentro de la aplicación se le convierte en un COMPONENTE Vue y si se
ocupa se le parametriza.

**El consumo de componentes y props deberán de estar siempre en la parte superior de data

**Props esta bajo una nomenclatura de lowerCamelCase

**Las variables para los v-model, deberán de tener la misma nomenclatura que la base de datos, cualquier
otra variable será dada por una nomenclatura tipo _lowerCamelCase

**Importación de componentes esta bajo una nomeclatura de upperCamelCase y su consumo
dentro de HTML esta bajo kebab-case.

**Template, CSS, Script se deben de ocultar correctamente con las flechas de la
barra de númeración lateral

>>>Base de datos
**Parametro en funciones graphql: Los parametros que necesiten un tipo de input
para ejecutar un query o resolver se le anexará la palabra Input al final

**Valor en propiedades de ub objeto Grahlq:
Las propiedades de un objeto Graphql estarán ombrados lowercase_snake_case.
Con un máximo de tres palabras separadas por ( _ ) en ciertos casos se puede poner 4 o
juntar palabras areasDe_especialidad_avanzada.  (_lowerlCamelCase)
Las propiedades de un objeto Graphql de forma de input se agregará la palabra input
en la parte inicial. (input_lowerlCamelCase)

**Tipos de valor: En el query de Graphql los tipos de valor serán definidos por un
(_) seguido del nombre del campo de MongodBD ejemplo: _contacto
**Tipos de input: Deben que seguir la misma regla de "Tipos de Valor" y solo se le añadirá
la palabra(input) ejemplo: (_lowerlCamelCaseInput)
**Valores de input: Los valores de input estarán bajo la misma regla que Campos
solo que se le agregará la palabra input al principio: ejemplo: (input_lowerCamelCase)
*/
