interface Property<T> {
  count: Function
}


class OddProperty implements Property<number>{

  count(num: number) {
    return num % 2 === 0;
  }
}

class PrimeProperty implements Property<number>{

  count(num: number) {

    if (
      num % 2 !== 0 &&
      num % 3 !== 0 &&
      num % 5 !== 0 &&
      num % 7 !== 0) {
      return false;
    }
    return true;
  }

}

class PalindromeProperty implements Property<string | number>{

  count(num: string | number) {
    if (typeof num === 'number') {
      return num as number === this.reveseNumber(num);
    }
    if (typeof num === 'string') {
      const reversedString = num.split('').reverse().join();
      return num.split('').join() === reversedString
    }
    return true;
  }

  private reveseNumber(num: number): number {
    let reversed: number = 0;
    let numToReverse: number = num as number;
    while (numToReverse > 0) {
      const right: number = numToReverse % 10;
      numToReverse = Math.floor(numToReverse / 10);
      reversed = (10 * reversed) + right;
    }
    return reversed;
  }
}

class Person {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

class PersonId extends PalindromeProperty implements PalindromeProperty {
  count(num: string | number): boolean {
    throw new Error("Method not implemented.");
  }

}

function elementCount<T>(arr: Array<T>, prop: Property<T>) {
  let count = 0;
  arr.forEach(item => {
    if (prop.count(item)) {
      count++;
    }
  })
  console.log(count);
}

elementCount([1, 2, 3, 4], new OddProperty);
elementCount([121, 222, 332, 124], new PalindromeProperty);
elementCount(['121', '222', '332', '124'], new PalindromeProperty);
elementCount([1, 2, 3, 4], new PrimeProperty);
