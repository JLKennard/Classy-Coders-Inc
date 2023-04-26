class Employees {
  #salary;
  #isHired;
  static #allEmployees = [];
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command === "fire") {
      this.#isHired = false;
    }
  }
  static getEmployees() {
    return this.#allEmployees;
  }
  static getTotalPayroll() {
    let total = 0;
    for (let i = 0; i < this.#allEmployees.length; i++) {
      total += this.#allEmployees[i].#salary;
    }
    return total;
  }
}

module.exports = {
  Employees,
};
