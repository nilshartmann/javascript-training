class Company {
  constructor() {
    this._employees = [];
  }

  addEmployee(firstname, lastname) {
    this._employees = [...this._employees, { firstname, lastname }];
  }

  get employees() {
    return this._employees;
  }
}

// SCHRITT 1: Destrukturierung
//

//
const persons = [
  { firstname: "Klaus", lastname: "Müller" },
  { firstname: "Susi", lastname: "Meier" },
  { firstname: "Sabie", lastname: "Hansen" }
];

// Schreibe eine Funktion, die ein Objekt entgegennimmt,
// das über die Properties firstname und lastname verfügt
// - Gib einen Gruß aus auf der Konsole aus
// - Arbeite mit Destructuring

function greeter({ firstname, lastname }) {
  console.log("...");
}

function greetAll() {
  // Benutze die 'forEach'-Funktion auf einem Array, um
  // für alle Personen
}
