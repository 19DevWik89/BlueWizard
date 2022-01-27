//**
/* @class Vec
/* @param{Number,Number} - x,y
/* Used to control movement in a physical world
*/
export default class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  add(v) {
    return new Vec(this.x + v.x, this.y + v.y)
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  angleBetween(v2) {
    let x1 = this.x;
    let x2 = v2.x;
    let y1 = this.y;
    let y2 = v2.y;
    let l1 = this.length();
    let l2 = v2.length();
    return (x1 * x2) + (y1 * y2) / (l1 * l2);
  }
  dotProduct(v2) {
    return this.x * v2.x + this.y * v2.y;
  }
  normalize() {
    let l = this.length();
    return new Vec(this.x / l, this.y / l);
  }
  addScaled(v, s) {
    this.x += v * s;
    this.y += v * s;
  }
  multiply(v) {
    this.x *= v;
    this.y *= v;
  }
  static angleBetween(v1, v2) {
    return Math.acos(v1.dotProduct(v2) / v1.length() * v2.length())
  }
}