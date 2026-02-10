// Texto definido (descripción de producto)
let descripcion = "   Zapatilla deportiva Nike Air Max para running running   ";

console.log("Texto original:");
console.log(descripcion);


// Limpiar espacios innecesarios
descripcion = descripcion.trim();

console.log("Texto sin espacios al inicio y final:");
console.log(descripcion);


// Búsqueda de palabra específica
let palabraBuscada = "Nike";

console.log("\nBúsqueda de palabra:");

console.log("indexOf:", descripcion.indexOf(palabraBuscada));
console.log("lastIndexOf:", descripcion.lastIndexOf("running"));
console.log("includes:", descripcion.includes(palabraBuscada));
console.log("startsWith:", descripcion.startsWith("Zapatilla"));
console.log("endsWith:", descripcion.endsWith("running"));


// 4️⃣ Modificación de texto
descripcion = descripcion.replace("running", "entrenamiento");
descripcion = descripcion.replaceAll("running", "entrenamiento");
descripcion = descripcion.toUpperCase();

console.log("Texto modificado:");
console.log(descripcion);


// 5️⃣ Extraer y dividir texto
console.log("Trabajando partes del texto:");

let primerasPalabras = descripcion.slice(0, 20);
console.log("slice:", primerasPalabras);

let otraParte = descripcion.substring(0, 10);
console.log("substring:", otraParte);

let palabras = descripcion.split(" ");
console.log("split:", palabras);

let textoFinal = primerasPalabras.concat(" - EDICIÓN LIMITADA");
console.log("concat:", textoFinal);


// 6️⃣ Cálculos numéricos con Math
let precioBase = 79990;
let descuentoAleatorio = Math.random(); // entre 0 y 1
let descuentoAplicado = Math.round(descuentoAleatorio * 30); // hasta 30%

let precioFinal = Math.floor(precioBase * (1 - descuentoAplicado / 100));

console.log("Cálculo con Math:");
console.log("Descuento aplicado:", descuentoAplicado + "%");
console.log("Precio final:", precioFinal);

console.log("Otros métodos Math:");
console.log("abs(-20):", Math.abs(-20));
console.log("ceil(4.2):", Math.ceil(4.2));
console.log("floor(4.8):", Math.floor(4.8));
console.log("pow(2,3):", Math.pow(2,3));
console.log("sqrt(64):", Math.sqrt(64));


let producto = {
  nombre: "Zapatilla Nike Air Max",
  precioBase: 79990,
  descuento: descuentoAplicado + "%",
  precioFinal: precioFinal
};

console.table(producto);
