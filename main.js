const form = document.getElementById('form-numero');
const numeroA = document.getElementById('numeroUm');
const numeroB = document.getElementById('numeroDois');
let formEValido = false;

function validaNumero() {
    let eMaior = numeroB.value > numeroA.value ? true : false
    return eMaior == true;
}

form.addEventListener('submit', function (e){
    e.preventDefault();

    const mensagemSucesso = `Sucesso! o número <b>${numeroDois.value}</b> é maior que <b>${numeroUm.value}</b>!`;    

    formEValido = validaNumero()
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        numeroA.value = '';
        numeroB.value = '';

    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numeroB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumero();

    if (!formEValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
}
)