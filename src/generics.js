"use strict";
class oddProperty {
    constructor(genericProp) {
        this.genericProp = genericProp;
    }
    setGeneric(genericProp) {
        this.genericProp = genericProp;
    }
    count() {
        return this.genericProp % 2 === 0;
    }
}
class primeProperty {
    constructor(genericProp) {
        this.genericProp = genericProp;
    }
    setGeneric(genericProp) {
        this.genericProp = genericProp;
    }
    count() {
        if (this.genericProp === 0) {
            return false;
        }
        if (this.genericProp === 1 || this.genericProp === 2) {
            return true;
        }
        for (let i = 2; i < this.genericProp; i++) {
            if (this.genericProp % i === 0) {
                return false;
            }
        }
        return true;
    }
}
class palindromeProprty {
    constructor(genericProp) {
        this.genericProp = genericProp;
    }
    setGeneric(genericProp) {
        this.genericProp = genericProp;
    }
    count() {
        if (typeof this.genericProp === 'number') {
            return this.genericProp === this.reveseNumber();
        }
        if (typeof this.genericProp === 'string') {
            const reversedString = this.genericProp.split('').reverse();
            return this.genericProp.split('') === reversedString;
        }
        return true;
    }
    reveseNumber() {
        let reversed = 0;
        let numToReverse = this.genericProp;
        while (numToReverse > 0) {
            const right = numToReverse % 10;
            numToReverse = Math.floor(numToReverse) / 10;
            reversed = (10 * reversed) + right;
        }
        return reversed;
    }
}
function elementCount(arr, prop) {
    let count = 0;
    arr.forEach(items => {
        prop.setGeneric(items);
        if (prop.count()) {
            count++;
        }
    });
    console.log(count);
}
elementCount([1, 2, 3, 4], new oddProperty(0));
elementCount([121, 222, 332, 124], new palindromeProprty(0));
elementCount(['121', '222', '332', '124'], new palindromeProprty(''));
elementCount([1, 2, 3, 4], new primeProperty(0));
