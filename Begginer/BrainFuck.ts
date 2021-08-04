/* Inspired from real-world Brainf**k, we want to create an interpreter of that language which will support the following instructions:

> increment the data pointer (to point to the next cell to the right).
< decrement the data pointer (to point to the next cell to the left).
+ increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.
- decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.
. output the byte at the data pointer.
, accept one byte of input, storing its value in the byte at the data pointer.
[ if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.
] if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.
The function will take in input...

the program code, a string with the sequence of machine instructions,
the program input, a string, eventually empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the , instruction */


/**
 * Level: Hard
 * 1- Usaremos 2 punteros, 1 para las celdas y otro para recorrer la cadena
 * 2- Leemos cada caracter y hacemos la operacion segun sea el caso, por cada caso aumentamos el apuntador de la cadena
 * 3- Para los casos []
 *  [ - Guardamos la posicion del [ en una pila
 *  ] - Cuando venga este char, si el apuntador de la celda != 0 hacemos un pop a la pila apra regresarnos a la posicion n de la cadena
 */

let cells: number[] = new Array(6);
let ptr = 0;
let ptrString = 0;
let pila: number[] = [];
let palabra = '';

function operacion(array: string[]) {

    switch (array[ptrString].toString()) {
        case ">":
            ptr = (ptr == cells.length - 1) ? 0 : ++ptr;
            ++ptrString;
            break;

        case "<":
            ptr = (ptr == 0) ? cells.length - 1 : --ptr;
            ++ptrString;
            break;

        case "+":
            cells[ptr] = (cells[ptr] == 255) ? 0 : ++cells[ptr];
            ++ptrString;
            break;

        case "-":
            cells[ptr] = (cells[ptr] == 0) ? 255 : --cells[ptr];
            ++ptrString;
            break;

        case ".":
            palabra += String.fromCharCode(cells[ptr]);
            ++ptrString;

            break;
        case "[":
            pila.push(ptrString);
            ++ptrString;
            break;

        case "]":
            ptrString = (cells[ptr] == 0) ? ++ptrString : pila.pop();
            break;
        default:
            ++ptrString;
            break;        
    }


}

function brainFuck(cadena: string) {

    let cadenaArr = Array.from(cadena);
    cells.fill(0);

    while (ptrString != cadenaArr.length) {
        operacion(cadenaArr);        
    }

    return palabra;

}

console.log(
    brainFuck(`
    ++++++++++[>+++++++>++++++++++>+++++++++++>+++>+<<<<<-]>++.>>+.---.<---.>>++.<+.++++++++.-------.<+++.>+.>+.>.
    `)
);
