//01 - Sum Digits
function sumDigits(n) {
    let num = n;
    let result = 0;
    do {
        let last = num % 10;
        result += last;
        num = parseInt(num / 10);
    } while (num > 0);
    console.log(result);
}

//02 - Reverse ASCII
function reverseAscii(p1, p2, p3) {
    console.log(`${p3}${p2}${p1}`);
    console.log(`${p3.charCodeAt(0)} ${p2.charCodeAt(0)} ${p1.charCodeAt(0)}`);
}

//03 - Town Info
function townInfo(town, population, area) {
    let isCorrect = true;
    if (town.length < 3 ) {
        console.log('Town name must be at least 3 characters!');
        isCorrect = false;
    }
    
    if (population < 0) {
        console.log('Population must be a positive number!');
        isCorrect = false;
    }

    if (area < 0) {
        console.log('Area must be a positive number!');
        isCorrect = false;
    }

    if (isCorrect) {
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }
}

//04 - Convert Distance
function convertDistance(meters) {
    const metersToKm = 1000;
    const milesInKm = 0.621371;
    let km = meters / metersToKm;
    let miles = km * milesInKm;
    console.log(`${meters} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

//05 - Pounds to Dolars
function poundsToDolars(pounds) {
    const dolarsInPounds = 1.31;
    let dolars = pounds * dolarsInPounds;
    console.log(dolars.toFixed(3));
}

//06 - Reversed String
function reversedString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    console.log(result);
}

//07 - Lower to Upper
function lowerToUpper(str) {
    let asciiCode = str.charCodeAt(0);
    if (asciiCode >= 65 && asciiCode <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

//08 - Calculator
function calculator(a, operator, b) {
   let result = 0;
   switch (operator) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        result = a / b;
   }
   console.log(result.toFixed(2));
}

//9 - Gladiator Expenses
function expenses(lost, helmet, sword, shield, armor) {
    let brokenHelmets = parseInt(lost / 2);
    let brokenSwords = parseInt(lost / 3);
    let brokenShields = parseInt(lost / 6);
    let brokenArmor = parseInt(brokenShields / 2);

    let total = brokenHelmets * helmet + brokenSwords * sword + brokenShields * shield + brokenArmor * armor;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

//10 - Spice Extraction
function calculateSpiceExtraction(startingYield) {
    let totalSpice = 0;
    let days = 0;
    let currentYield = startingYield;

    while (currentYield >= 100) {
        days++;
        totalSpice += currentYield;
        totalSpice -= 26; // daily crew consumption
        currentYield -= 10;
    }

    // Final consumption after mine is exhausted
    if (totalSpice >= 26) {
        totalSpice -= 26;
    } else {
        totalSpice = 0;
    }

    console.log(days);
    console.log(totalSpice);
}