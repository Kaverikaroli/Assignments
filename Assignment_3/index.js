

console.log("Calling one custom module");

const v_calc=require('./calc')

const result=v_calc(10,20);

console.log("add(10,20) is "+result);





console.log("Calling more than one custom module");

const calc2=require('./calc2');

console.log("add "+calc2.add(10,20));

console.log("sub "+calc2.sub(10,20));
console.log("mul "+calc2.mul(10,20));
console.log("div "+calc2.div(10,20));