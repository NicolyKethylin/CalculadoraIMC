function resposta() {
  var alturaCM = parseFloat(document.getElementById("altura").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var alturaM = alturaCM / 100;

  if (isNaN(alturaM) || isNaN(peso) || alturaM <= 0 || peso <= 0) {
    document.getElementById("resultado").textContent =
      "Insira valores válidos de altura e peso.";
    document.getElementById("resultado").style.border = "none";
  } else {
    var imc = peso / (alturaM * alturaM);
    // Limitar o valor do IMC a 2 casas decimais
    var imcArredondado = imc.toFixed(2);

    var resultadoText = `Seu IMC é: ${imcArredondado}. `;

    if (imc < 18.5) {
      resultadoText += "Abaixo do peso ideal.";
    } else if (imc >= 18.5 && imc < 24.9) {
      resultadoText += "Peso saudável.";
    } else if (imc >= 25 && imc < 29.9) {
      resultadoText += "Sobrepeso.";
    } else {
      resultadoText += "Obesidade.";
    }

    document.getElementById("resultado").textContent = resultadoText;
    document.getElementById("resultado").style.border = "2px solid #54b3ab";
  }
}

function limpar() {
  // Limpa os campos de entrada e o resultado
  document.getElementById("nome").value = "";
  document.querySelector(".peso").value = "";
  document.querySelector(".altura").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("resultado").style.border = "none";
}
