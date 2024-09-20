function contar() {
    // Criar uma função que conte de um número inicial até um número final, onde tem o "passo" que é de quanto em quanto vai pular.
    var inicio = parseInt(document.querySelector('#ini').value)
    var final = parseInt(document.querySelector('#fim').value)
    var passos = parseInt(document.querySelector('#passo').value)
    var res = document.querySelector('div#resposta')

    res.innerHTML = "";
    if (!isNaN(inicio) && !isNaN(final) && !isNaN(passos)) {
        if (inicio != final) {
            if (passos <= 0) {
                window.alert('Passo inválido, considerando passo 1')
                passos = 1
            }
            if (inicio < final) {
                for (var j = inicio; j <= final; j += passos) {
                    res.innerHTML += `${j}`
                    if (j + passos <= final) {
                        res.innerHTML += `\u{1F47E} `
                    }
                }
            }
            else {
                for (var i = inicio; i >= final; i -= passos) {
                    res.innerHTML += `${i}`
                    if (i - passos >= final) {
                        res.innerHTML += `\u{1F47E} `
                    }
                }
            }
        }
        else {
            res.innerHTML = `Não foi possível contar, pois o número inicial e o número final são iguais!! <br> Forneça outros números e tente novamente`
        }
    }
    else {
        res.innerHTML = `Não foi possível realizar a contagem pois algum dos dados necessários não foi fornecido!`
    }
}