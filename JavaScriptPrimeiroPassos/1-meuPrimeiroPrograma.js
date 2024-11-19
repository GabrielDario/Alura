console.log("1 - Primeiro programa " + 28);
const idade = 28;
const idadeSomada = idade + 2;
const idadeDiminuida = idade - 2;
const idadeDividida = idade / 2;
const idadeMultiplicada = idade * 2;
console.log(idade + " " + idadeSomada + " " + idadeDiminuida + " " + idadeDividida + " " + idadeMultiplicada);
// segundo
const nome = "Pedro";
const sobrenome = " da Silva";
const nomeCompleto = nome + sobrenome;
console.log("\n2 - Concatenacao");
console.log("Nome dele e " + nome + sobrenome);

console.log("\n3 - Aritmetica");
console.log(2+2);
console.log(8 + 10 * 2); //28 pq ele faz multiplicação primeiro
console.log((8 + 10) * 2); //36 pq ele faz multiplicação primeiro
console.log(parseInt("2") + parseInt("2")); //quando há soma,converter
console.log("16" / "4");
console.log(`Nome:  ${nomeCompleto}`);

console.log("\n4 - Listas");
let frutas = new Array('Abacate','Uva','Pera');
frutas.push("Banana");
frutas.splice(1,1); //delente o segundo item [0,1]
console.log("Frutas: " + frutas);
console.log("Terceira na lista com menos um: " + frutas[2]);