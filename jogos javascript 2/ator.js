var yAtor = 371;
var xAtor = 100;
function mostrarAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function movimentarAtor(){
  if (keyIsDown(UP_ARROW)){
   
    yAtor -= 3;
   
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
     if(yAtor >= 380) {
      yAtor = 380;
    }
  }
}

