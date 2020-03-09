//comentario unica linha
/*
comentarios
multiplas
linhas
*/

/* Introducao
var nome = "Luan Teixeira";
var frase = "Japão é a melhor seleção do mundo";
var idade = 29;
var idade2 = 10;
alert(nome + " Tem "+ idade + " anos");

alert(idade + idade2);

console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(nome.toLowerCase());
*/

/*Array

var lista = ["Maçã", "Pêra", "Laranja"];

lista.push("Uva");

lista.pop();

console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));
*/
/*Dicionario

var fruta = {nome: "Banana", cor: "Amarelo"};

console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

Array / Lista de dicionarios

var frutas = [{nome: "Banana", cor: "Amarelo"}, {nome: "Uva", cor: "Roxo"}];

console.log(frutas);
console.log(frutas[0].nome);
alert(frutas[1].cor);
{nome: "Banana", cor: "Amarelo"}
*/

/* Condicionais 

var idade = prompt("Qual a sua idade ?");

if ( idade >= 18 ){
    alert("maior de idade");
} else{
    alert("menor de idade");
}

*/

/* Laços de repetições 

var count = 0;

while ( count <= 5 ){
    console.log(count);
    count++;
}

for (var count = 1; count <= 5; count++){
    console.log(count);
}

*/

/* Date

var d = new Date();
alert(d.getDay()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
alert(d.getFullYear);
alert(d.getDay);

*/

/* Functions 

function soma(n1, n2){
    return n1 + n2
}
alert(soma(10, 5))

----- variavel local ------

var validar = 0
function validaIdade(idade){
    var validar -> cria uma variavel nova com o mesmo nome porem so usa dentro da funcao
    if ( idade >= 18 ){
        validar = true
    } else{
        validar = false
    }
    return validar
}
console.log(validar) -> ele vai mostrar a validar que esta fora da funcao que no caso é ( 0 )

----- variavel global ------

var validar = 0
function validaIdade(idade){
    validar -> usa a variavel que foi declarada fora da funcao fazendo com que ela fique uma variavel global
    if ( idade >= 18 ){
        validar = true
    } else{
        validar = false
    }
    return validar
}
console.log(validar) -> ele vai 


var idade = prompt("Qual a sua idade ?");
console.log(validaIdade(idade))

*/

/* Manipulando elementos da pagina 

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}
function redirecionamento(){
    window.open("https://web.facebook.com/?_rdc=1&_rdr")    -> abre o site em outra janela

    window.location.href = "https://www.youtube.com/?gl=BR" -> abre o site na mesma janela
}

*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}
function redirecionamento(){
    window.open("https://web.facebook.com/?_rdc=1&_rdr")    

}
function trocarTexto(elemento){
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}
function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("Página carregada!")
}
function change(elemento){
    console.log(elemento.value)
}