/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test" */

/**
 * Level: easy
 * 1- Convertirmos las palabras en array para trabajarlas
 * 2- Recorremos el array y buscamos aquellas palabras que sea mayores a 5
 *      -> Mayores: Dividimos la palabra en array para aplicarle reverse y pposteriormente juntarlas
 *      -> Menores: Agregamos a la cadena directamente
 * 3- Obtenido el array creamos la oracion final con join
 */

export class Kata {
    static spinWords(words: string) {

        let arrayText = words.split(' ');
        let texto = '';

        arrayText.map((palabra, i) => {
            if (palabra.length >= 5) {
                arrayText[i] = palabra.split('').reverse().join('');
            } else {
                arrayText[i] = palabra;
            }

            texto = arrayText.join(' ');

        });

        return texto;
    }
}

console.log(Kata.spinWords("Hey fellow warriors"));
 