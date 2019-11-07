import Component from "./Component.js";

export class Button extends Component {
  constructor(size, label) {
    super(size);
    this._label = label;
  }

  render() {
    return `Button, size: ${this.size} with label ${this._label}`;
  }
}

export class InputField extends Component {
  static textField(size) {
    return new InputField(size, "text");
  }

  static passwordField(size) {
    return new InputField(size, "password");
  }

  constructor(size, type) {
    super(size);
    this._type = type;
  }

  render() {
    return `InputField, size: ${this.size} with type ${this._type}`;
  }
}
