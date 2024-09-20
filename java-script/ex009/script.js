
function adicionar_vetor(vet) {
    var novo_numero = document.getElementById('num').value
    resposta.innerHTML = ""

    if (novo_numero.length == 0)
        window.alert('Forneça um número!!')
    else if (novo_numero < 1 || novo_numero > 100)
        window.alert('Forneça um número válido!!')
    else if (vet.indexOf(Number(novo_numero)) != -1)
        window.alert('Número já fornecido anteriormente')
    else {

        vet.push(Number(novo_numero))
        tab.innerHTML = ""
        for (let pos in vet) {
            let item = document.createElement('option')
            item.value = vet[pos]
            item.text = vet[pos]
            tab.appendChild(item)
        }
    }
}

function finalizar_dados(vet) {
    vet.sort()
    var soma = 0;

    for (var i = 0; i < vet.length; i++) {
        soma += vet[i]
    }

    var media = soma / vet.length
    media = Number(media)
    resposta.innerHTML = `Ao todo, temos ${vet.length} cadastrados. <br>`
    resposta.innerHTML += `O maior valor informado foi ${vet[vet.length - 1]} <br>`
    resposta.innerHTML += `Somando todos valores, temos ${soma} <br>`
    resposta.innerHTML += `A média dos valores é ${media} <br>`
}
var vet = []
var tab = document.getElementById('lista')
var botao_1 = document.getElementsByClassName('botao')[0]
var botao_2 = document.getElementsByClassName('botao')[1]
var resposta = document.getElementById('relacao_numeros')

botao_1.addEventListener('click', function () {
    adicionar_vetor(vet)
})

botao_2.addEventListener('click', function () {
    finalizar_dados(vet)
})
