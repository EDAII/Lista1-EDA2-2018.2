const NS_PER_SEC = 1e9;

function getRandomNumber(minValue = 0, maxValue = 10000000000000) {
    return Math.floor(Math.random() * maxValue) + minValue;
}

function getArrayOfRandomNumbers(arraySize = 10, maxValue = 10000000000000, minValue = 0) {
    let sortedArray = [];

    if (Math.sign(minValue) !== 1) { minValue = 0; }

    if (Math.sign(arraySize) !== 1) { arraySize = 10 }

    if (minValue >= maxValue) { minValue = 0; maxValue = 10000000000000; }

    if (Math.sign(maxValue) !== 1) { maxValue = 10000000000000; }

    if ((maxValue - minValue) < sortedArray) { arraySize = 10; minValue = 0; maxValue = 10000000000000; }

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

    if (minValue < 0.0) { minValue = 0; }

    for (let index = minValue; index < (arraySize + minValue); index++) {
        sortedArray.push(index);
    }
    return sortedArray;
}

function linearSearch(sortedArray, valueToSearch) {
    for (let index = 0; index < sortedArray.length; index++) {
        if (valueToSearch === sortedArray[index]) {
            console.log("linearSearch: O valor " + valueToSearch + " foi encontrado na posição " + index + ".");
            return index;
        }
    }
    console.log("linearSearch: O valor " + valueToSearch + " não foi encontrado.");
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
            console.log("binarySearch: O valor " + valueToSearch + " foi encontrado na posição " + mid + ".");
            return mid;
        }
    }
    console.log("binarySearch: O valor " + valueToSearch + " não foi encontrado.");
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
            console.log("interpolationSearch: O valor " + valueToSearch + " foi encontrado na posição " + position + ".");
            return position;
        }
        if (sortedArray[position] < valueToSearch) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }
    console.log("interpolationSearch: O valor " + valueToSearch + " não foi encontrado.");
    return false;
}

let arrayWith10RandomNumbers = getArrayOfRandomNumbers(10);
let arrayWith100RandomNumbers = getArrayOfRandomNumbers(100);
let arrayWith1KRandomNumbers = getArrayOfRandomNumbers(1000);
let arrayWith10KRandomNumbers = getArrayOfRandomNumbers(10000);

let arrayWith10Numbers = getSortedArray(10);
let arrayWith100Numbers = getSortedArray(100);
let arrayWith1KNumbers = getSortedArray(1000);
let arrayWith10KNumbers = getSortedArray(10000);


const timeLinearSearch10 = process.hrtime();
linearSearch(arrayWith10Numbers, getRandomNumber(0, 1000))
const diffLinearSearch10 = process.hrtime(timeLinearSearch10);
console.log(`linearSearch(arrayWith10Numbers, getRandomNumber(0,1000)): took ${diffLinearSearch10[0] * NS_PER_SEC + diffLinearSearch10[1]} nanoseconds\n`);

const timeLinearSearch100 = process.hrtime();
linearSearch(arrayWith100Numbers, getRandomNumber(0, 1000))
const diffLinearSearch100 = process.hrtime(timeLinearSearch100);
console.log(`linearSearch(arrayWith100Numbers, getRandomNumber(0,1000)): took ${diffLinearSearch100[0] * NS_PER_SEC + diffLinearSearch100[1]} nanoseconds\n`);

const timeLinearSearch1k = process.hrtime();
linearSearch(arrayWith1KNumbers, getRandomNumber(0, 1000))
const diffLinearSearch1k = process.hrtime(timeLinearSearch1k);
console.log(`linearSearch(arrayWith1KNumbers, getRandomNumber(0,1000)): took ${diffLinearSearch1k[0] * NS_PER_SEC + diffLinearSearch1k[1]} nanoseconds\n`);

