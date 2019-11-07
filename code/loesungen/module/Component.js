export default class Component {
  constructor(size) {
    this._size = size;
  }

  addSizeChangeListener(listener) {
    this._sizeChangeListener = listener;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
    if (this._sizeChangeListener) {
      this._sizeChangeListener(newSize);
    }
  }

  render() {
    return `Component, size: ${this._size}`;
  }
}
