function dados() {
    var ano_nascimento = document.querySelector("#ano")
    var sexo_selecionado = document.querySelector('input[name="sexo"]:checked')
    var res = document.querySelector("#resposta")
    var ano_atual = new Date().getFullYear();
    if (!isNaN(ano_nascimento.value)) {
        resposta.innerHTML = `Você nasceu em ${ano_nascimento.value} <br>`
        var idade = ano_atual - ano_nascimento.value
        resposta.innerHTML += `Você tem ${idade} anos <br>`
        resposta.innerHTML += `Você é do sexo ${sexo_selecionado.id} <br>`
        if (idade >= 18) {
            resposta.innerHTML += 'Você é maior de idade'
        }
        else {
            resposta.innerHTML += 'Você é menor de idade'
        }
    }
}
