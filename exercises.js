console.log('||||||--------EJERCICIO 1: Algoritmos I--------||||||');
const numbers = [1, 10, 6, 8, 15, 2];

console.log(`Dada la siguiente colección de elementos: ${numbers}`);

console.log('-------EJERCICIO 1-------');

console.log('-------EJERCICIO 1.a-------');

const largestNum = (numbers) => {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(`El mayor numero es: ${largestNum(numbers)}`);

console.log('-------EJERCICIO 1.b-------');

const largestNumFunction = (numbers) => {
    let largest = Math.max(...numbers);
    return largest;
}

console.log(`El mayor numero es (con funcion  de javascript): ${largestNumFunction(numbers)}`);

console.log('-------EJERCICIO 2-------');

numbersOrdered = numbers.sort((a, b) => a - b)

console.log(`La colección de elementos ordenada es: ${numbersOrdered}`);

console.log('-------EJERCICIO 2.b-------');

const evenPosition = (numbers) => {
    let positions = [];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            positions.push(i);
        }
    }
    return positions;
}

console.log(`Los numeros pares se encuentran en las posiciones: ${evenPosition(numbers)}`);

console.log('-------EJERCICIO 2.b-------');

const numbersEven = (numbers) => {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

console.log(`Los numeros pares son: ${numbersEven(numbers)}`);

console.log('');
console.log('');
console.log('||||||--------EJERCICIO 2: Algoritmos II--------||||||');

const data = {
    "Key1": [1,4,5],
    "Key2": [4,10,3],
    "Key3": [8,2,6]
}

console.log('Dada la siguiente colección de datos:');
console.log(data);

console.log('-------EJERCICIO a-------');

const numberLargest = (data) => {
    let keys = Object.keys(data);
    let arrayLargestKeys = [];
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        let largest = largestNum(data[key]);
        arrayLargestKeys.push(largest);
    }
    let largest = largestNum(arrayLargestKeys);
    return `El mayor numero es ${largest} y se encuentra en ${keys[arrayLargestKeys.indexOf(largest)]}`;
}

console.log(numberLargest(data));

console.log('-------EJERCICIO b-------');

const dataReset = {
    "Key1": [1,4,5],
    "Key2": [4,10,3],
    "Key3": [8,2,6]
}

const keysOrdered = (data) => {
    let keys = Object.keys(data);
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        data[key].sort((a, b) => a - b);
    }
    return data;
}

console.log('Los elementos ordenados dentro de cada key:');
console.log(keysOrdered(dataReset));

console.log('-------EJERCICIO c-------');

const dataReset2 = {
    "Key1": [1,4,5],
    "Key2": [4,10,3],
    "Key3": [8,2,6]
}



const orderForWeight = (data) => {
    let keys = Object.keys(data);
    let arrayKeysWeight = [];
    let weight = 0;
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        let object = {};
        weight = data[key].reduce((a, b) => a + b);
        object.key = key;
        object.weight = weight;
        arrayKeysWeight.push(object);
    }
    let arrayKeyWeightOrdered = arrayKeysWeight.sort((a, b) => a.weight - b.weight);
    return arrayKeyWeightOrdered;
}

console.log('Keys ordenadas de menor a mayor segun el peso de cada una:');
console.log(orderForWeight(dataReset2));

console.log('-------EJERCICIO d-------');

const dataReset3 = {
    "Key1": [1,4,5],
    "Key2": [4,10,3],
    "Key3": [8,2,6]
}

const deleteRepeated = (array) => {
    const noRepeat = [];
    for(var i = 0; i < array.length; i++) {
      const item = array[i];
      if (!noRepeat.includes(array[i])) {
        noRepeat.push(item);
      }
    }
    return noRepeat;
}

const keyValuesEven = (data) => {
    let keys = Object.keys(data);
    let arrayEvenKeys = [];
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        let evenNumbers = numbersEven(data[key]);
        arrayEvenKeys.push(...evenNumbers);
    }
    let noRepArrayEvenKeys = deleteRepeated(arrayEvenKeys);
    data.Key4 = noRepArrayEvenKeys;
    return data;
}

console.log('La colección de datos con los valores pares de cada key (Key4):');
console.log(keyValuesEven(dataReset3));

console.log('');
console.log('');
console.log('||||||--------EJERCICIO 3: Modelado--------||||||');

const dataCars = [
    {
    "brand": "Ford Focus",
    "licensePlate": "XDU 667",
    "model": 2015,
    "price": 2900000,
    "carInsurance": true,
    },
    {
    "brand": "Citroen DS3",
    "licensePlate": "LIW 460",
    "model": 2012,
    "price": 2600000,
    "carInsurance": true,
    },
    {
    "brand": "Chevrolet Cruze",
    "licensePlate": "XHT 356",
    "model": 2015,
    "price": 3100000,
    "carInsurance": true,
    },
    {
    "brand": "Volkswagen Gol Trend",
    "licensePlate": "KFT 222",
    "model": "2011",
    "price": 1500000,
    "carInsurance": true,
    },
    {
    "brand": "Renault 4L",
    "licensePlate": "DSW 388",
    "model": 1968,
    "price": 320000,
    "carInsurance": false,
    }
]

console.log(dataCars);

console.log('-------EJERCICIO a-------');

const moreExpensive = (data) => {
    let keys = Object.keys(data);
    let moreExpensive = 0;
    let brand = '';
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        if (data[key].price > moreExpensive) {
            moreExpensive = data[key].price;
            brand = data[key].brand;
        }
    }
    return `El auto mas caro es un ${brand} con un precio de $${moreExpensive}`;
}

console.log(moreExpensive(dataCars));

console.log('-------EJERCICIO b-------');

const older = (data) => {
    let keys = Object.keys(data);
    let older = 2023;
    let brand = '';
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        if (data[key].model < older) {
            older = data[key].model;
            brand = data[key].brand;
        }
    }
    return `El auto mas viejo es un ${brand} el cual es del año ${older}`;
}

console.log(older(dataCars));

console.log('-------EJERCICIO c-------');

const licensePlateX = (data) => {
    let keys = Object.keys(data);
    let licensePlateX = [];
    let brand = [];
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        if (data[key].licensePlate.charAt(0) === 'X') {
            brand.push(data[key].brand);
            licensePlateX.push(data[key].licensePlate);
        }
    }
    return `El/los auto/s: ${brand}, poseen patente/s que comience con X, patente/s: ${licensePlateX} respectivamente`;
}

console.log(licensePlateX(dataCars));

console.log('-------EJERCICIO d-------');

const minPrice = (data, price) => {
    let keys = Object.keys(data);
    let priceCars = [];
    let brand = [];
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        if (data[key].price > price) {
            brand.push(data[key].brand);
            priceCars.push(data[key].price);
        }
    }
    return `El/los auto/s: ${brand}, superan el precio indicado con valor/es de $${priceCars} respectivamente`;
}

let priceVar = 2000000;
console.log(`Autos que superen los $${priceVar}`);
console.log(minPrice(dataCars, priceVar));

console.log('-------EJERCICIO e-------');

const hasCarInsurance = (data) => {
    let keys = Object.keys(data);
    let brand = [];
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        if (data[key].carInsurance) {
            brand.push(data[key].brand);
        }
    }
    return `El/los auto/s: ${brand} poseen seguro`;
}

console.log(hasCarInsurance(dataCars));