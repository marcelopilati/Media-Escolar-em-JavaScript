import input from 'readline-sync';

console.log("Media Escolar! \n");

var nota1 = input.question("Insira a primeira nota: ");
var nota2 = input.question("Insira a segunda nota: ");
var nota3 = input.question("Insira a terceira nota: ");

var soma_notas = Number(nota1) + Number(nota2) + Number(nota3);
var media = soma_notas / 3;

console.log("Sua media e: "+media+"");

if(media > 6){
    console.log("Aprovado!");
}
else 
    console.log("Reprovado!");


