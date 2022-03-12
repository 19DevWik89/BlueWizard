import Vec from "./vej.js";
export default class {
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.ax=0;
    this.ay=0;
    this.width=w;
    this.height=h;
    this.origin=new Vec(this.x-this.width/2,this.y-this.height/2);
    this.min=new Vec(this.x,this.y);
    this.max=new Vec(this.x+this.width,this.y+this.height);
    this.sprite=null;
    this.mass=1;
    this.k=0.5;
    this.forces=[];
    this.totalForce=0;
    this.collisionSide={
      left:false,
      right:false,
      top:false,
      bottom:false
    };
  }
  get pos(){
    log("get pos");
    return new Vec(x,y);
  }
  set pos(p){
    this.x=p.x;
    this.y=p.y;
    log("set pos");
  }
  get x(){
    return this.x;
  }
  set x(val){
    this.x=val;
  }
  get acc(){
    log("get acc");
    return new Vec(this.ax,this.ay);
  }
  set acc(a){
    log("set acc");
    this.ax=a.x;
    this.ay=a.y;
  }
  get velo(){
    log("get velo");
    return new Vec(this.vx,this.vy);
  }
  set velo(v){
    this.vx = v.x;
    this.vy = v.y;
    log("set velo");
  }
  move(dt){
    this.pos=this.pos.add(this.velo);
  }
  get vertices(){
    let a = new Vec(this.x,this.y);
    let b = new Vec(this.x+this.width,this.y);
    let c = new Vec(this.x+this.width,this.y+this.height);
    let d = new Vec(this.x,this.y+this.height);
    return {a:a,b:b,c:c,d:d};
  }
  getEdges(){
    let {a,b,c,d}=this.getVertices();
    let ab = b.subtract(a);
    let bc = c.subtract(b);
    let cd = d.subtract(c);
    let da = a.subtract(d);

    return {
      left:ab,
      bottom:bc,
      right:cd,
      top:da
    };
  }
  centerEdges(){
    let {a,b,c,d}=this.getVertjces();
    let cleft=(a.add(b)/2);
    let cbottom= (b.add(c))/2;
    let cright=(c.add(d))/2;
    let ctop = (d.add(a))/2;

    return{
      cleft:cleft,cbottom:cbottom,cright:cright,ctop:ctop
    };
  }
  getNormals(){
    let {left,bottom,right,top}=this.getEdges();
    let ln=(new Vec2(left.y,left.x)).normalize();
    let bn=(new Vec2(bottom.y,bottom.x)).normalize();
    let rn=(new Vec2(right.y,right.x)).normalize();
    let tn=(new Vec2(top.y,top.x)).normalize();
    return {
      left:ln,
      bottom:bn,
      right:rn,
      top:tn
    };
  }
  getEdgeNormals(){
    let {l,b,r,t}=this.getNormals();
    let {cl,cb,cr,ct} =this.centerEdges();
    return{
      left:l.subtract(cl),
      bottom:b.subtract(cb),
      right:r.subtract(cr),
      top:t.subtract(ct)
    };
  }
  
}

function getNormal(a,b){
  let x=a.x-b.x;
  let y =b.y-a.y;
  return {y,x};
}