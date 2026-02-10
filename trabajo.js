
const textoDefinido = "texto predefinido aprender vue ";
console.log(textoDefinido.length);
console.log(textoDefinido);

//limpieza de espaciones
const textoLimpiado = textoDefinido.trim();
console.log(textoLimpiado.length);
console.log(textoLimpiado);

//palabra especifica
const palabraEspecifica = textoDefinido.includes("vue");
console.log(palabraEspecifica);

const palabraEspecifica2 = textoDefinido.trim().split(" ").find(
  (palabra) => palabra === "vue"
)
console.log(palabraEspecifica2);

//texto modificado
const textoModificado = textoDefinido.concat("", "js")
console.log(textoModificado);

//calculo con math
const calculo = textoDefinido.length
const calculo2 = Math.pow(calculo, 2)
console.log(calculo2);