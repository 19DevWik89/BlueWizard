import Particle from "./particle.js"
import Vec from "./vec.js"
import Force from "./force.js"
import Renderable from "./renderable.js";
import Player from "./renderable.js";
import Sprite from "./sprite.js";
import Camera from "./camera.js";
import log from "./log.js";
//** TODOs:
// impl scene list
//setup fn sets start scene, sets player start pos,
// draw function that uses camera to keep player centered

window.onload=()=>{
  let canvas=document.querySelector("canvas")
  let ctx =canvas.getContext('2d');
  let tileLayer = document.createElement('canvas')
  let tctx=tileLayer.getContext('2d');
  document.body.append(tileLayer)
  let w=tileLayer.width=canvas.width=window.innerWidth;
  let h=tileLayer.height=canvas.height=window.innerHeight;
  const DIRECTION = {
    left:false,right:false,up:false,down:false
  }
  let playerIdleURL = "./BlueWizard/2BlueWizardIdle/";
  let playerWalkURL ="./BlueWizard/2BlueWizardWalk/";
  const playerJumpURL="./BlueWizard/2BlueWizardJump/";
  let debugMap ={
    grid:[
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      1,1,1,1,1,1,1,1,1,1,
    ],rows:10,cols:10,legend:{1:"green"},
    startPos:new Vec(64,32),width:640,heght:640
  }
  let currentScene=debugMap
   let pool=[]
  let tiles=buildTilesFromScene(currentScene)
  let player = new Player(currentScene.startPos.x,currentScene.startPos.y,32,32)
  let playerSprite=new Sprite()
  player.setSprite(playerSprite)
  log(player.direction)
  ctx.fillRect(0,0,25,25)

  let camera = new Camera((debugMap.x+debugMap.width/2)-canvas.width/2,(debugMap.y+debugMap.height/2)-canvas.height/2)
  playerSprite.addIdleData(playerIdleURL,"01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19".split(" "));
  playerSprite.addWalkData(playerWalkURL,"01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19".split(" "));
  playerSprite.addJumpData(playerJumpURL,"01 02 03 04 05 06 07".split(" "));
  playerSprite.loadSequences()
  tiles=buildTilesFromScene(currentScene)
  drawTiles(tiles)
  updateSetup(player,camera,tiles,9,currentScene)()
  render()
function drawTiles(tiles){
  log("drawTiles")
  tiles.forEach((tile)=>{
    tctx.fillStyle=tile.color;
    tctx.fillRect(tile.x,tile.y,64,64)
  })
}

function updateSetup({_player,_camera,_tiles,_enemies,_levelData}){
  log("update setup")
  let player = _player;
  let camera = _camera;
  let tiles = _tiles;
  let enemies = _enemies || null;
  let levelData = _levelData || null;
  function update(){
     player.direction(DIRECTION)
     player.update()
     player.x = Math.max(0,Math.min(player.x + player.vx,(levelData.width-player.width)));
     player.y = Math.min(0,Math.min(player.y + player.vy,levelData.height - player.height));
     camera.update()
  }
  return update
 
  }


function render(){
  ctx.clearRect(0,0,w,h);
  ctx.save();
  ctx.translate(-camera.x,-camera.y)
  let playerImg=player.sprite.nextInSequence();
  ctx.drawImage(playerImg,0,0)
}

function buildTilesFromScene(scene){
  log("build tiles")
  let rows=scene.rows;
  let cols=scene.cols;
  let grid=scene.grid;
  let legend=scene.legend;
  let tiles=[]
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      let idx=r*cols+c;
      let n = grid[idx]
      let t=Renderable.newTile(c*64,r*64,legend[n])
      tiles.push(t)
  }
}
log(tiles)
return tiles;
}
}