const timeLinearSearch10k = process.hrtime();
linearSearch(arrayWith10KNumbers, getRandomNumber(0, 1000))
const diffLinearSearch10k = process.hrtime(timeLinearSearch10k);
console.log(`linearSearch(arrayWith10KNumbers, getRandomNumber(0,1000)): took ${diffLinearSearch10k[0] * NS_PER_SEC + diffLinearSearch10k[1]} nanoseconds\n`);


const timeBinarySearch10 = process.hrtime();
binarySearch(arrayWith10Numbers, getRandomNumber(0, 1000))
const diffBinarySearch10 = process.hrtime(timeBinarySearch10);
console.log(`binarySearch(arrayWith10Numbers, getRandomNumber(0,1000)): took ${diffBinarySearch10[0] * NS_PER_SEC + diffBinarySearch10[1]} nanoseconds\n`);

const timeBinarySearch100 = process.hrtime();
binarySearch(arrayWith100Numbers, getRandomNumber(0, 1000))
const diffBinarySearch100 = process.hrtime(timeBinarySearch100);
console.log(`binarySearch(arrayWith100RandomNumber, getRandomNumber(0,1000)): took ${diffBinarySearch100[0] * NS_PER_SEC + diffBinarySearch100[1]} nanoseconds\n`);

const timeBinarySearch1k = process.hrtime();
binarySearch(arrayWith1KNumbers, getRandomNumber(0, 1000))
const diffBinarySearch1k = process.hrtime(timeBinarySearch1k);
console.log(`binarySearch(arrayWith1KNumbers, getRandomNumber(0,1000)): took ${diffBinarySearch1k[0] * NS_PER_SEC + diffBinarySearch1k[1]} nanoseconds\n`);

const timeBinarySearch10k = process.hrtime();
binarySearch(arrayWith10KNumbers, getRandomNumber(0, 1000))
const diffBinarySearch10k = process.hrtime(timeBinarySearch10k);
console.log(`binarySearch(arrayWith10KNumbers, getRandomNumber(0,1000)): took ${diffBinarySearch10k[0] * NS_PER_SEC + diffBinarySearch10k[1]} nanoseconds\n`);


const timeInterpolationSearch10 = process.hrtime();
interpolationSearch(arrayWith10Numbers, getRandomNumber(0, 1000))
const diffInterpolationSearch10 = process.hrtime(timeInterpolationSearch10);
console.log(`interpolationSearch(arrayWith10Numbers, getRandomNumber(0,1000)): took ${diffInterpolationSearch10[0] * NS_PER_SEC + diffInterpolationSearch10[1]} nanoseconds\n`);

const timeInterpolationSearch100 = process.hrtime();
interpolationSearch(arrayWith100Numbers, getRandomNumber(0, 1000))
const diffInterpolationSearch100 = process.hrtime(timeInterpolationSearch100);
console.log(`interpolationSearch(arrayWith100RandomNumber, getRandomNumber(0,1000)): took ${diffInterpolationSearch100[0] * NS_PER_SEC + diffInterpolationSearch100[1]} nanoseconds\n`);

const timeInterpolationSearch1k = process.hrtime();
interpolationSearch(arrayWith1KNumbers, getRandomNumber(0, 1000))
const diffInterpolationSearch1k = process.hrtime(timeInterpolationSearch1k);
console.log(`interpolationSearch(arrayWith1KNumbers, getRandomNumber(0,1000)): took ${diffInterpolationSearch1k[0] * NS_PER_SEC + diffInterpolationSearch1k[1]} nanoseconds\n`);

const timeInterpolationSearch10k = process.hrtime();
interpolationSearch(arrayWith10KNumbers, getRandomNumber(0, 1000))
const diffInterpolationSearch10k = process.hrtime(timeInterpolationSearch10k);
console.log(`interpolationSearch(arrayWith10KNumbers, getRandomNumber(0,1000)): took ${diffInterpolationSearch10k[0] * NS_PER_SEC + diffInterpolationSearch10k[1]} nanoseconds\n`);