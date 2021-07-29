/* Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57" */

/**
 *Level: easy
 *1- Revisamos que si es 1 o 0 mandamos directamente el resultado
 *2- De lo contrario empleamos den=4 y en funcion de las repeticiones se va incrementando +3, del mismo modo
    vamos sumando la fraccion a la suma
 */
 

export function SeriesSum(n: number): string {
    let den = 4;
    let sum = ( n != 0 ) ? 1 : 0;    

    if (n != 1) {
        for (let i = 1; i < n; i++) {
            sum += 1 / den;
            den += 3;
        }
    }
    return sum.toFixed(2);
}

console.log( SeriesSum(5) );