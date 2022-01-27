import Vec from './vec.js'
class Camera{
  constructor(ctx,gx,gy,w,h,ww,wh){
    this.ctx=ctx  
    this.gx=gx;this.gy=gy;
    this.width=w;this.height=h;
    this.worldWidth=ww;
    this.worldHeight=wh;
    this.tiles=[]
    this.gCenter=[this.gx+this.width/2,this.gy+this.height/2];
    this.min=new Vec(this.gx,this.gy); this.max=new Vec(this.gx+this.width,this.gy+this.height);
    this.watching=null
  }
  
  update(){
    if(this.watching.vx > 0 || this.watching.vx < 0){
      this.gx += this.watching.vx;
    }
    if(this.watching.vy > 0 || this.watching.vy < 0){
      this.gy += this.watching.vy
    }
    this.x=Math.max(0,Math.min(Math.floor(this.watching.x+(this.watching.width/2)-this.width/2),this.worldWidth-this.width))
    this.y=Math.max(0,Math.min(Math.floor(this.watching.y+(this.watching.height/2)-this.height/2),this.worldHeight-this.height))

  }
  setTiles(t){
    this.tiles=t;
  }
  setWatching(obj){
    this.watching = obj;
    return this;
  }
  
}

export default Camera