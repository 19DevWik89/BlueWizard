export default function(w,h){
  let can = document.createElement("canvas");
  let layers={}
  can.width=w;
  can.height=h;
  let ctx = can.getContext('2d');
  document.body.appendChild(can);

  return {
    get_ctx(){
      return ctx;
    },
    get_canvas(){
      return can;
    },
    addLayer(name){
      layers[name]={
        canvas:document.createElement('canvas'),
        ctx:this.canvas.getContext('2d'),
      };
      document.body.appendChild(layers[name].canvas)
    }
  };
}