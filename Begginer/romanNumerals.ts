/* Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row. */

/**
 * Level: Hard
 * 1- Creamos nuestros simbolos y equivalencias
 * 2- Usamos un regex para validar que nos den un numero y que si es numero se encuentre entre el rango (1,4000)
 * 3- Recorremos la cadena validando cada caracter empezando por el simbolo mayor M
 * -> Si el valor actual/simbolo > 1, puede dividirse y usarse, empleamos repeat para repetir las veces necesarias
 *      en funcion del resultado de la division
 *      Una vez realizado, empleamos modulo para obtener el residuo y repetir
 * -> Si el valor no puede dividirse, pasamos al siguiente simbolo y repetimos
 */

class Simbolo {
    constructor(public simbol: string, public value: number) {
    }
}

const simbolos: Simbolo[] = [
    new Simbolo("I", 1),
    new Simbolo("IV", 4),
    new Simbolo("V", 5),
    new Simbolo("IX", 9),
    new Simbolo("X", 10),
    new Simbolo("XL", 40),
    new Simbolo("L", 50),
    new Simbolo("XC", 90),
    new Simbolo("C", 100),
    new Simbolo("CD", 400),
    new Simbolo("D", 500),
    new Simbolo("CM", 900),
    new Simbolo("M", 1000)
];

function calcular(valor: number): string {

    let regex = RegExp('^[0-9]+$');

    if (valor >= 4000 || valor < 1 || !regex.test(valor.toString())) {
        return "Valor no soportado"
    }

    let i = simbolos.length - 1;
    let texto = '';

    while (valor != 0) {

        let div = valor / simbolos[i].value;
        console.log(valor, i);

        if (div < 1) {
            i--;
        } else {
            texto += simbolos[i].simbol.repeat(div);
            valor = valor % simbolos[i].value;
        }

    }

    return texto;

}

console.log(calcular(1990));


