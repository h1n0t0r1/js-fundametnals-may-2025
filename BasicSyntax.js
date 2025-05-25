// 01 - Ages
function ages(age){
    if (age >= 0 && age <=2) {
        console.log('baby');
    } else if (age >= 3 && age <= 13) {
        console.log('child');
    } else if (age >= 14 && age <= 19) {
        console.log('teenager');
    } else if (age >= 20 && age <= 65) {
        console.log('adult');
    } else if (age >= 66) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}

// 02-Rounding
function rounding(num, rnd){
    if (rnd > 15) {
         rnd = 15
    };
    let result = Number(num.toFixed(rnd));
    console.log(result);
}

//03-Division
function division(num){
    let result = 'Not divisible';
    if (num % 10 === 0) {
        result = 10;
    } else if (num % 7 === 0) {
        result = 7;
    } else if (num % 6 === 0) {
        result = 6;
    } else if (num % 3 === 0) {
        result = 3;
    } else if (num % 2 === 0) {
        result = 2;
    }
    if (result != 'Not divisible') {
        console.log(`The number is divisible by ${result}`);
    } else {
        console.log(result);
    }
}

//04-Vacantion
function vacantion(group, type, day) {
  let total = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          total = group * 8.45;
          break;
        case "Saturday":
          total = group * 9.8;
          break;
        case "Sunday":
          total = group * 10.46;
          break;
      }
      if (group >= 30) {
        total *= 0.85;
      }
      break;
    case "Business":
      if (group >= 100) {
        group -= 10;
      }
      switch (day) {
        case "Friday":
          total = group * 10.9;
          break;
        case "Saturday":
          total = group * 15.6;
          break;
        case "Sunday":
          total = group * 16;
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          total = group * 15;
          break;
        case "Saturday":
          total = group * 20;
          break;
        case "Sunday":
          total = group * 22.5;
          break;
      }
      if (group >= 10 && group <= 20) {
        total *= 0.95;
      }
      break;
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}

//05-Leap Year

function leapYear(year){
    // Logic
   let result = '';
   if (year % 4 == 0 && year % 100 !== 0 || year % 400 === 0) {
//    if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
    result = 'yes';
   } else {
    result = 'no';
   }
   // Return result
   console.log(result);
}

//06-Print and Sum
function printAndSum(start, stop){
   // logic
   let sum = 0;
   let result = '';
   for (let i = start; i <= stop; i++) {
        sum += i;
        result += i + ' ';
   }
   // Return result
   console.log(result);
   console.log(`Sum: ${sum}`);
}

//07-Triangle of Numbers
function createTriangle(num){
    // Logic
    let result = '';
    for (let i = 1; i <= num; i++) {
        result = '';
        for (let j = 0; j < i; j++) {
            result += i + ' ';
        }
        // Print result
        console.log(result);
    }
}

//08-Multiplication Table
function multiplicationTable(num){
    for (let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${i * num}`);
    }
}

//09 - Login
function login(arr){
    let inverted = arr[0];
    let password = arr[0].split('').reverse().join('');
    let attemps = 0;

    // for (let i = inverted.length - 1; i >= 0; i--) {
    //     password += inverted[i];
    // }
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

//10- Pyramid

function createPyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let height = 0;

  let layer = 0;

  while (base > 0) {
    layer++;
    let totalArea = base * base;

    if (base <= 2) {
      // Top layer is made entirely of gold
      gold += totalArea * increment;
      height += increment;
      break;
    }

    // Stone for inner part
    let innerBase = base - 2;
    let innerArea = innerBase * innerBase;
    stone += innerArea * increment;

    // Decorative outer layer
    let outerArea = totalArea - innerArea;
    if (layer % 5 === 0) {
      lapis += outerArea * increment;
    } else {
      marble += outerArea * increment;
    }

    base -= 2;
    height += increment;
  }

  // Output (rounded as per requirements)
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}

//11-Bitcoin Mining
function bitcoinMining(goldMinedPerDay) {
    const goldPricePerGram = 67.51;
    const bitcoinPrice = 11949.16;

    let totalMoney = 0;
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;

    for (let day = 0; day < goldMinedPerDay.length; day++) {
        let goldToday = goldMinedPerDay[day];

        // Every 3rd day, 30% of gold is stolen
        if ((day + 1) % 3 === 0) {
            goldToday *= 0.7;
        }

        totalMoney += goldToday * goldPricePerGram;

        // Try to buy bitcoins while we have enough money
        while (totalMoney >= bitcoinPrice) {
            bitcoinsBought++;
            totalMoney -= bitcoinPrice;
            if (bitcoinsBought === 1) {
                firstBitcoinDay = day + 1; // days are 1-indexed
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}