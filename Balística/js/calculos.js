var calculos = document.querySelectorAll(".calculo");

for (var i = 0; i < calculos.length; i++) {

    var calculo = calculos[i];

    var tdAngulo = calculo.querySelector(".info-angulo");
    var angulo = tdAngulo.textContent;

    var tdAltura = calculo.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdDistancia = calculo.querySelector(".info-distancia");
    var distancia = tdDistancia.textContent;

    var tdVelocidadeinicial = calculo.querySelector(".info-velocidadeinicial");
    var velocidadeinicial = calculaVelocidadeinicial(angulo, altura)
    tdVelocidadeinicial.textContent = velocidadeinicial;

    var tdVelocidadeX = calculo.querySelector(".info-velocidadeX");
    var velocidadeX = calculaVelocidadeX(angulo);
    tdVelocidadeX.textContent = velocidadeX;

    var tdVelocidadeinicialY = calculo.querySelector(".info-velocidadeinicialY");
    var velocidadeinicialY = calculaVelocidadeinicialY(angulo);
    tdVelocidadeinicialY.textContent = velocidadeinicialY;

    var tdTempoSubida = calculo.querySelector(".info-tempoSubida");
    var tempos = calculaTempoSubida(velocidadeinicialY);
    tdTempoSubida.textContent = tempos;

}

function calculaVelocidadeinicial(angulo, altura){
  var velocidadeinicial = 0;
  var velocidadeinicial = (Math.sqrt(2*(9.8)*altura))*(Math.sin(angulo));

  return velocidadeinicial.toFixed(3);
}

function calculaVelocidadeX(angulo, velocidadeinicial){
  var velocidadeX = 0;
  var velocidadeX = velocidadeinicial*(Math.cos(angulo));

  return velocidadeX.toFixed(3);
}

function calculaVelocidadeinicialY(angulo, velocidadeinicial){
  var velocidadeinicialY = 0;
  var velocidadeinicialY = velocidadeinicial*(Math.sin(angulo));

  return velocidadeinicialY.toFixed(3);
}

function calculaTempoSubida(velocidadeinicialY){

  var tempos = 0;
  var tempos = (2*velocidadeinicialY)/(9.8);

  return tempos.toFixed(3);
}
