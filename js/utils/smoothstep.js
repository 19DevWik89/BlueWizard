export default function smoothstep(x){
  x*x*(3-2*x);
}

export function curvedTime(currentTime,totalTile){
  let normalizedTime = currentTime/totalTime;
  return smoothstep(normalizedTime)
}