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

console.log('||||||--------EJERCICIO 2: Algoritmos II--------||||||');


console.log('-------EJERCICIO a-------');

const data = {
    "Key1": [1,4,5],
    "Key2": [4,10,3],
    "Key3": [8,2,6]
}

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

const keysOrdered = (data) => {
    let keys = Object.keys(data);
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        data[key].sort((a, b) => a - b);
    }
    return data;
}

console.log('Los elementos ordenados dentro de cada key:');
console.log(keysOrdered(data));

console.log('-------EJERCICIO c-------');

// const calcWeight = (data) => {
//     let keys = Object.keys(data);
//     // let arrayWeightKeys = [];
//     let weight = 0;
//     for (let i=0; i < keys.length; i++) {
//         let key = keys[i];
//         keyWeight = data[key].reduce((a, b) => a + b);
//         if (keyWeight > weight) {
//             weight = keyWeight;
//         }

//         }
//         //arrayWeightKeys.push(keyWeight);
//     }

// console.log(calcWeight(data));

console.log('-------EJERCICIO d-------');

const dataReset = {
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

console.log(keyValuesEven(dataReset));

console.log('||||||--------EJERCICIO 3: Modelado--------||||||');

const dataCars = [
    {
    "marca": "Ford Focus",
    "patente": "XDU 667",
    "modelo": 2015,
    "precio": 2900000,
    "seguro": true,
    },
    {
    "marca": "Citroen DS3",
    "patente": "LIW 460",
    "modelo": 2012,
    "precio": 2600000,
    "seguro": true,
    },
    {
    "marca": "Chevrolet Cruze",
    "patente": "XHT 356",
    "modelo": 2015,
    "precio": 3100000,
    "seguro": true,
    },
    {
    "marca": "Volkswagen Gol Trend",
    "patente": "KFT 222",
    "modelo": "2011",
    "precio": 1500000,
    "seguro": true,
    },
    {
    "marca": "Renault 4L",
    "patente": "DSW 388",
    "modelo": 1968,
    "precio": 320000,
    "seguro": false,
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
        if (data[key].precio > moreExpensive) {
            moreExpensive = data[key].precio;
            brand = data[key].marca;
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
        if (data[key].modelo < older) {
            older = data[key].modelo;
            brand = data[key].marca;
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
        if (data[key].patente.charAt(0) === 'X') {
            brand.push(data[key].marca);
            licensePlateX.push(data[key].patente);
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
        if (data[key].precio > price) {
            brand.push(data[key].marca);
            priceCars.push(data[key].precio);
        }
    }
    return `El/los auto/s: ${brand}, superan el precio indicado con valor/es de $${priceCars} respectivamente`;
}

let priceVar = 2000000;
console.log(`Autos que superen los $${priceVar}`);
console.log(minPrice(dataCars, priceVar));

console.log('-------EJERCICIO e-------');

const carInsurance = (data) => {
    let keys = Object.keys(data);
    let brand = [];
    for (let i=0; i < keys.length; i++) {
        let key = keys[i];
        if (data[key].seguro) {
            brand.push(data[key].marca);
        }
    }
    return `Solo el/los auto/s: ${brand} poseen seguro`;
}

console.log(carInsurance(dataCars));