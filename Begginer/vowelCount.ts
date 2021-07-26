/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

export class Kata {
    static getCount(str: string) {
        let dic: string[] = ['a','e','i','o','u']
        let count = 0;

        Array.from(str).forEach((char)=>{
            if( dic.includes(char) ){
                count++;
            }
        });

        return count;
    }
}


console.log( Kata.getCount("aeiou") );