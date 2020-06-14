// slowMath.add(6, 2).then(num => {
//     alert(num);
//     return slowMath.multiply(num, 2);
// }).then(num => {
//     alert(num);
//     return slowMath.divide(num, 4);
// }).then(num => {
//     alert(num);
//     return slowMath.subtract(num, 3);
// }).then(num => {
//     alert(num);
//     return slowMath.add(num, 98);
// }).then(num => {
//     alert(num);
//     return slowMath.remainder(num, 2);
// }).then(num => {
//     alert(num);
//     return slowMath.multiply(num, 50);
// }).then(num => {
//     alert(num);
//     return slowMath.remainder(num, 40);
// }).then(num => {
//     alert(num);
//     return slowMath.add(num, 32);
// }).then(num => {
//     alert(`The final result is ${num}`);
// }).catch((err) => {
//     alert(err);
// });

async function doMath() {
try {
    let result = await slowMath.add(6, 2);
    console.log(result);
    result = await slowMath.multiply(result, 2);
    console.log(result);
    result = await slowMath.divide(result, 4);
    console.log(result);
    result = await slowMath.subtract(result, 3);
    console.log(result);
    result = await slowMath.add(result, 98);
    console.log(result);
    result = await slowMath.remainder(result, 2);
    console.log(result);
    result = await slowMath.multiply(result, 50);
    console.log(result);
    result = await slowMath.remainder(result, 40);
    console.log(result);
    result = await slowMath.add(result, 32);
    console.log(`The final result is ${result}`);
} catch {
    let err = new Error ("umm..something went wrong");
    console.log(err);
}
}
doMath();