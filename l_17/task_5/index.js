/* ===> 1 <=== */
const student = {
    name: 'Tom',
};

function sayName() {
    console.log(this.name);
}

// Вызов функции для объекта student с помощью apply
sayName.apply(student); // Вывод: Tom

// Вызов функции для другого объекта
const anotherStudent = {
    name: 'Bruce',
};

sayName.apply(anotherStudent); // Вывод: Bruce

  
  /* ===> 2 <=== */
  const company = {
    companyName: 'Microsoft',
  };
  
  function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
  }
  greeting.apply(company, firstName, lastName);
  // вызовите ф-цию greeting так, чтобы в консоль вывелось
  // 'Hello, Bob Marley. Welcome to the Microsoft'
  // используйте объект company
  // ... your code here
  
  /* ===> 3 <=== */
  const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv',
  };
  
  function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
  }
  const result = getPopulation.apply(country, country.population);


  console.log(result);
  // вызовите ф-цию getPopulation так, чтобы она вернула
  // 'Population in Ukraine is 43000'
  // 43000 передавайте в виде числа
  // используйте объект country
  // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
  // ... your code here
  
  /* ===> 4 <=== */
  const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
      console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    },
  };
  
  const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
  };
  
  // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
  // '400 USD - buy on NASDAQ'
  // используйте объект anotherTransaction как контекст
  // ... your code here
  transaction.printTransaction.apply(anotherTransaction);