module.exports = class Department {
    constructor(name, workers = []) {
        if(/^[a-zA-Z0-9_ ]+\S$/g.test(name))this.name = name;
        else throw new Error('Wrong type of name field');

        if(Array.isArray(workers)) this.workers = workers;
        else throw new Error('Wrong type of second arg');

    }

    averageSalary() {
        const arr = this.workers;
        const sum = arr.reduce((t, key) => t + key.salary, 0);
        return (sum / arr.length) || 0;
    }

    allSalaries() {
        const arr = this.workers;
        return arr.reduce((t, key) => t + key.salary, 0);
    }

    minimumWageWorkers() {
        const arr = this.workers;
        const avarageSalary = this.averageSalary();
        return arr.filter(worker => worker.salary < avarageSalary)
    }

    getWorkerInfo(exactWorker) {
        const arr = this.workers;
        const averageSalary = this.averageSalary();
        const worker = arr.find(worker => worker.name === exactWorker)
        let diff = 0;
        if (worker) {
             diff = Math.abs(averageSalary - worker.salary)
        } else return 'There are no workers at this department'
        return {
            'name of Department': this.name,
            'name of Worker': worker.name,
            'difference between worker salary and average salary': diff
        }
    }

}