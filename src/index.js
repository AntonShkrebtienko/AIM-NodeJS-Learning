'use strict'
//
const Departament = require('./classes/departament.js');
const data = require('./data/data.js');

const ParseData = JSON.parse(data).map(dep => Object.assign(new Departament, dep));

console.log(ParseData[0]);
console.log("Average salary: " + ParseData[0].averageSalary());
console.log("Total salary: " + ParseData[0].allSalaries());
console.log("below average salary: ");
console.log(ParseData[0].minimumWageWorkers());
console.log(ParseData[0].getWorkerInfo('Dev Simmonds'));

// console.log(ParseData[2]);
// console.log("Average salary: " + ParseData[2].averSall());
// console.log("Total salary: " + ParseData[2].totalSalary());
// console.log("below average salary: ");
// console.log(ParseData[2].belowAverSalary());
// console.log(ParseData[2].getWorkerInfo('worker2'));
