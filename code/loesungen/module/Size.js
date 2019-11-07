export default class Size {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  toString() {
    return `Size: width: ${this._width}, height: ${this._height}`;
  }
}
