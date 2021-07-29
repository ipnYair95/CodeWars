/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input! */

/**
 * Level: Intermedio
 * 1- Normalizamos los caracteres para tomar en cuenta lower y upper
 * 2- Recorremos cada posicion, donde se emplean 2 strings para saber si se repite o no por la izq y derecha sin contar el actual
 *     --Si nos encontramos en la posicion inicial o final retornamos '' --
 * 3- Si no existe otra letra pasa a ) de lo contrario (
 */

export function duplicateEncode(word: string) {
    
    let encode: string = '';
    let leftStr, rightStr;
    let normalize = word.toLowerCase();

    Array.from( normalize ).forEach((char, i) => {
        
        leftStr = (i > 0) ? normalize.substr(0, i) : '';
        rightStr = (i < normalize.length) ? normalize.substr(i+1) : '';

        if( Array.from(leftStr).includes(char) || Array.from(rightStr).includes(char) ){
            encode += ")";
        }else{
            encode += "(";
        }
       
    });

    return encode;
}

console.log(duplicateEncode("All duplicated ALL DUPLICATED"));