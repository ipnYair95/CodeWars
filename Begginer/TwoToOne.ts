/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */


/**
 * Level: Intermedio
 * 1- Combinamos ambas cadenas y las ponemos en lower o uppper
 * 2- Recorremos la cadena combinada, si el elemento no se encuentra en el array resultante se hace un push
 * 3- Una vez obtenido el array, realizarmos un sort para ordenar el array y crear la palabra con un join
 */

export class G964 {

    public static longest = (s1: string, s2: string) => {
        let cadenaFiltrada: string[] = [];
        let cadena = Array.from((s1 + s2).toLowerCase());

        for (let letra of cadena) {
            if (!cadenaFiltrada.includes(letra)) {
                cadenaFiltrada.push(letra);
            }
        }

        console.log(cadenaFiltrada.sort().join(""));
    }
}

G964.longest('xyaabbbccccdefww', 'xyaabbbccccdefww');