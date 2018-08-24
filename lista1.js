function getRandomNumber(minValue = 0, maxValue = 10000000000000) {
    return Math.floor(Math.random() * maxValue) + minValue;
}

function getArrayOfRandomNumbers(arraySize = 10, maxValue = 10000000000000, minValue = 0) {
    let sortedArray = [];

    if (Math.sign(minValue) !== 1) {
        //erroo bllablla
        minValue = 0;
    }

    if (Math.sign(arraySize) !== 1) {
        //erroo bllablla
        arraySize = 10
    }

    if (minValue >= maxValue) {
        //error bla bla
        minValue = 0;
        maxValue = 10000000000000;
    }

    if (Math.sign(maxValue) !== 1) {
        //erroo bllablla
        maxValue = 10000000000000;
    }

    if ((maxValue - minValue) < sortedArray) {
        //erroo bla bllla
        arraySize = 10
        minValue = 0;
        maxValue = 10000000000000;
    }

    while (sortedArray.length < arraySize) {
        const randomNumber = getRandomNumber(minValue, maxValue);
        if (sortedArray.indexOf(randomNumber) === -1) {
            sortedArray.push(randomNumber);
        }
    }
    return sortedArray;

}

function getSortedArray(arraySize = 10, minValue = 0) {
    let sortedArray = [];
    if (minValue < 0.0) {
        //erroo bllablla
        minValue = 0;
    }
    for (let index = minValue; index < (arraySize + minValue); index++) {
        sortedArray.push(index);
    }
    return sortedArray;
}

function linearSearch(sortedArray, valueToSearch) {
    for (let index = 0; index < sortedArray.length; index++) {
        if (valueToSearch === sortedArray[index]) {
            console.log("linearSearch: O " + valueToSearch + " foi encontrado na posição " + index + ".");
            return index;
        }
    }
    console.log("linearSearch: O " + valueToSearch + " não foi encontrado.");
    return false;
}

function binarySearch(sortedArray, valueToSearch) {
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const valueToSearch = sortedArray[mid];
        if (valueToSearch < valueToSearch) {
            low = mid + 1;
        } else if (valueToSearch < valueToSearch) {
            high = mid - 1;
        } else {
            console.log("binarySearch: O " + valueToSearch + " foi encontrado na posição " + mid + ".");

            return mid;
        }
    }
    console.log("binarySearch: O " + valueToSearch + " não foi encontrado.");

    return false;
}

function interpolationSearch(sortedArray, valueToSearch) {
    let low = 0;
    let high = sortedArray.length - 1;
    let position = -1;
    let delta = -1;
    while (low <= high && sortedArray[low] <= valueToSearch && valueToSearch <= sortedArray[high]) {
        delta = (valueToSearch - sortedArray[low]) / (sortedArray[high] - sortedArray[low]);
        position = low + Math.floor((high - low) * delta);
        if (sortedArray[position] === valueToSearch) {
            console.log("interpolationSearch: O " + valueToSearch + " foi encontrado na posição " + position + ".");

            return position;
        }
        if (sortedArray[position] < valueToSearch) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }
    console.log("interpolationSearch: O " + valueToSearch + " não foi encontrado.");

    return false;
}

let arrayWith1RandomNumber = getArrayOfRandomNumbers(1);
console.log(arrayWith1RandomNumber);

let arrayWith10RandomNumbers = getArrayOfRandomNumbers(10);
console.log(arrayWith10RandomNumbers);

let arrayWith100RandomNumbers = getArrayOfRandomNumbers(100);
console.log(arrayWith100RandomNumbers);

let arrayWith1KRandomNumbers = getArrayOfRandomNumbers(1000);
console.log(arrayWith1KRandomNumbers);

let arrayWith10KRandomNumbers = getArrayOfRandomNumbers(10000);
console.log(arrayWith10KRandomNumbers);

let arrayWith1Number = getSortedArray(1);
console.log(arrayWith1Number);

let arrayWith10Numbers = getSortedArray(10);
console.log(arrayWith10Numbers);

let arrayWith100Numbers = getSortedArray(100);
console.log(arrayWith100Numbers);

let arrayWith1KNumbers = getSortedArray(1000);
console.log(arrayWith1KNumbers);

let arrayWith10KNumbers = getSortedArray(10000);
console.log(arrayWith10KNumbers);


linearSearch(arrayWith10RandomNumbers, getRandomNumber())
linearSearch(arrayWith100RandomNumbers, getRandomNumber())
linearSearch(arrayWith1KRandomNumbers, getRandomNumber())
linearSearch(arrayWith10KRandomNumbers, getRandomNumber())

binarySearch(arrayWith10RandomNumbers, getRandomNumber())
binarySearch(arrayWith100RandomNumbers, getRandomNumber())
binarySearch(arrayWith1KRandomNumbers, getRandomNumber())
binarySearch(arrayWith10KRandomNumbers, getRandomNumber())

interpolationSearch(arrayWith10RandomNumbers, getRandomNumber())
interpolationSearch(arrayWith100RandomNumbers, getRandomNumber())
interpolationSearch(arrayWith1KRandomNumbers, getRandomNumber())
interpolationSearch(arrayWith10KRandomNumbers, getRandomNumber())
