export default class{
  constructor(urls){
    this.images={
      idle:[],
      walk:[],
      jump:[]
    }
    this.sequences={
      idle:{
        base:null,
        urls:[]
      },
      walk:{
        base:null,
        urls:[]
      },
      jump:{
        base:null,
        urls:[]
      }
    }
    this.current=null;
    this.currentLen=null;
    this.currentIDX=null;
  }
  addIdleData(base,urls){
    this.sequences.idle.base=base;
    this.sequences.idle.urls=urls;
  } 
  addWalkData(base,urls){
    this.sequences.walk.base = base;
    this.sequences.walk.urls=urls;
  }
  addJumpData(base,urls){
    this.sequences.jump.base = base;
    this.sequences.jump.urls = urls;
  }
 
  async loadSequences(){
    this.sequences.idle.urls.map((url,i)=>{
      return new Promise((res,rej)=>{
      let img=new Image();
      this.images.idle.push(img);
      img.onload=res
      img.onerror=rej;
      img.src=this.sequences.idle.base+this.sequences.idle.urls[i]+".png";
      })
    })
    Promise.all(this.images.idle).then(()=>{
      
      console.log("imgs  idle loaded")
      this.images.idle.forEach((x)=>{console.log(x)})
    
    })
    this.sequences.walk.urls.map((url,i)=>{
      return new Promise((res,rej)=>{
      let img=new Image();
      this.images.walk.push(img);
      img.onload=res
      img.onerror=rej;
      img.src=this.sequences.walk.base+this.sequences.walk.urls[i]+".png";
      })
    })
    Promise.all(this.images.walk).then(()=>{
      console.log("imgs loaded")
      console.log(this.images.walk)
    })
    this.sequences.jump.urls.map((url,i)=>{
      return new Promise((res,rej)=>{
      let img=new Image();
      this.images.jump.push(img);
      img.onload=res
      img.onerror=rej;
      img.src=this.sequences.jump.base+this.sequences.jump.urls[i]+".png";
      })
    })
    Promise.all(this.images.jump).then(()=>{
      console.log("imgs loaded jump")
      console.log(this.images.jump+"jmp")
    }).catch(Error)
  }
  playSequence(name,rate,ctx,pos){
    let images=this.images[name];
    let len=images.length;
    let i=0;
    setInterval(()=>{
      ctx.clearRect(pos.getX(),pos.getY(),images[i].width,images[i].height)
      ctx.drawImage(images[i],pos.getX(),pos.getY())
      i++;
      if(i===len){
        i=0;
      }
    },rate)
  }
  setCurrent(which){
    this.current=this.images[which]
    this.currentLen=this.current.length();
    this.currentIDX=0;
  }
  nextInSequence(){
    if(this.currentIDX >= this.currentLen){
      this.currentIDX=0
    }
    let img=this.current[this.currentIDX]
    this.currentIDX++;
     return img
  }
   

}