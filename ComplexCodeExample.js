/*
 * Filename: ComplexCodeExample.js
 * Content: Complex code example that demonstrates various advanced concepts and functionality.
 * Author: AI Assistant
 */

// Code starts here

// Import required modules
const fs = require('fs');
const moment = require('moment');
const https = require('https');

// Class representing a complex object
class ComplexObject {
  constructor(name, age, properties = {}) {
    this.name = name;
    this.age = age;
    this.properties = properties;
  }

  // Method to get the full name of the object
  getFullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  // Method to log object details
  logDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log('Properties:');
    console.log(this.properties);
  }
}

// Function to perform complex calculations
function complexCalculation(num1, num2) {
  let result = num1 ** num2;
  result = Math.sqrt(result);
  result = Math.floor(result);
  return result;
}

// Generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Generate an array of prime numbers within a range
function generatePrimeNumbers(start, end) {
  const primeNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

// Function to read a file asynchronously
async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Function to make an HTTP request and return the response asynchronously
async function makeHttpRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Data manipulation example
const today = moment().format('YYYY-MM-DD');
const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');

// Complex object instantiation
const complexObj = new ComplexObject(
  { first: 'John', last: 'Doe' },
  30,
  { email: 'john.doe@example.com', country: 'USA' }
);

// Perform complex calculations
const result = complexCalculation(5, 3);

// Generate prime numbers and log to console
const primeNumbers = generatePrimeNumbers(1, 100);
console.log('Prime Numbers:');
console.log(primeNumbers);

// Read a file asynchronously and log contents to console
readFileAsync('example.txt')
  .then((data) => {
    console.log('File Contents:');
    console.log(data);
  })
  .catch((err) => {
    console.error('Error reading file:', err);
  });

// Make an HTTP request and log the response
makeHttpRequest('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('HTTP Response:');
    console.log(response);
  })
  .catch((err) => {
    console.error('Error making HTTP request:', err);
  });

// Code ends here