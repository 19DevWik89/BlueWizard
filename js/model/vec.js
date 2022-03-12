export default class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = null;
    this.ay = null;
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  add(v2) {
    return new Vec2(this.x += v2.x, this.y += v2.y);
  }
  subtract(v2) {
    return new Vec2(v2.x - this.x, v2.y - this.y);
  }
  divideScalar(s) {
    return new Vec2(this.x / s, this.y / s);
  }
  distance(v2) {
    v2.subtract(this);
    return Math.sqrt(v2.x * v2.x + v2.y * v2.y);
  }
  dot(v2) {
    let x = this.x * v2.x;
    let y = this.y * v2.y;
    return x + y;
  }
  magnitude() {
    let x = Math.pow(this.x, 2);
    let y = Math.pow(this.y, 2);
    return Math.sqrt(x + y);
  }
  angleTo(v2) {
    v2.subtract(this);
    return v2.angle;
  }
  normalize() {
    return this.divideScalar(this.magnitude());
  }


}