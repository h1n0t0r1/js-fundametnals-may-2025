// 01- Sum and sumbstract

function sumSubstract(arr){
    let resultArray = [];
    let originalSum = 0;
    let finalSum = 0;
    for (let i = 0; i < arr.length; i++){
        let currentNumber = arr[i];
        if (currentNumber % 2 === 0){
            resultArray.push(currentNumber + i);
        } else{
            resultArray.push(currentNumber - i);
        }
        originalSum += currentNumber;
        finalSum += resultArray[i];
    }
    console.log(resultArray);
    console.log(originalSum);
    console.log(finalSum);
}

// 02-Common elements
function findElements(firstArr, secondArr){
    for (let firstArrElement of firstArr){
        for (let secondArrayElement of secondArr){
            if (firstArrElement === secondArrayElement) {
                console.log(firstArrElement);
            }
        }
    }
}

// 03- Merger Arrays

function mergeArrays(firstArray, secondArray){
   let resultArray = [];
   for (let i = 0; i < firstArray.length; i++){
    if (i % 2 ===0){
        let firstNumber = Number(firstArray[i]);
        let secondNumber = Number(secondArray[i]);
        resultArray.push(firstNumber + secondNumber);
    } else {
        let firstString = firstArray[i];
        let secondString = secondArray[i];
        resultArray.push(firstString + secondString);
    }
   }
   console.log(resultArray.join(' - '));

}

// 04 - Rotate 
function rotate(arr, rotations){
    let len = arr.length;
    let result = [];
    // Calculate rotations in case rotations is more than array length
    let r = rotations % len;

    // push back elements
    for (let i = r; i < len; i++){
        result.push(arr[i]);
    }

    //push front elements
    for (let i = 0; i < r; i++){
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

// 05 - Max Number
function findMaxNumber(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let isBigger = true;
        let left = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            let rigth = arr[j];
            if (rigth >= left){
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result.push(left);
        }
    }
    console.log(result.join(' '));
}

// 06 - Equal Sums
function findEqualSums(arr){
   let totalSum = 0;

   // Find sum of all elements
   for (let i = 0; i < arr.length; i++){
    totalSum += arr[i];
   }

   let leftSum = 0;

   for (let i = 0; i < arr.length; i++){
    // Calculate right sum. right sum is sumOfAllElelemts - leftSum - currentElementValue
    let rightSum = totalSum - leftSum - arr[i];
    if (leftSum === rightSum){
        console.log(i);
        return;
    }
    // Calculate left sum
    leftSum += arr[i];
   }

   console.log('no');
}

// 07- Max sequense of equal elements
function findMaxSequence(arr){
    let maxLength = 1;
    let maxStartIndex = 0;

    let currentLength = 1;
    let currentIndex = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i - 1]){
            currentLength ++;
        } else{
            currentLength = 1;
            currentIndex = i;
        }
        if (currentLength > maxLength){
            maxLength = currentLength;
            maxStartIndex = currentIndex;
        }
    }
    let result = [];
    for (let i = maxStartIndex; i < maxStartIndex + maxLength; i++){
        result.push(arr[maxStartIndex]);
    }
    console.log(result.join(' '));
}

//08 - Magic Sum
function findMagicSum(arr, num){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let left = arr[i];
            let right = arr[j];
            let sum = left + right;
            if(sum === num){
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

// 09- Dungeonest Dark
function solve(str){
    let rooms = str.split('|');
    let health = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i ++){
        //let roomValues = rooms[i].split(' ');
        //let command = roomValues[0];
        //let value = Number(roomValues[1]);
        let [command, valuesStr] = rooms[i].split(' ');
        let value = Number(valuesStr);
        if (command === 'potion'){
            let healed = Math.min(100 - health, value);
            health += healed;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }    
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`)
}

// 10 - Ladybugs

function ladybug(input) {
  let fieldSize = Number(input[0]);
  let initialPositions = input[1].split(' ').map(Number);
  let commands = input.slice(2);

  // Initialize field
  let field = Array(fieldSize).fill(0);

  // Place initial ladybugs
  for (let index of initialPositions) {
    if (index >= 0 && index < fieldSize) {
      field[index] = 1;
    }
  }

  for (let command of commands) {
    let [startIndexStr, direction, flyLengthStr] = command.split(' ');
    let startIndex = Number(startIndexStr);
    let flyLength = Number(flyLengthStr);

    if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] !== 1) {
      continue; // No ladybug at the position or out of bounds
    }

    field[startIndex] = 0; // Ladybug leaves current position

    // Normalize direction in case of negative fly length
    if (flyLength < 0) {
      flyLength = Math.abs(flyLength);
      direction = direction === 'right' ? 'left' : 'right';
    }

    let position = startIndex;
    while (true) {
      position += direction === 'right' ? flyLength : -flyLength;

      if (position < 0 || position >= fieldSize) {
        break; // Ladybug flies away
      }
      
      if (field[position] === 0) {
        field[position] = 1; // Ladybug lands
        break;
      }
    }
  }
  console.log(field.join(' '));
}