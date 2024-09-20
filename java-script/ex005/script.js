function horas() {
    var texto = document.querySelector('#txt')
    var imagem_meio = document.querySelector('#photo')
    var horas = new Date().getHours()

    if (horas <= 12 && horas >= 5) {
        texto.innerHTML = `Bom dia, agora são ${horas} horas da manhã`

        imagem_meio.src = 'imagens/manha.jpg'
        document.body.style.background = '#905729'
    }
    else if (horas < 18 && horas > 12) {
        texto.innerHTML = `Boa tarde, agora são ${horas} horas da tarde`

        imagem_meio.src = 'imagens/tarde.jpeg'
        document.body.style.background = '#8BB290'
    }
    else if (horas < 24 && horas >= 18) {
        texto.innerHTML = `Boa noite, agora são ${horas} horas da noite`

        imagem_meio.src = 'imagens/noite.jpg'
        document.body.style.background = '#1B161A'
    }
    else {
        if (horas == 0)
            texto.innerHTML = `Boa noite, agora é meia noite`

        else if (horas > 1)
            texto.innerHTML = `Boa noite, agora são ${horas} horas da madrugada`
        else
            texto.innerHTML = `Boa noite, agora é ${horas} hora da magrudada`

        imagem_meio.src = 'imagens/noite-escura.jpg'
        document.body.style.background = '#101614'
    }


}