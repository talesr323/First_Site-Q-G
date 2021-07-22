/* 
var mensagem = "Olá mundo!"
alert(mensagem);
//printar e armazenar 

 var a = 2;
 var b = 3;
 var b = "Ola mundo";

 var soma = a+b;
 var sub = a-b;
 var mult = a*b;
 var div = a/b;

 // calcular resto         ---alert (9%3)---

 alert(soma);
 alert(sub);
 alert(mult);
 alert(div);

 // operaçoes 

 if (b%2 == 1){
 	alert("Numeto impar");
 }
 else if(c%2 == 0){
 	alert("invalido")
 }
 else{
    alert("Numero par")
 }

//condicionais
 

var i = 0;

while(i < 3){
	alert(i);

	i= i+1; 
}

var j = 0;

for (j=0; j < 3; j++){
	alert(j);
}

// laços 


var numero =6 ;
var decimal = 4.5; 
var texto = "Olá mundo";
var lista = ["laranja", "maça", "banana",1234];

// alert (lsita [3]); 
//para pegar valor por valor
 
for(i in lista) {
	alert (lista[i]);
}

//para percorrer a lista inteira


console.log("Olá mundo");

//exibe a mensagem no console



function soma (a, b){
	console.log(a+b);
}

// soma(2, 2);

function subtracao (a, b){
		return a-b;
}

var s = subtracao(5, 3);
console.log(s);


function mensagem(nome){
	alert ("ei não clique em mim!"+nome);
}
function text(nome){
	alert ("hahahaha" + nome);
}
 

function mudaCor(cor){
	var elemento = document.getElementById("mensagem");
	elemento.style.color = cor; 
}
*/


function valida(){
	var nome = document.getElementById('nome');

	if (nome.value == ""){
		alert ("Campo nome não pode estar em branco");
	}
	else {
		alert ("Nenhum problema foi detectado");
	}
}

