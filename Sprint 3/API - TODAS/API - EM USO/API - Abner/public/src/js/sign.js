// GLOBAIS
let equalPass = document.querySelector('#equal-pass')
let minChar = document.querySelector('#minChar');
let upperCase = document.querySelector('#upperCase');
let numericChar = document.querySelector('#numericChar');
let isEqual = false;
let hasMin = false;
let hasUpper = false;
let hasNumber = false;
let validEmail = false;



// REQUISIÇÃO DE CADASTRO
cadastrar = () => {
    var signData = new URLSearchParams(new FormData(form_cadastro));

    if (hasMin && hasNumber && hasUpper && isEqual) {
        fetch("/empresas/cadastrarEmpresa", {
            method: "POST",
            body: signData
        }).then(function (response) {

            if (response.ok) {
                console.log(response);


            } else {
                console.log('Erro de cadastro!');
                response.text().then(function (error_desc) {
                    console.log(error_desc);
                });

            }
        });
    }
    else {
        alert('Problemas nos campos de login');
    }
}



// CONTROLE DAS ETAPAS DE CADASTRO
let step = 1;
next = () => {

    let firstStep = document.querySelector('.first-step');
    let secondStep = document.querySelector('.second-step');
    var btnCadastro = document.getElementById('signButton');


    if (!firstStep.classList.contains('invisible')) {
        if (validationStepOne()) {
            firstStep.classList.add('invisible');
            firstStep.nextElementSibling.classList.toggle('invisible');
            step++;
        }
    } else {
        switch (step) {
            case 2:
                if (validationStepTwo()) {
                    btnCadastro.value = 'Cadastrar';
                    secondStep.classList.add('invisible');
                    secondStep.nextElementSibling.classList.toggle('invisible');
                    step++
                }
                break;
            case 3:
                btnCadastro.onclick = '';
                btnCadastro.type = 'submit';
                break;
        }
    }
}


// ============================================== VALIDAÇÕES =========================================================

// STEP 1 - VALIDAÇÃO
function validationStepOne() {
    let nomeEmpresa = document.getElementById('nomeEmpresa');
    let cnpj = document.getElementById('cnpjEmpresa');
    let telefoneEmpresa = document.getElementById('telEmpresa');
    let emailEmpresa = document.getElementById('emailEmpresa');

    if (nomeEmpresa.value == '' || nomeEmpresa == undefined) {
        nomeEmpresa.parentElement.classList.toggle('wrong-input');
        nomeEmpresa.value = '';
        nomeEmpresa.placeholder = 'Digite um nome válido';
        nomeEmpresa.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            nomeEmpresa.parentElement.classList.remove('wrong-input');
            nomeEmpresa.style.color = '#FFF';
            nomeEmpresa.placeholder = 'Empresa';
        }, 1500);
        return false;
    }
    else if (!cnpj.value.match(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g)) {
        cnpj.parentElement.classList.toggle('wrong-input');
        cnpj.value = '';
        cnpj.placeholder = 'Digite um CNPJ válido';
        cnpj.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            cnpj.parentElement.classList.remove('wrong-input');
            cnpj.style.color = '#FFF';
            cnpj.placeholder = 'CNPJ';
        }, 1500);
        return false;
    }
    else if (telefoneEmpresa.value == '' || telefoneEmpresa.length > 11 || telefoneEmpresa.length < 10) {
        telefoneEmpresa.parentElement.classList.toggle('wrong-input');
        telefoneEmpresa.value = '';
        telefoneEmpresa.placeholder = 'Digite um telefone válido';
        telefoneEmpresa.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            telefoneEmpresa.parentElement.classList.remove('wrong-input');
            telefoneEmpresa.style.color = '#FFF';
            telefoneEmpresa.placeholder = 'Telefone';

        }, 1500);
        return false;
    }
    else if (!emailEmpresa.value.match(/^[^\s@]+@[^\s@]+$/) || emailEmpresa.value == '') {
        emailEmpresa.parentElement.classList.toggle('wrong-input');
        emailEmpresa.value = '';
        emailEmpresa.placeholder = 'Digite um e-mail válido';
        emailEmpresa.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            emailEmpresa.parentElement.classList.remove('wrong-input');
            emailEmpresa.style.color = '#FFF';
            emailEmpresa.placeholder = 'Digite um email válido';
        }, 1500);
        return false;
    }
    else {
        return true;
    }
}

// STEP 2 - VALIDAÇÃO

