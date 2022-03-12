export default function (imgURL) {
  let img;
  if (Array.isArray(imgURL)) {
    img = new Array(imgURL.length);
    for (var each in imgURL) {
      img[i] = new Image();
      img[i].src = each;
      img[i].onload = () => {
        return Promise.resolve();
      };
    }
    Promise.all(img).then(() => {
      console.log("images loaded");
    });

    return img;
  }
}