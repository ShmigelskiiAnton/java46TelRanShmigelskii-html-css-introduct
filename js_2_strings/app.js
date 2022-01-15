const str1 = "abc";
const str2 = "abc";
console.log(`str1 < str2 is ${str1 == str2}`)
console.log(`"123" > 23 is ${"123" > 23}`);

function stringProcessing(str){
    const strP = "" + str;
    console.log(`${str}[4] is ${str[4]}`);
    console.log(`lenght of "${str}" is ${str.lenght}`);
    console.log(`substring of "${str}" beginning from index 2 to 5 is ${strP.substring(2, 5)}`);
    console.log(`index of substring "1" in the "${str}"; last index of letter 1 in the ${str} is ${strP.indexOf("1")}`)


}
function encore(num, base){
    do {
        const digit = Math.round(num % base);
        const symb = getSymbol(digit);
        res = symb + res;
        num = Math.round(num / base);
    } while(num != 0);
}
function getSymbol(digit){
    return "" + digit;
}
console.log(encore)