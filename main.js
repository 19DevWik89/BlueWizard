import lib from "./js/gameLib.js";
import log from "./js/utils/log.js";
import Sprite from "./js/model/sprite.js"
window.addEventListener("DOMContentLoaded", function(){
  log("starting");
  //var has context

  let mainView = lib.createMainView();
  let playerView = lib.createPlayerView();

  let player = lib.createPlayer();
  let sprites = lib.getPlayerSprites().then((i)=>{
    log(i);
    player.sequences = i;
  });
  
});