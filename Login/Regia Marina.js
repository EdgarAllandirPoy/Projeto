const form = document.querySelector('.login-form');

const usernameInput = form.querySelector('input[type="text"]');


const senhaInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
event.preventDefault();

const usuario = usernameInput.value.trim();
const senha = senhaInput.value.trim();

if (usuario === '' || senha === '') {
    alert('Escreva')
} else if (usuario === 'usuario' && senha === 'senha') {
    alert( 'oi')
    location.replace("/Tarefa/Regio Esecito.html", "_self");
} else {
    alert('Burro')
}
});