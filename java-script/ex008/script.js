function tabuada() {
    var numero = document.querySelector('input#num').value
    var tab = document.querySelector('#seltab')
    // innerHTML = ${}
    if (numero.length > 0) {
        let n = Number(numero)
        let i = 0
        tab.innerHTML = ''
        while (i <= 10) {
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${n} X ${i} = ${n * i}`
            tab.appendChild(item)
            i++
        }
    }
    else {
        window.alert('Por favor forneça um número!!')
    }
}