function solve(str) {
    let mid = Math.floor(str.length / 2);
    let firstHalf = str.substring(0, mid);
    let secondHalf = str.substring(mid);
    
    let reversedFirst = firstHalf.split('').reverse().join('');
    let reversedSecond = secondHalf.split('').reverse().join('');

    console.log(reversedFirst);
    console.log(reversedSecond);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')