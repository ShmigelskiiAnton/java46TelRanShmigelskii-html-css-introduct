
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort((a, b) => (a % 2 - b % 2) || (a % 2 ? b - a : a - b))
console.log('1 ex.:' , arHw);


