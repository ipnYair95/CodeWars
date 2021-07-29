/* You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "". */

/**
 * Level: Intermedio
 * 1- Validamos que el array no sea vacio, k no negativo y que k no supere la longitud del array
 * 2- A cada palabra le concatenamos la siguiente palabra en funcion de k empleado un for
 * 3- Dicha palabra compuesta la agregamos a un array que tiene la cadena y su longitud
 * 4- Buscamos el de mayor longitud
 * 5- Para validar quien llego primero, recorremos el array buscando el primer match para retornar dicho indice
 */

class Mixes {
    constructor(
        public cadena: string,
        public longitud?: number) { }
}

function longest(array: string[], k: number) {

    let compuestos: Mixes[] = [];

    if (array.length == 0 || array.length < k || k <= 0) {
        return "Its not possible";
    }

    for (let i = 0; i <= array.length - k; i++) {
        compuestos.push(new Mixes(array[i], 0));
        for (let j = 1; j < k; j++) {
            compuestos[i].cadena += array[i + j];
        }
        compuestos[i].longitud = compuestos[i].cadena.length;
    }

    let mayor = Math.max(...compuestos.map(ele => ele.longitud));
    for (let i = 0; i < compuestos.length; i++) {
        if (mayor == compuestos[i].longitud) {
            return compuestos[i].cadena;
        }
    }


}

function concatenar() {

}

let array: string[] = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
let k: number = 1;

console.log(longest(array, k));