import Sprite from "./sprite.js";
export default class Player extends Sprite{
  constructor(name,x,y,w,h){
    super(x,y,w,h);
    this.name=name;
  }
  
}
