/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */


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