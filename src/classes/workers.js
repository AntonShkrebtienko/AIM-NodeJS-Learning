module.exports = class Workers {
    constructor(name, salary) {
        if(/^[a-zA-Z0-9_ ]+\S$/g.test(name))this.name = name;
        else throw new Error('Wrong type of name field');

        if(/^(0|[1-9]\d*)(\.\d+)?$/g.test(salary)) this.salary = salary;
        else throw new Error('Wrong type of salary field');
    }
}