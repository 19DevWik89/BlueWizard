import log from "../utils/log.js";
export default function(){
  
  let playerSprites={
    idle:[],walk:[],jump:[]
  };
  let playerSpriteBase="../../assets/BlueWizard";
  let playerSpriteExt=".png";
  let idle="/2BlueWizardIdle/";
  let walk="/2BlueWizardWalk/";
  let jump="/2BlueWizardJump/";
  let idleNames ="00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19".split(" ");
  let walkNames="00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19".split(" ");
  let jumpNames = "00 01 02 03 04 05 06 07".split(" ");
  const loadImage=function(url,target){
    return new Promise((res,rej)=>{
      let img = new Image();
      img.onload=(()=>{
        target.push(img);
        res(img);
      });
      img.src=url;
    });
  };
  const loadPlayerSprites=async function(){
    return new Promise((res,rej)=>{
    idleNames.forEach((name)=>{
      loadImage(playerSpriteBase+idle+name+playerSpriteExt,playerSprites.idle);
    });
    Promise.all(playerSprites.idle)

    walkNames.forEach((name)=>{
      loadImage(playerSpriteBase+walk+name+playerSpriteExt,playerSprites.walk);
    });
    Promise.all(playerSprites.walk);
    jumpNames.forEach((name)=>{
      loadImage(playerSpriteBase+jump+name+playerSpriteExt,playerSprites.jump);
    });
    Promise.all(playerSprites.jump);
    setTimeout(()=>{
      res()
    },1000)
  });

  };
  let toReturn = {
    loadPlayerSprites:loadPlayerSprites,
    pullPlayerSprites:function(){
      return playerSprites;
    }
  };
  return toReturn;
}