# Beispiel-Anwendung

[] Klasse
[] Klasse mit Vererbung
[] Klasse mit getter-Funktion
[] Template-String
[] Object Shorthand
[] Destructuring (Array oder Object)
[] Arrow Funktion
[] Module

[] async

# Ideen

- Company hat Liste von Employees. Employee ist eine Person
- Company hat Funktion zum Hinzufügen eines Employees (mehrerer)?
- Company get-Funktion soll Liste der Employees nur als Kopie zurückgeben
  (oder beim Hinzufügen kopieren, kann man mit Teilnehmern diskutieren, was besser ist)
- Setzen der Employees soll nicht möglich sein

* Greeter, der Personen grüßt.

* Grussvalidator

class Greeting {

static createGreetings(phrase, ...name) {

}

static factoryFunction(phrase, name) {
return new Greeting(phrase, name)
}

constructor(phrase, name) {
...
}

greet() {
return `${this.phrase} ${this.name}`
}

}
