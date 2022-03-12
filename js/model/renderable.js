import PhysicsBody from "./js/physicsBody.js";

export default class Renderable extends PhysicsBody {
  constructor(x,y) {
    super(x,y);
    this.currentSprite=null;
    this.currentSequence =null;
    this.sequences=null;
    this.numberOfSequences=null;
    this.currentSequenceMax=null;
    this.idx=0;
  }
  changeSequence(title){
    this.currentSequence = this.sequences[title];
    this.idx=0;
    this.currentSprite=this.currentSequence[idx];
    return this.currentSprite;
  }
  next(){
    this.idx++;
    
  }
  getCurrentSequence(){
    return this.currentSequence;
  }
  getIdx(){
    return this.idx;
  }
  get sequence(){
    return this.currentSequence;
  }
  set sequence(s){
    this.currentSequence = s;
  }
  get sprite(){
    return this.currentSprite;
  }
  
}