$(document).ready(function(){
    $('.carousel').carousel();
  });
  calcular.onclick = function(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    var testePeso = isNaN(peso);
    var testeAltura = isNaN(altura);

    if(testePeso || testeAltura){
        document.getElementById("resultado").innerHTML = "Digite apenas números!";
    }
    else{
        var imc = peso/(altura * altura)
        imc = imc.toFixed(2);
        document.getElementById("resultado").innerHTML = "O IMC é "+imc;
        }
    if(imc<=18.5){
      document.getElementById("situacao").innerHTML = "Você está abaixo do peso, consulte nossas dietas.";
    }
    else{
      if(imc<24.9){
        document.getElementById("situacao").innerHTML = "Você está no seu peso ideal, continue assim.";
      }
      else{
        document.getElementById("situacao").innerHTML = "Você está acima do peso, procure um médico e consulte nossas dietas.";
      }
    }
};
