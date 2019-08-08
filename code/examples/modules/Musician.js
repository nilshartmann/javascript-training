import Person from "./Person.js";

export default class Musician extends Person {
  constructor(name, instrument) {
    super(name);
    this._instrument = instrument;
  }

  toString() {
    return super.toString() + " plays " + this._instrument;
  }
}
