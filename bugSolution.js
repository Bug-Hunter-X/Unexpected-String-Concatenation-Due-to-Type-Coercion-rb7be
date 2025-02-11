function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3

function foo2(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    } else {
        return Number(a) + Number(b);
    }
}
console.log(foo2(1,'2')) //Output: 3
console.log(foo2('a',2)); //Output: NaN