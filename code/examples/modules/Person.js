export default class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  toString() {
    return "[Person: " + this.name + "]";
  }
}
