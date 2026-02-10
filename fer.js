// 1. Texto definido: cadena con espacios extra
let text = '  Hola   mundo,   este es   un   texto   de   ejemplo.  ';

// 2. Limpiar espacios innecesarios (múltiples espacios → uno solo, y quitar bordes)
let cleaned = text.replace(/\s+/g, ' ').trim();

// 3. Definir la palabra que queremos buscar en el texto limpio
let word = 'mundo';

// 3.1. Comprobar si el texto limpio contiene la palabra indicada
let found = cleaned.includes(word);

// 4. Modificar parte del texto: reemplazar la palabra "texto" por "mensaje"
let modified = cleaned.replace('texto', 'mensaje');

// 5. Cálculo numérico usando Math: 3 * 7 + 2³
let result = 3 * 7 + Math.pow(2, 3);

// Mostrar en consola todas las variables para verificar los resultados
console.log({ text, cleaned, found, modified, result });
