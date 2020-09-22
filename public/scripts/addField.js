// procurar o botão 
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)
// executar uma acao
function cloneField() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // limpar os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    // for do javascript
    fields.forEach(function(field) {
        // pegar o field 
        field.value = ""
    });

    // colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
