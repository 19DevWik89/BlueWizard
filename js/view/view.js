export default class View {
  constructor(name,w,h) {
    this.layerName = name;
    this.element = document.createElement("canvas");
    this.context = this.element.getContext('2d');
    this.element.width = w;
    this.element.height = h;
    this.element.style.position = 'absolute';
    View.layers[this.layerName] = this;
  }
  static layers = {};

  get ctx() {
    return this.context;
  }
  get width(){
    return this.element.width;
  }
  set width(w){
    this.element.width = w;
  }
  get height(){
    return this.element.height;
  }
  set height(h){
    this.element.height = h;
  }

  pushToDom() {
    document.body.appendChild(this.element);
    console.log(`New View ${this.name} has been pushed to the DOM`);
  }

}