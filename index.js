//vamos a retornar Math.abs//
//Math retorna un valor absoluto//
console.log(Math.abs(-4.7));
console.log(Math.abs('-100'));
// Math.round devuelve el numero redondeado al entero mas cercano//
console.log(Math.round(4.9));
console.log(Math.round(4.5));
console.log(Math.round(4.4999999));
console.log(Math.round('4.9'));
console.log(Math.round(1 / 3));
console.log(Math.round(-1.4));
console.log(Math.abs(Math.round(-1.4)));
console.log(Math.abs(Math.round('uno')));
//Math.ceil(x)devuelve el valor de x redondeado a su entero más cercano hacia arriba://
console.log(Math.ceil(4.1));
console.log(Math.ceil(-4.1));
//Math.floor(x)devuelve el valor de x redondeado hacia abajo a su entero más cercano://
console.log(Math.floor(-4.1));
console.log(Math.floor(5.1));

/* ------- Numero aleatorio y calculo */
/* Math ramdom sin argumento siempre trae resultado entre 0 y 1 */
console.log(Math.random());
/* Math ramdom entre 1 y 10  */
console.log(Math.floor(Math.random() * (20 - 15 + 1)) + 15);
/* math pow ()  La función Math.pow() devuelve la base elevada al exponente , esto es, baseexponente. */
console.log(Math.pow(2, 3));
console.log(Math.pow(-2, 3));
console.log(Math.pow(Infinity, 2));
console.log(Math.pow('UNO', 2));
console.log(Math.pow('2', 3));
console.log(Math.pow(2.5, 3));
console.log(
  Math.pow(2, 3, 2)
); /* Solo toma los primero 2 argumentos, no acepta mas argumentos por que es una potencia simple */
console.log(Math.pow(2 + 2, 2));

/* La función Math.sqrt() retorna la raíz cuadrada de un número, que es */

console.log(Math.sqrt(16));
console.log(
  Math.sqrt(-16)
); /* El master pedro dice que las raices no puedenser de valores negativos */
console.log(Math.sqrt(Infinity));
console.log(Math.sqrt('diesciséis'));
console.log(Math.sqrt('16'));
console.log(Math.sqrt(2.5));
console.log(Math.sqrt(25, 16)); /* solo acepta el primer valor en estes caso = 5 */

/* ------------- Búsqueda de texto con String --------------- */
/* El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente. */

const rima =
  'Profe yo te pregunto, por lo redondo de un cerro, respondeme ahora mismo, ¿Cuantos pelos tiene un perro?';
console.log(
  rima.indexOf('perro')
); /* cuenta todos los caracteres del string y entrega donde comienza la palabra buscada */

/* [...rima].forEach((e,i)=> {console.log(e,i)})  */

console.log(
  rima.indexOf('Perro'.toLowerCase())
); /* cuenta todos los caracteres del string y entrega conde comienza la palabra buscada */
console.log(rima.indexOf('gato'));

/* El método lastIndexOf() devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex. */

const rima2 = 'Con Git yo trabajo sin temor, cada commit guarda mi labor.';
console.log(
  rima2.lastIndexOf('Git')
); /* ultima aparicion de la coincidencia en este caso 4 caracteres antes de llegar a Git */
console.log(
  rima2.lastIndexOf('t')
); /* ultima aparicion de la coincidencia en este caso 4 caracteres antes de llegar a t */
console.log(
  rima2.lastIndexOf('h')
); /* edvuelve -1 cuando no encuentra la coincidencia del caracter o palabra */
console.log(rima2.lastIndexOf('git'));

/* Include() = El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.*/

const rima3 = 'Con un pull traigo la versión, y mi repo sigue en conexión.';

console.log(rima3.includes('un'));
console.log(rima3.includes('Un'));
console.log(rima3.includes(' '));
console.log(rima3.includes('1'));

/* startsWith() El método startsWith() indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta, devolviendo true o false según corresponda. */

const rima4 = 'commit guardo mi acción, y el historial gana precisión.';

console.log(rima4.startsWith('Con'));
console.log(rima4.startsWith('con'));
console.log(rima4.startsWith('comm'));

// endsWith(): termina con ...
console.log(rima4.endsWith('sión'));

//******************Modificación de texto***************** */

const text = '   Javascript es genial     ';

// toUpperCase() : mayúsculas

console.log(text.toUpperCase());

// toLowerCase() : minúsculas
console.log(text.toLowerCase());

// trim(): elimina espacios al inicio y fin

console.log(text.trim()); // es clave cuando trabajamos con inputs de usuarios

// replace(): remplaza la primera coincidencia

console.log(text.replace('genial', 'increible'));

//rplaceAll(): remplaza todas las coincidencias

console.log('hola hola como estas?'.replaceAll('hola', 'chao'));

// ****************Extraer y dividir texto********************

const msje = 'JavaScript es poderoso';

// slice(): extrae usando indice
console.log(msje.slice(-11)); //intercambiar index, argumentos negativos

// substring(): similar a slice
console.log(msje.substring(10, 0));

// split() : divide una arreglo

const palabras = msje.split(' ');
console.log(palabras);

// concat(): une textos

const completo = 'Hola '.concat('mundo!');

console.log(completo);
