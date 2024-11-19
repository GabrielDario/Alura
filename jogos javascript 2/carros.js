//código do carro

var xCarros = [600, 600, 600,600,600,600];
var yCarros = [40, 96, 150, 210,260,320]; 
var velocidadeCarros = [7,6,5,4,3,2];
var comprimentoCarro = 50;
var alturaCarro = 40;
var colisao = false;
var pontos = 0;

function mostrarCarros(){
    for(let i = 0; i < xCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);

    }
}

function movimentarCarro(){
  for(var i = 0; i < imagemCarros.length; i++) {
  xCarros[i] -= velocidadeCarros[i];
  }
 
}

function volta(){
    for(var i = 0; i < imagemCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}
function verificarColisao(){

  for (var i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 371;
  somColisao.play();
  pontos = 0;
}

function verificarPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(pontos, width/5,30);
  if(yAtor < 5) {
    pontos ++;
    somPontos.play();
    yAtor = 371;
  }
}

