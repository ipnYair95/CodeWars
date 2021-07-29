/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates. */

/**
 * Level: easy
 * 1- Recorremos a1 y buscandos entre a2 si existe alguna palabra que la contenga como substr
 * 2- Si existe la añadimos al array 
 * 3- Realizamos un ordenamiento
 */

export class G964 {
    public static inArray(a1: string[], a2: string[]): string[] {

        let array = a1.filter((pal) => a2.some((palabra) => palabra.includes(pal))).sort();
        return array.sort();
    }


}

let a1 = ["live", "arp", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(G964.inArray(a1, a2));