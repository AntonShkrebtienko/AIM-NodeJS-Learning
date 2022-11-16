'use strict'

const Department = require('./../classes/departament.js');
const Worker = require('./../classes/workers.js');

const salesDepartment = new Department("Sales",[
    new Worker("Nur Wu",2000),
    new Worker("Dev Simmonds",6000),
    new Worker("Chardonnay Rubio",1000)
]);

const marketingDepartment = new Department("Marketing",[
    new Worker('Gabriella Conroy',5000),
    new Worker("Alexander Ratcliffe",10000),
    new Worker("Diesel Arnold",5000),
    new Worker("Joss Nieves",10000),
    new Worker("Abdirahman Potts",5000),
    new Worker('Jorden Rojas', 1500)
]);

const odinEsDepartment = new Department("1C dev department");

const data = [salesDepartment,marketingDepartment,odinEsDepartment];

// console.log(marketingDepartment.workers[0]);

const Data = JSON.stringify(data);

module.exports = Data;
