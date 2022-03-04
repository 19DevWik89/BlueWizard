import Point from "./point.js";
import Vec from "./vec.js";

export default class PhysicsObject extends Vec {
    constructor() {
        this.width=1;
        this.height=1;
        this.mass = 1;
        this.k = 0.5;
        this.forces = [];
        this.totalForce = Number;
        this.vertices = [];
        this.verticesTotal = 0;
        this.edges = [];
        this.edgesTotal = 0;
        this.min = Point;
        this.max = Point;
        this.charge = null;
        this.gravity = 0;
    }
    get origin() {
        return [this.x + this.width * 0.5, this.y + this.height * 0.5]
    }
    get pos() {
        log("get pos")
        return new Point(this.x,this.y);
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
      setCharge(N){
          this.charge = +N;
      }
      move(){
          this.x += this.vx;
          this.y += this.vy;
      }
      getEdges(){
          return this.edges;
      }      
      setEdges(edges){
          this.edges = edges;
      }
}