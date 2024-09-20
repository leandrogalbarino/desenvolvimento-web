function dados() {
    var ano_nascimento = document.querySelector("#ano").value
    var sexo_selecionado = document.getElementsByName('sexo')
    var res = document.querySelector("#resposta")
    var ano_atual = new Date().getFullYear();

    if (ano_atual >= ano_nascimento) {
        var idade = ano_atual - ano_nascimento

        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (sexo_selecionado[0].checked) {
            if (idade < 13)
                img.setAttribute('src', 'imagens/crianca-homem.jpg')
            else if (idade < 18)
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            else if (idade < 40)
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            else if (idade < 65)
                img.setAttribute('src', 'imagens/idoso-jovem-homem.jpg')
            else
                img.setAttribute('src', 'imagens/idoso-homem.jpg')

        }
        else {
            if (idade < 13)
                img.setAttribute('src', 'imagens/crianca-mulher.jpg')
            else if (idade < 18)
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            else if (idade < 40)
                img.setAttribute('src', 'imagens/adulta-mulher.jpg')
            else if (idade < 65)
                img.setAttribute('src', 'imagens/idosa-jovem-mulher.jpg')
            else
                img.setAttribute('src', 'imagens/idosa-mulher.jpg')
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Você nasceu em ${ano_nascimento} <br>`
        res.innerHTML += `Você tem ${idade} anos <br>`
        res.appendChild(img)
    }
    else {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
}
