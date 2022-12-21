interface Propery<T> {
  genericProp: T,
  setGeneric: Function,
  count: Function
}



class oddProperty implements Propery<number>{
  genericProp: number;
  constructor(genericProp: number) {
    this.genericProp = genericProp;
  }

  setGeneric(genericProp: number) {
    this.genericProp = genericProp
  }

  count() {
    return this.genericProp % 2 === 0;
  }
}

class primeProperty implements Propery<number>{
  genericProp: number;
  constructor(genericProp: number) {
    this.genericProp = genericProp;
  }

  setGeneric(genericProp: number) {
    this.genericProp = genericProp
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

class palindromeProprty implements Propery<string | number>{
  genericProp: string | number;
  constructor(genericProp: string | number) {
    this.genericProp = genericProp;
  }
  setGeneric(genericProp: string | number) {
    this.genericProp = genericProp
  }

  count() {
    if (typeof this.genericProp === 'number') {
      return this.genericProp as number === this.reveseNumber();
    }
    if (typeof this.genericProp === 'string') {
      const reversedString = this.genericProp.split('').reverse();
      return this.genericProp.split('') === reversedString
    }
    return true;
  }

  private reveseNumber(): number {
    let reversed: number = 0;
    let numToReverse: number = this.genericProp as number;
    while (numToReverse > 0) {
      const right = numToReverse % 10;
      numToReverse = Math.floor(numToReverse) / 10;
      reversed = (10 * reversed) + right;
    }
    return reversed;
  }
}


function elementCount<T>(arr: Array<T>, prop: Propery<T>) {
  let count = 0;
  arr.forEach(items => {
    prop.setGeneric(items);
    if (prop.count()) {
      count++;
    }
  })
  console.log(count);
}

elementCount([1, 2, 3, 4], new oddProperty(0));
elementCount([121, 222, 332, 124], new palindromeProprty(0));
elementCount(['121', '222', '332', '124'], new palindromeProprty(''));
elementCount([1, 2, 3, 4], new primeProperty(0))
