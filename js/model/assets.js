import loadImage from "./utils/loadImage.js";
export default function(){
  
  let playerSprites={
    idle:[],walk:[],jump:[]
  };
  let playerSpriteBase="assets\BlueWizard";
  let playerSpriteExt=".png";
  let idle="/2BlueWizardIdle/";
  let idleNames ="00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19".join(" ");
  let walkNames="00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19".join(" ");
  let jumpNames = "00 01 02 03 04 05 06 07".join(" ");
  
  const loadPlayerSprites=function(){
    idleNames.forEach((name)=>{
      let i=new Image();
      i.src=playerSpriteBase+name+playerSpriteExt;
      playerSprites.idle.push(i);
    });

    walkNames.forEach((name)=>{
      let i=new Image();
      i.src=playerSpriteBase+name+playerSpriteExt;
      playerSprites.walk.push(i);
    
    });

    jumpNames.forEach((name)=>{
      let i=new Image();
      i.src=playerSpriteBase+name+playerSpriteExt;
      playerSprites.jump.push(i);
    
    });
    return Promise.resolve();
  };
  let public = {
    loadPlayerSprites:async function(cb){
      await loadPlayerSprites();
    },
    
  };
}