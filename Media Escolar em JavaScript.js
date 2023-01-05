import input from 'readline-sync';

console.log("Media Escolar! \n");

var nota1 = input.question("Insira a nota referente ao primeiro trimestre: ");
var nota2 = input.question("Insira a nota referente ao segundo trimestre: ");
var nota3 = input.question("Insira a nota referente ao terceiro trimestre: ");

var soma_notas = Number(nota1) + Number(nota2) + Number(nota3);
var media = soma_notas / 3;

console.log("Sua media e: "+media+"");

if(media >= 6){
    console.log("Aprovado!");
}
else 
    console.log("Reprovado!");


