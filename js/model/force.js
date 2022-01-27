import Vec from "./vec.js"
export default class{
  constructor(name,x,y){
    this.name=name;
    this.x=x;
    this.y=y;
  }
  static constantGravity(m,g){
    return new Vec(0,m*g);
  }
  static linearDrag(k,vel){
    let force;
    let velMag=vel.length();
    if(velMag > 0){}
  }
}