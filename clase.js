const persona = {
  nombre: 'Fernando',
  edad: 38,
  // ---> las funciones dentro de objetos permiten realisar acciones o comportamientos relacionados con sus datos
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },
};

console.log(persona.nombre);
console.log(persona.saludar());

// Que es THIS?
// dentro de un Objeto se refiere al propio objeto que está ejecutando el método.
// En este caso this.nombre = persona.nombre

const persona2 = {
  nombre: 'Felipe',
  edad: 38,
  // ---> las funciones dentro de objetos permiten realisar acciones o comportamientos relacionados con sus datos
  saludar: function () {
    return `${this.nombre}. cumplira ${this.edad + 1} En Septiembre`;
  },
};

console.log(`${persona2.nombre}, ${persona2.saludar()}`);
console.log(`${this.nombre}. cumplira ${this.edad + 1} En Septiembre`); // this existe solo en el Objeto, no en el scope global

const vehiculo = {
  marca: 'suzuki',
  anio: 2025,
  rendimiento: 15,
  Umedida: 'Kl',
  motor: 'Bencinero',
  estanque: 10,
  autonomia: function () {
    return `${this.rendimiento * this.estanque}`;
  },
};

console.log(
  `Un ${vehiculo.marca} del año ${vehiculo.anio} con motor ${vehiculo.motor} y un estanque ${vehiculo.estanque} tiene una autonomía de ${vehiculo.autonomia()} ${vehiculo.Umedida}`
);

const mascota = {
  tipo: 'perro',
  raza: 'Pastor suizo',
};

const animal = new Object();
// def.clve    def.valor
animal.tipo = 'Perro';
animal.raza = 'Labrador';

console.log(animal);

const alumno = {
  nombre: 'Felipe',
  nota: 5.5,
};
// agrega o edita de encontar la clave, una nueva propiedad
alumno.curso = 'Vue.Js';

// eliminar una prop
delete alumno.nota;

console.log(alumno);

const pokemon = {
  nombre: 'Bulbasaur',
  ataque: 'Hoja afilada',
  tipo: 'planta',
  evoluciones: ['ivysaur', 'venusaur', 'megavenusaur'], // --> array
};

console.log(pokemon['ataque']); // cuando tiene espacios o caracteres especiales
console.log(pokemon.ataque); // --> más comun y lejible se usa cuando el nombre de la propiedad es válida y conocido
console.log(pokemon.evoluciones[0]);

for (let i = 0; i < pokemon.evoluciones.length; i++) {
  console.log(pokemon.evoluciones[i]);
}
