const actx = new AudioContext();

function playNote(frequency,decay=1,type="sine"){
  const oscillator = actx.createOscillator();
  const volume = actx.createGain();
  oscillator.connect(actx.destination);
  volume.connect(actx.destination);
  oscillator.type=type;
  oscillator.frequency=frequency;
  volume.gain.linearRampToValueAtTime(1,actx.currentTime);
  volume.gain.linearRampToValueAtTime(0,actx.currentTime+decay);

  oscillator.start(actx.currentTime);
}

function soundEffect(
  frequencyValue,
  attack=0,decay=0,type="sine",volumeValue=1,panValue=0,
  wait=0,pitchBendAmount=0,reverse=false,randomValue=0,
  dissonance=0,echo=undefined,reverb=undefined
){

}

class Sound {
  constructor(source, loadHandler) {
  //Assign the `source` and `loadHandler` values to this object
  this.source = source;
  this.loadHandler = loadHandler;
  //Set the default properties
  this.actx = actx;
  this.volumeNode = this.actx.createGain();
  this.panNode = this.actx.createStereoPanner();
  this.soundNode = null;
  this.buffer = null;
  this.loop = false;
  this.playing = false;
  //Values for the pan and volume getters/setters
  this.panValue = 0;
  this.volumeValue = 1

//Values to help track and set the start and pause times
this.startTime = 0;
this.startOffset = 0;
//Load the sound
this.load();
}
//The sound object's methods
load() {
//Use xhr to load the sound file
let xhr = new XMLHttpRequest();
xhr.open("GET", this.source, true);
xhr.responseType = "arraybuffer";
xhr.addEventListener("load", () => {
//Decode the sound and store a reference to the buffer
this.actx.decodeAudioData(
xhr.response,
buffer => {
this.buffer = buffer;
this.hasLoaded = true;
//This next bit is optional, but important.
//If you have a load manager in your game, call it here so that
//the sound is registered as having loaded.
if (this.loadHandler) {
this.loadHandler();
}
},
//Throw an error if the sound can't be decoded
error => {
throw new Error("Audio could not be decoded: " + error);
}
);
});
//Send the request to load the file
xhr.send();
}
play() {
//Set the start time (it will be `0` when the first sound starts)
this.startTime = this.actx.currentTime;
//Create a sound node
this.soundNode = this.actx.createBufferSource()

//Set the sound node's buffer property to the loaded sound
this.soundNode.buffer = this.buffer;
//Connect the sound to the volume, connect the volume to the
//pan, and connect the pan to the destination
this.soundNode.connect(this.volumeNode);
this.volumeNode.connect(this.panNode);
this.panNode.connect(this.actx.destination);
//Will the sound loop? This can be `true` or `false`
this.soundNode.loop = this.loop;
//Finally, use the `start` method to play the sound.
//The start time will be either `0`,
//or a later time if the sound was paused
this.soundNode.start(
this.startTime,
this.startOffset % this.buffer.duration
);
//Set `playing` to `true` to help control the
//`pause` and `restart` methods
this.playing = true;
}
pause() {
//Pause the sound if it's playing, and calculate the
//`startOffset` to save the current position
if (this.playing) {
this.soundNode.stop(this.actx.currentTime);
this.startOffset += this.actx.currentTime - this.startTime;
this.playing = false;
}
} 
restart() {
//Stop the sound if it's playing, reset the start and offset times,
//then call the `play` method again
if (this.playing) {
this.soundNode.stop(this.actx.currentTime);
}
this.startOffset = 0,
this.play();
}
playFrom(value) {
if (this.playing) {
this.soundNode.stop(this.actx.currentTime);
}
this.startOffset = value;
 this.play();
 }
 //Volume and pan getters/setters
 get volume() {
 return this.volumeValue;
 }
 set volume(value) {
 this.volumeNode.gain.value = value;
 this.volumeValue = value;
 }
 get pan() {
 return this.panNode.pan.value;
 }
 set pan(value) {
 this.panNode.pan.value = value;
 }
}
//Create a high-level wrapper to keep our general API style consistent and flexible
function makeSound(source, loadHandler) {
 return new Sound(source,loadHandler); 
}
function setupMusic() {
  //Make the music loop
  music.loop = true;
  //Set the pan
  music.pan = -0.8;
  //Set the volume
  music.volume = 0.3;
  //Capture keyboard key events
  let a = keyboard(65),
  b = keyboard(66),
  c = keyboard(67),
  d = keyboard(68)

   //Use the key `press` methods to control the sound
 //Play the music with the `a` key
 a.press = () => {
  if (!music.playing) music.play();
  console.log("music playing");
  };
  //Pause the music with the `b` key
  b.press = () => {
  music.pause();
  console.log("music paused");
  };
  c.press = () => {
  music.restart();
  console.log("music restarted");
  };
  //Play the music from the 10 second mark
  //with the `d` key
  d.press = () => {
  music.playFrom(10);
  console.log("music start point changed");
  };
}