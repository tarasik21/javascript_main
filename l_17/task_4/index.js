/* ===> 1 <=== */
const student = {
    name: 'Tom',
  };
  
  export function sayName() {
    console.log(this.name);
  }
  
  // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
  // ... your code here
  sayName.call(student);
  
  // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
  // ... your code here
  const student2 = {
    name: 'Bruce',
  };
  sayName.call(student2);
  
  /* ===> 2 <=== */
  const company = {
    companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

// Данные о пользователе
const firstName = 'Bob'; // Имя пользователя
const lastName = 'Marley'; // Фамилия пользователя

// Вызов функции greeting с использованием объекта company
greeting.call(company, firstName, lastName);

/* ===> 3 <=== */
const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv',
    population: 43000,
};

function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
}


const result = getPopulation.call(country, country.population);


console.log(result);

  
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
  transaction.printTransaction.call(anotherTransaction);