function validationStepTwo() {
    let cep = document.getElementById('cepEmpresa');
    let logradouro = document.getElementById('logradouroEmpresa');
    let uf = document.getElementById('selectUF');
    let cidade = document.getElementById('cidadeEmpresa');
    let bairro = document.getElementById('bairroEmpresa');
    let numero = document.getElementById('numeroEmpresa');
    let complemento = document.getElementById('complementoEmpresa');

    if (cep.value == '' || cep == undefined || cep.value.length != 8) {
        cep.parentElement.classList.toggle('wrong-input');
        cep.value = '';
        cep.placeholder = 'Digite um cep válido';
        cep.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            cep.parentElement.classList.remove('wrong-input');
            cep.style.color = '#FFF';
            cep.placeholder = 'CEP';
        }, 1500);
        return false;
    }
    else if (logradouro.value == '' || logradouro == undefined) {
        logradouro.parentElement.classList.toggle('wrong-input');
        logradouro.value = '';
        logradouro.placeholder = 'Digite um logradouro válido';
        logradouro.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            logradouro.parentElement.classList.remove('wrong-input');
            logradouro.style.color = '#FFF';
            logradouro.placeholder = 'Logradouro';
        }, 1500);
        return false;
    }
    else if (uf.value == '' || uf == undefined || uf.value.length != 2) {
        uf.parentElement.classList.toggle('wrong-input');
        uf.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            uf.parentElement.classList.remove('wrong-input');
            uf.style.color = '#FFF';
        }, 1500);
        return false;
    }
    else if (cidade.value == '' || cidade == undefined) {
        cidade.parentElement.classList.toggle('wrong-input');
        cidade.value = '';
        cidade.placeholder = 'Digite uma cidade válida';
        cidade.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            cidade.parentElement.classList.remove('wrong-input');
            cidade.style.color = '#FFF';
            cidade.placeholder = 'Cidade';

        }, 1500);
        return false;
    }
    else if (bairro.value == '' || bairro == undefined) {
        bairro.parentElement.classList.toggle('wrong-input');
        bairro.value = '';
        bairro.placeholder = 'Digite um bairro válido';
        bairro.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            bairro.parentElement.classList.remove('wrong-input');
            bairro.style.color = '#FFF';
            bairro.placeholder = 'Bairro';

        }, 1500);
        return false;
    }
    else if (numero.value == '' || isNaN(numero.value)) {
        numero.parentElement.classList.toggle('wrong-input');
        numero.value = '';
        numero.placeholder = 'Digite um numero válido';
        numero.style.color = 'var(--cancel-color)';
        setTimeout(() => {
            numero.parentElement.classList.remove('wrong-input');
            numero.style.color = '#FFF';
            numero.placeholder = 'Número';
        }, 1500);
        return false;
    }
    else {
        return true;
    }
}



//STEP 3 VALIDAÇÃO
function checkPassword() {
    let password = document.querySelector('#cadastroPassword');
    let passToValidate = document.querySelector('#confirmacaoPassword');
    password = password.value;
    passToValidate = passToValidate.value;

    if (password != '' && password != '') {
        if (password == passToValidate) {
            equalPass.classList.replace('far', 'fas');
            equalPass.classList.add('checked');
            isEqual = true;
        } else {
            equalPass.classList.replace('fas', 'far');
            equalPass.classList.remove('checked');
            isEqual = false;
        }


    } else {
        if (equalPass.classList.contains('checked')) {
            equalPass.classList.replace('fas', 'far');
            equalPass.classList.remove('checked');
            isEqual = false;
        }
    }




    if (isEqual || !isEqual) {
        if (password.length > 3) {
            minChar.classList.replace('far', 'fas');
            minChar.classList.add('checked');
            hasMin = true;
        } else {
            minChar.classList.replace('fas', 'far');
            minChar.classList.remove('checked');
            hasMin = false;
        }

        if (password.toString().search(/[A-Z]/g) != -1) {
            upperCase.classList.replace('far', 'fas');
            upperCase.classList.add('checked');
            hasUpper = true;
        } else {
            upperCase.classList.replace('fas', 'far');
            upperCase.classList.remove('checked');
            hasUpper = false;
        }

        if (password.toString().search(/[0-9]/g) != -1) {
            numericChar.classList.replace('far', 'fas');
            numericChar.classList.add('checked');
            hasNumber = true;
        } else {
            numericChar.classList.replace('fas', 'far');
            numericChar.classList.remove('checked');
            hasNumber = false;
        }




    } else {
        if (minChar.classList.contains('checked')) {
            minChar.classList.replace('fas', 'far');
            minChar.classList.remove('checked');
            hasMin = false;
        }

        if (upperCase.classList.contains('checked')) {
            upperCase.classList.replace('fas', 'far');
            upperCase.classList.remove('checked');
            hasUpper = false;
        }


        if (numericChar.classList.contains('checked')) {
            numericChar.classList.replace('fas', 'far');
            numericChar.classList.remove('checked');
            hasNumber = false;
        }
    }
}

// function clearCadastro() {
//     document.querySelector('#emailEmpresa').value = '';
//     document.querySelector('#userCadastro').value = '';
//     document.querySelector('#cadastroPassword').value = '';
//     document.querySelector('#confirmacaoPassword').value = '';


//     equalPass.classList.replace('fas', 'far');
//     equalPass.classList.remove('checked');
//     isEqual = false;

//     minChar.classList.replace('fas', 'far');
//     minChar.classList.remove('checked');
//     hasMin = false;

//     upperCase.classList.replace('fas', 'far');
//     upperCase.classList.remove('checked');
//     hasUpper = false;


//     numericChar.classList.replace('fas', 'far');
//     numericChar.classList.remove('checked');
//     hasNumber = false;

// }


// essa forma de pegar os elementos é mais precisa, mas funciona da mesma forma que
// aprendemos com o Frizza

let sign_in_btn = document.querySelector('#sign-in-btn');
let sign_up_btn = document.querySelector('#sign-up-btn');
let container = document.querySelector('.container');


// console.log(container)
sign_up_btn.addEventListener('click', function () {
    container.classList.add('sign-up-mode')
});

sign_in_btn.addEventListener('click', function () {
    container.classList.remove('sign-up-mode');
});

