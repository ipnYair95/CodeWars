/* 
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

Note:
In the result codes and their values are in the same order as in M.
 */

/**
 * Level: Easy
 * 1- Verificamos q ambos arrays tengan algo, de lo contrario no se puede calcular
 * 2- Recorrermos las categorias y por cada categoria recorremos los libros
 * 3- Empleamos el primer caracter y si corresponde, se le suma su valor
 */

class Categoria {
    private _code;
    private _val;

    constructor(code: string, val: number) {
        this._code = code;
        this._val = val;
    }

    get code(): string {
        return this._code;
    }

    get val(): number {
        return this._val;
    }

    set code(code) {
        this._code = code;
    }
    set val(val) {
        this._val = val;
    }
}

function filtro(listOfArt: string[], listOfCat: string[]) {
    
    let res: Categoria[] = [];
    let str = '';

    if (listOfCat.length == 0 || listOfArt.length == 0) {
        return "";
    }

    for (let i = 0; i < listOfCat.length; i++) {
        res.push(new Categoria(listOfCat[i], 0));
        listOfArt.forEach((l: string) => {
            let code = l.split(" ")[0];
            let val = l.split(" ")[1];
            res[i].val += (code.charAt(0) === res[i].code) ? +val : 0;
        });
        str += `(${res[i].code} : ${res[i].val})` + ((i < listOfCat.length - 1) ? ' - ' : '');

    };

    return str;

}


let b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c = ["A", "B", "C", "D"];

console.log(filtro(b, c));
