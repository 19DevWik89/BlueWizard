import Vec from "./vec.js"
import Force from "./force.js"
import Sprite from "./sprite.js"
import log from "../utils/log.js";

//poor class name
export default class Renderable extends Vec {

  static newTile(x, y, c) {
    let t = {
      x: x,
      y: y,
      size: 32,
      color: c
    }
    return t;
  };
  constructor(x, y, w, h) {
    super(x, y)
    this.width = w;
    this.height = h;
    this.origin = new Vec(this.x - this.width / 2, this.y - this.height / 2)
    this.min = new Vec(this.x, this.y);
    this.max = new Vec(this.x + this.width, this.y + this.height);
    this.sprite = null
    this.mass = 1;
    this.k = 0.5
    this.forces = []
    this.totalForce = 0;
    this.collisionSide = {
      left: false,
      right: false,
      top: false,
      bottom: false
    }
  }
  get pos() {
    log("get pos")
    return new Vec(x, y);
  }
  set pos(p) {
    this.x = p.x;
    this.y = p.y;
    log("set pos")
  }
  get x() {
    return this.x;
  }
  set x(val) {
    this.x = val;
  }
  get acc() {
    log("get acc")
    return new Vec(this.ax, this.ay)
  }
  set acc(a) {
    log("set acc")
    this.ax = a.x;
    this.ay = a.y;
  }
  get velo() {
    log("get velo")
    return new Vec(this.vx, this.vy);
  }
  set velo(v) {
    this.vx = v.x;
    this.vy = v.y
    log("set velo")
  }
  move(dt) {
    this.pos = this.pos.add(this.velo)
  }
  setSprite() {
    this.sprite = new Sprite();
  }
  draw(ctx) {

  }
  // updateForce(){
  //   let g =10
  //   this.forces=[]
  //   this.forces.push(new Vec(0,this.mass*-this.k*this.vy))
  // }
  // applyForce(){
  //   this.forces.forEach((f)=>{
  //     this.totalForce  = Vec(0,0)
  //     this.totalForce.add(f)
  //   })
  // }
  // updateAccel(){
  //   this.acc= this.totalForce.multiply(1/this.mass);
  // }
  // updateVelo(dt){
  //   this.velo=this.velo.addScaled(this.acc,dt)
  // }
  // getDirection(dir){

  // }
  // update(dt){
  //   this.updateForces()
  //   this.applyForce()
  //   this.updateAccel()
  //   this.updateVelo(dt)
  //   this.move()
  // }
import PhysicsBody from "./js/physicsBody.js";

export default class Renderable extends PhysicsBody {
  constructor(x,y,w,h,c) {
    super(x,y,w,h);
    this.color = c;
}
}