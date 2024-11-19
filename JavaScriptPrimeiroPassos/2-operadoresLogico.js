console.log("1 - Operadores Lógicos e condicional");
var destino = "Florianopoli";
var contador = 0;
var idade = 20;
var estaAcompanhado = false;
var temPassagem = false;
var podeComprar = idade >= 18 || estaAcompanhado == true;
let lugaresParaViagem = new Array('Florianopolis', 'Curitiba', 'Cuiaba');

console.log(lugaresParaViagem);

for (var i = 0; i < 3; i++) {
    if (lugaresParaViagem[i] == destino) {
        lugaresParaViagem.splice(contador, 1);
        temPassagem = true;
        break;
    }
    
}
console.log("Destino existe: ",temPassagem);