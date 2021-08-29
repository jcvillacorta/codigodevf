# Quiz - JavaScript Basics

### Nombre completo:
> Juan Carlos Villacorta Reyes

-----------

## Self-Evaluation

#### Auto evaluación de los temas vistos en clase. Responde  a las siguientes preguntas sin utilizar ningun recurso para solucionarlas. Tu conocimiento es muy importante para nosotros. 

#### Objetivo de la evaluación: conocer que tanto haz aprendido sobre JavaScript y ver que temas se necesitan para una asesoria.

Reglas:

1. No googlear
2. No buscar en ningun libro
3. Realizarlo de forma individual

---

##### 1. ¿Qué es un algoritmo?

> Una serie de instrucciones para que las computadoras hagan algo

##### 2. ¿Qué es un lenguaje de programación?

> Ina serie de palabras específicas que hacen instrucciones para que las computadoras hagan algo.

##### 3. Describe que es un tipo de dato:

> Una característica que define una instrucción.

##### 4. ¿Cuáles son los tipos de dato que conoces?

> number, string, boolean, function, operador...


##### 6. ¿Qué es NaN?

> Not a Number

##### 7. ¿Cual es el uso de `typeof`?

> Define el tipo de dato que es lo que se escribe

##### 8. ¿Cuál es la diferencia entre `==` y `===`?

> El doble es igualdad entre dos datos. El triple es igualdad exacta entre dos datos. 

##### 9. ¿Qué es una variable?

> Un elemento que almacena datos como si fuera una caja.

##### 10. ¿Qué es un statement?

> Una serie de instrucciones para hacer algo.

##### 11. Del siguiente statement `a = b * 2` identifica sus partes _(literals, variables, operators)._

> Literals: =; variables: a y b; operators: *

##### 12. ¿Qué es una expression?

> Una serie de datos que conforman unidos un statement.

##### 13. ¿Cuántas expressions puedes identificar del siguiente statement `a = b * 2;`?

> 4; a, b, = y b*2

##### 14. ¿Cuál es la diferencia entre lenguaje `interpreted` y `compiled`?

> el lenguaje interpreted se "traduce" sobre la marcha y el compiled necesita un elemento externo para interpretarlo.

##### 15. Es JavaScript `interpreted` o `compiled`? Justifica tu respuesta.

> Es interpreted porque el navegador es el que va traduciendo las instrucciones conforme corre el programa, no necesita un compilador externo para que pueda correr.

##### 16. ¿Cuales son los tipos de comentarios en JavaScript?

> De línea y de sección.

---------

## Sección Inténtalo tu mismo:

---

### Output Exercises.

Considera: `var a = 1;`

Escribe el código para:

##### 1 Imprimir `a` en consola:

> console.log (a);

##### 2. mostrar `a` en una alerta:

> prompt (a);

### Input Exercises.

Pregunta al usuario su nombre con una función __prompt__ y que el mensaje diga: 
`"Porfavor, escribe tu nombre"` y guarda su nombre en una variable llamada `username`, después loguea el valor en consola

Solución:

js
prompt("Por favor, escribe tu nombre");
var username=(prompt);
console.log(username);

### Sección: Operadores

---

##### 1. Completa la oración:

JavaScript has both u___ and b___ operators, and one special t___ operator

> undefined, boolean, third

##### 2. Tipos de Operadores

Nombre los _tipos de operadores_ que conoces, y da un ejemplo básico de cada uno que menciones:

> boolean, 3==3; 

##### 3. Describe el uso de los operadores aritméticos:

> Son los que sirven para hacer operaciones matemáticas: = + * /, entre otros


##### 4. ¿Qué es coercion en JS?

> Es última respuesta al sentido de la vida, el universo y todo lo demás. En realidad, es la interpretación del programa de algunos datos de acuerdo a una lógica interna que muchas veces no concuerda con lo que pensamos. Ej si ponemos "3"==3 JS arrojará true, a pesar de que uno es string y el otro número.


##### 5. ¿Es esto un código válido en JS?

js
var amount = 100;

{
  amount = amount * 2;
  console.log(amount)
}

> Sí


### Estructuras de Control

##### 1. Describe que son y para que funcionan las estructuras de control:

> Son estructuras que sirven para verificar datos y arrojan resultados conforme a su veracidad o falsedad.


##### 2. Realiza una estructura de control simple utilizando una condicion, si la condición se cumple, retorna true, en caso contrario, retorna false.

js
if (4+16=20) {
console.log("Es obvio");
}

##### 3. Escribe un bloque de código para validar si una variable `number` es menor que `10` para loguear `one digit`, de lo contrario, loguea `two digits`.

Solution:

js
var number=10; 
if (number<10) {
console.log("one digit");
}
else console.log("two digit");


### Ciclos

##### 1. Describe que es un ciclo y para que funcionan:

> Sirve para comprobar cada dato de un array

##### 2. Realiza un ciclo for iterando el siguiente arreglo: var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:

js
// your code here


##### 3. Escribe un bloque de código para loguear los números de `0-9` usando `while` y  `do-while`  loops.

**`while`** solution:

js
// your code here

**`do-while`** solution:

js
// your code here

##### 4. ¿Cuales son las 3 clausulas de sintaxis para un `for` loop?

> _your answer here_

### Sección: Functions

---

##### 1. ¿Qué es una función?

> _your answer here_

##### 2 Escribe una función `sum` que reciba dos numberos como argumentos y que regrese la suma de ambos.

Solution:

js
// your code here

##### 3. ¿Qué es el scope en JavaScript?

> Define el alcance de una variable dentro de una función, es de adentro hacia afuera.

##### 4. Responde `true` o `false` para las siguientes preguntas:

Consider:

js
function outer() {
  var a = 1;

  function inner() {
    var b = 2;
  }

  inner();
}

outer();

##### 5. ¿La función `inner` tiene acceso a al scope de la función `outer`?

> true

###### 6. ¿La función `outer` tiene acceso al scope de la función `inner`?

> false

## Section: Challenges

---

##### 1. Crea una funcion llamada `calculateAreaOfACircle` que reciba `radius` como parámetro. Usa una variable llamada `PI` igual a `3.14159`.

Solution:

js
// crea la variable PI aqui


// crea tu funcion aqui



##### 2. Escribe una función que revierta el siguiente array

js
// your code here


##### 3. Escribe una funcion que compare dos arreglos y retorne true si son idénticos, retorna false en caso contrario.

js
// your code here