let inputCPF = document.getElementById("cpfUsuario");
let inputSenha = document.getElementById("senhaUsuario");
let inputConfirmaSenha = document.getElementById("confirmaSenhaUsuario");
let inputCEP = document.getElementById("cepEntrega");
let inputNumeroCartao = document.getElementById("cartao");
let inputCpfCartao = document.getElementById("cpfTitular");
let inputCVV = document.getElementById("CVVCartao");
let inputEndereco = document.getElementById("endereoUsuario");
let inputConplemento = document.getElementById("complementoUsuario");
let inputBairro = document.getElementById("bairroUsuario");
let inputCidade = document.getElementById("cidadeUsuario");
let inputEstado = document.getElementById("estadoUsuario");

let config = {
    method: "GET"
}

var re_cpf = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;


inputCPF.addEventListener('keyup', (event) => {
    // isNaN(inputCPF.value) ou typeof(inputCPF.value);

    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1));
    }
    if (inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0, 11);
    }
    // inputCPF.value = inputCPF.value.replace(re_cpf, "$1.$2.$3-$4");

});

inputCpfCartao.addEventListener('keyup', (event) => {
    // isNaN(inputCPF.value) ou typeof(inputCPF.value);

    if (isNaN(inputCpfCartao.value)) {
        inputCpfCartao.value = inputCpfCartao.value.substring(0, (inputCpfCartao.value.length - 1));
    }
    if (inputCpfCartao.value.length >= 11) {
        inputCpfCartao.value = inputCpfCartao.value.substring(0, 11);
    }
    // inputCPF.value = inputCPF.value.replace(re_cpf, "$1.$2.$3-$4");

});


inputConfirmaSenha.addEventListener('keyup', () => {
    if (inputConfirmaSenha.value != inputSenha.value) {
        inputConfirmaSenha.setAttribute("class", "form-control is-invalid");

    } else {
        inputConfirmaSenha.setAttribute("class", "form-control is-valid");
    }
});


inputConfirmaSenha.addEventListener('blur', () => {
    if (inputSenha == "" || inputConfirmaSenha.value == "") {
        inputConfirmaSenha.setAttribute("class", "form-control is-invalid");

    }
});
// oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo


function buscarCep(cep) {
    let resposta = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log(dados)
            if (dados.erro) {
                return inputCEP.setAttribute('class', 'form-control is-invalid');
            }
            inputCEP.setAttribute('class', 'form-control is-valid');
            

            inputEndereco.value = dados.logradouro;
            inputConplemento.value = dados.complemento;
            inputBairro.value = dados.bairro;
            inputCidade.value = dados.localidade;
            inputEstado.value = dados.uf;
            
            
        


        });


}

inputCEP.addEventListener('keyup', (event) => {
    // isNaN(inputCPF.value) ou typeof(inputCPF.value);
    if (isNaN(inputCEP.value)) {
        inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length - 1));
    }
    if (inputCEP.value.length >= 8) {
        inputCEP.value = inputCEP.value.substring(0, 8);
        buscarCep(inputCEP.value);
    }
    // inputCPF.value = inputCPF.value.replace(re_cpf, "$1.$2.$3-$4");

});

inputNumeroCartao.addEventListener('keyup', (event) => {
    // isNaN(inputCPF.value) ou typeof(inputCPF.value);

    if (isNaN(inputNumeroCartao.value)) {
        inputNumeroCartao.value = inputNumeroCartao.value.substring(0, (inputNumeroCartao.value.length - 1));
    }
    if (inputNumeroCartao.value.length >= 8) {
        inputNumeroCartao.value = inputNumeroCartao.value.substring(0, 16);
    }
    // inputCPF.value = inputCPF.value.replace(re_cpf, "$1.$2.$3-$4");

});

inputCVV.addEventListener('keyup', (event) => {
    // isNaN(inputCPF.value) ou typeof(inputCPF.value);

    if (isNaN(inputCVV.value)) {
        inputCVV.value = inputCVV.value.substring(0, (inputCVV.value.length - 1));
    }
    if (inputCVV.value.length >= 8) {
        inputCVV.value = inputCVV.value.substring(0, 3);
    }
    // inputCPF.value = inputCPF.value.replace(re_cpf, "$1.$2.$3-$4");

});






