//Exercicio 1//

var nomeCompleto = "Sabra Gabrielle Silva Moreira";

console.log(nomeCompleto);

//Exercicio 2//

var numeroA = "2";
var numeroB = "5";
var resultado = (numeroA * numeroB);

console.log(resultado);

//Exercicio 3//

function saudacao() {

    console.log('Oi eu sou o Goku!');
}
saudacao('Oi eu sou o Goku!');

//Exercicio 4//

function multiplica (a,b){
    return a*b;
}
console.log (multiplica (7,9))

//Exercicio 5//


var idade = 19;

if (idade >=18) {
    console.log("Voce pode dirigir");

} else {
    console.log("Voce não pode");
}

//Exercicio 6//

for (var i=0; i<=20; i++){
    console.log(i);

}

//Exercicio 7//

for (var i=0; i<=20; i++){
    if(i%2!=0)
    console.log(i)
}

//Exercicio 8//

function tabuada (a){
for (let i = 1; i <= 10; i++) {
 console.log(a + "x" + i + "=" + a*i);
}
}

tabuada(3);

//Exercicio 9//

function converterEmHoras(minutos) {
	return console.log(minutos/60)
}

converterEmHoras(240)