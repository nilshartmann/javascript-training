export default class Application {
  constructor() {
    this._components = [];
  }

  onSizeChange(e) {
    console.log(
      `Size changed to: ${e}, number of components: ${this._components.length}`
    );
  }

  addComponents(...components) {
    components.forEach(c => c.addSizeChangeListener(e => this.onSizeChange(e)));
    this._components.push(...components);
  }

  render() {
    this._components.forEach(c => console.log(c.render()));
  }
}
