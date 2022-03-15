import PhysicsBody from "./js/physicsBody.js";

export default class Renderable extends PhysicsBody {
  constructor(x,y,w,h,c) {
    super(x,y,w,h);
    this.color = c;
}
}