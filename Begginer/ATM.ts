/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

/**
 * Level: easy;
 * Validamos el pin con una expresion regular que valide solamente 4 y 6 digitos
 */

export class Kata {
    static validatePin(pin: string): boolean {
        const regex = new RegExp('^([0-9]{4}|[0-9]{6})$');
        return regex.test(pin);
    }
}

console.log( Kata.validatePin( "6444234" )  );
