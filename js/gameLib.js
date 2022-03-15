import View from "./view/view.js";
import Camera from "./view/camera.js";
import Assets from "./model/assets.js";
import Player from "./model/player.js";
import Vec from "./model/vec.js";
import Force from "./model/force.js";
import assets from "./model/assets.js";

export default (function(){
  let assets = new Assets();

  function createMainView(){
    let view = new View("main",window.innerWidth,window.innerHeight);
    view.pushToDom();
    return view.ctx;
  }
  function createPlayerView(){
    let view = new View("player",window.innerWidth,window.innerHeight);
    view.pushToDom();
    return view.ctx;
  }
  function createPlayer(){
    let player = new Player(0,0,32,32);
    return player
  }
  async function getPlayerSprites(){
    await assets.loadPlayerSprites();
    let playerSprites = assets.pullPlayerSprites();
    return playerSprites;
  }

  return {
    createPlayerView:createPlayerView,
    createMainView:createMainView,
    createPlayer:createPlayer,
    getPlayerSprites:getPlayerSprites, 

  }
})();
