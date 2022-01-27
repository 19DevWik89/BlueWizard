import Vec from "./vec.js";
import Force from "./force.js";
export default class Particle{
  constructor(x,y,mass){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.maxVx=5;
    this.maxVy=10;
    this.forces=[];
    this.mass = mass || 1;
    this.gravity=new Vec(0,.9)
    this.charge=null;
  }
  addForce(f){
    this.forces.push(f);
  }
  sumForces(){
    let sx=0,sy=0;
    this.forces.forEach((x)=>{
      sx+=x.x;
      sy+=x.y;
    })
    return new Vec(sx,sy)
  }
  applySumForces(){
    let sum = this.sumForces();
    this.ax = sum.x / this.mass;
    this.ay = sum.y /this.mass;
  }
  getXForce(){
    return this.ax*this.mass;
  }
  getYForce(){
    return this.ay*this.mass;
  }
  getWeight(){
    return this.gravity * this.mass;
  }
}
