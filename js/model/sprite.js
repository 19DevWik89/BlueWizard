import Renderable from "./renderable.js";
export default class extends Renderable{
  constructor(x,y,w,h){
    super(x,y,w,h,null);
    this.sequences={};
    this.currentSequence=null;
    this.currentSequenceFrames=null;
    this.frameNo=0;
  }
  addSequence(name,images){
    this.sequences[name]=[];
    for(var each in images){
      this.sequences[name].push(each);
    }
  }
  setCurrentSequence(name){
    this.currentSequence = this.sequences[name];
    this.currentSequenceFrames = this.currentSequence.length;
    this.frameNo=0;
    return this.currentSequence[this.frameNo]
  }
  nextInSequence(){
    this.frameNo+=1;
    if(this.frameNo >= this.currentSequenceFrames){
      this.frameNo = 0;
    }
    return this.currentSequence[this.frameNo];
  }

}