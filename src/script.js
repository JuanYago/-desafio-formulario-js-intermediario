
const button = document.getElementById('button')
const inputs = document.querySelectorAll('.campo')
const msgErro = document.querySelectorAll('.erro')

button.addEventListener('click', (event) => {
    event.preventDefault()


    
    inputs.forEach((input, indice) => {

        
        if (input.value === '') {
            input.classList.add("borda-vermelha")
            msgErro[indice].classList.add('mostrar')

        } else {
            input.classList.remove('borda-vermelha')
            input.classList.add('borda-verde')
            msgErro[indice].classList.remove('mostrar')
        }
    
    })
})