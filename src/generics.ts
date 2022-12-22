interface Property<T> {
  count: Function;
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


class PalindromeProperty implements Property<string | number | Person>{

  count(num: string | number | object) {

    if (typeof num === 'number') {
      return num as number === this.reveseNumber(num);
    }
    if (typeof num === 'string') {
      const reversedString = num.split('').reverse().join();
      return num.split('').join() === reversedString
    }
    return false;
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

class PersonId extends PalindromeProperty implements Property<Person>{

  count(person: Person) {
    return super.count(person.id);
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

const person1 = new Person('avi1', 123123);
const person2 = new Person('avi2', 123321);
const person3 = new Person('avi3', 12321);
const person4 = new Person('avi4', 122);

elementCount([person1, person2, person3, person4], new PersonId);


