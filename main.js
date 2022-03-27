import lib from "./js/gameLib.js";
import log from "./js/utils/log.js";
import Sprite from "./js/model/sprite.js"
window.addEventListener("DOMContentLoaded", function(){
  log("starting");
  //var has context
  let dir={
    up:false,
    down:false,
    left:false,
    right:false
  };
  let mainView,playerView,player;
  (async function(){
  mainView = lib.createMainView();
  playerView = lib.createPlayerView();

  player = lib.createPlayer();
  await lib.getPlayerSprites().then((i)=>{
    log(i);
    player.sequences = i;
    
  });
})();


window.addEventListener("keydown",function(e){
  let key = e.key;
  switch(key){
    case "w":
      dir.up = true;
    case "a":
      dir.left = true;
      break;
    case "d":
      dir.right = true;
      break;
    case "s":
      dir.down = true;
      break;
  }
});
window.addEventListener("keydown",function(e){
  let key = e.key;
  switch(key){
    case "w":
      dir.up = false;
    case "a":
      dir.left = false;
      break;
    case "d":
      dir.right = false;
      break;
    case "s":
      dir.down = false;
      break;
  }
});


});