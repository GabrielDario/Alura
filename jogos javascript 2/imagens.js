// imagens do jogo

var imagemDaEstrada;
var imagemDoAtor;
var imagemCarro1;
var imagemCarro2;
var imagemCarro3;
var imagemCarro4;
var imagemCarro5;

var somTrilha;
var somColisao;
var somPontos;
function preload(){
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
  
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/ator-1.png");
  
  imagemCarro1 = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png")
  imagemCarro4 = loadImage("img/carro-1.png");
  imagemCarro5 = loadImage("img/carro-2.png");
  imagemCarro6 = loadImage("img/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3,imagemCarro4,imagemCarro5,imagemCarro6];
}