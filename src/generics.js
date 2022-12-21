"use strict";
class OddProperty {
    count(num) {
        return num % 2 === 0;
    }
}
class PrimeProperty {
    count(num) {
        if (num % 2 !== 0 &&
            num % 3 !== 0 &&
            num % 5 !== 0 &&
            num % 7 !== 0) {
            return false;
        }
        return true;
    }
}
class PalindromeProperty {
    count(num) {
        if (typeof num === 'number') {
            return num === this.reveseNumber(num);
        }
        if (typeof num === 'string') {
            const reversedString = num.split('').reverse().join();
            return num.split('').join() === reversedString;
        }
        return true;
    }
    reveseNumber(num) {
        let reversed = 0;
        let numToReverse = num;
        while (numToReverse > 0) {
            const right = numToReverse % 10;
            numToReverse = Math.floor(numToReverse / 10);
            reversed = (10 * reversed) + right;
        }
        return reversed;
    }
}
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class PersonId extends PalindromeProperty {
    count(num) {
        throw new Error("Method not implemented.");
    }
}
function elementCount(arr, prop) {
    let count = 0;
    arr.forEach(item => {
        if (prop.count(item)) {
            count++;
        }
    });
    console.log(count);
}
elementCount([1, 2, 3, 4], new OddProperty);
elementCount([121, 222, 332, 124], new PalindromeProperty);
elementCount(['121', '222', '332', '124'], new PalindromeProperty);
elementCount([1, 2, 3, 4], new PrimeProperty);
