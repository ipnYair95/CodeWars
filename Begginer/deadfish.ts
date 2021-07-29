/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [8, 64] */

/**
 * Level: easy
 * 1- Recorremor el array, si el caracter se encuentra entre los validos sigue
 * 2- Seleccionamos la opcion y tarea a realizar
 * 3- Retornamos 
 */


export function parse(data: string): number[] {

    let array: number[] = [];
    let validos: string[] = ["i", "d", "s", "o"];
    let valor = 0;

    for (let i = 0; i < data.length; i++) {
        let letra = data.charAt(i);
        if (validos.includes(letra)) {
            switch (letra) {
                case "i":
                        ++valor;
                    break;
                case "d":
                        --valor;
                    break;

                case "s":
                        valor **=2;
                    break;

                case "o":
                        array.push(valor);
                    break;
            }
        }
    }

    console.log(array);
    return array;
}

console.log(parse("iio"));
