import Renderable from './renderable.js'
export default class Player extends Renderable{
  constructor(x,y,w,h){
    super(x,y,w,h);
    this.left=false;
    this.right=false;
    this.jump=false;
    this.grounded=false;
    this.jump=false;
    this.jumping=false;
  }
    getDirection(d){
      if(d.left && !d.right){
          this.right=true;
      }
      if(d.right && !d.left){
        this.left = true;
      }
      if(d.up){
        if(this.jump){
          this.jumping = true;
          this.jump=false;
        }
        if(this.jumping){
          if(this.vy < 1){
            this.jumping = false
          }
        }
        if(!)
       
        }
        
      }
    }
    update(){
      if(!this.left && !this.right){
        this.sprite.setCurrent("idle")
      }
      if(this.jump){
        this.sprite.setCurrent("jump")
      }
    }
  }
