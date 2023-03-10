window.addEventListener('DOMContentLoaded', () => {
    const identifar = document.querySelector('div.c-input-wrap.empty > input')
    let identifarValue = "";
    const identClick = document.querySelector('button.js-container')
    identClick.addEventListener('click', () => {
        identifarValue = identifar.value
        console.log(identifarValue);
    })
})