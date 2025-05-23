function solve(arr){
    let inverted = arr[0];
    let password = '';
    let attemps = 0;

    for (let i = inverted.length - 1; i >= 0; i--) {
        password += inverted[i];
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === password) {
            console.log(`User ${inverted} logged in.`);
            break;
        } else {
            attemps ++;
            if (attemps < 4) {
                console.log('Incorrect password. Try again.');
            } else {
                console.log(`User ${inverted} blocked!`)
                break;
            }
        }
    }
}
// solve(['Acer','login','go','let me in','recA']);
let name = "Kokolino";
let result = name.split('');
console.log(result);
result.reverse();
console.log(result);
let x = result.join('-');
console.log(x);






