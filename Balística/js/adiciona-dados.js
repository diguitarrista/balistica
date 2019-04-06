
var botaoAdicionar = document.querySelector("#adicionar-calculo");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var calculo = obtemCalculoDoFormulario(form);

    adicionaCalculoNaTabela(calculo);

    form.reset();

});

function obtemCalculoDoFormulario(form) {

    var calulco = {
        angulo: form.angulo.value,
        altura: form.altura.value,
        distancia: form.distancia.value,
        velocidadeinicial: calculaVelocidadeinicial(form.angulo.value, form.altura.value),
        velocidadeX: calculaVelocidadeX(form.angulo.value, form.velocidadeinicial.value),
        velocidadeinicialY: calculaVelocidadeinicialY(form.angulo.value, form.velocidadeinicial.value),
        tempoSubida: calculaTempoSubida(form.velocidadeinicialY.value)
    }

    return calculo;
}

function montaTr(calculo) {
    var calculoTr = document.createElement("tr");
    calculoTr.classList.add("calculo");

    calculoTr.appendChild(montaTd(calculo.angulo, "info-angulo"));
    calculoTr.appendChild(montaTd(calculo.altura, "info-altura"));
    calculoTr.appendChild(montaTd(calculo.distancia, "info-distancia"));
    calculoTr.appendChild(montaTd(calculo.velocidadeinicial, "info-velocidadeinicial"));
    calculoTr.appendChild(montaTd(calculo.velocidadeX, "info-velocidadeX"));
    calculoTr.appendChild(montaTd(calculo.velocidadeinicialY, "info-velocidadeinicialY"));
    calculoTr.appendChild(montaTd(calculo.tempoSubida, "info-tempoSubida"));

    return calculoTr;
}

function montaTd(calculo, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = calculo;

    return td;
}

function adicionaCalculoNaTabela(calculo) {
    var calculoTr = montaTr(calculo);
    var tabela = document.querySelector("#tabela-dados");
    tabela.appendChild(calculoTr);
}
