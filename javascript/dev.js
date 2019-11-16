import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from "constants";


function maskTel(tel) {

    const telefone = tel.value;
    const Celular = telefone.length === 11;

    let text = "";

    if (Celular) {


        const ddd = telefone.slice(0, 2);
        const parte1 = telefone.slice(2, 7);
        const parte2 = telefone.slice(7, 11);

        // slice, ele pega os valores da posição x, até a y


        text = `(${ddd}) ${parte1}-${parte2}`;
        r_tel.innerHTML = ``;

    } else {

        r_tel.innerHTML = `<b style="color: red"> Numero está incompleto! </b>`;
    }

    Tel.value = text;
}



function confirm() {
    let first_Senha = senha.value;
    let second_Senha = Csenha.value;

    if (first_Senha.length < 6) {
        verifyS.style.display = 'block';
        verifyS.style.background = 'red';
        text.innerHTML = `Senha Fraca`;
    } else if (first_Senha.length >= 6 && second_Senha == first_Senha) {


        verifyS.style.display = 'block';
        verifyS.style.background = 'rgb(12, 240, 12)';
        text.innerHTML = `Senha aceita`;



    } else {

        text.innerHTML = `Senha não compativeis`;
        verifyS.style.display = 'block';
        verifyS.style.background = 'red';

    }
}

function mCPF() {

    var ncpf = cpf_usuario.value;
    const confirm_CPF = ncpf.length == 11;

    let text = "";
    console.log('pçpç');
    if (confirm_CPF) {
        r_cpf.innerHTML = "";
        console.log('entrei no if');
        const cpf1 = ncpf.slice(0, 3);
        const cpf2 = ncpf.slice(3, 6);
        const cpf3 = ncpf.slice(6, 9);
        const cpf4 = ncpf.slice(9, 11);


        // slice, ele pega os valores da posição x, até a y


        text = `${cpf1}-${cpf2}-${cpf3}-${cpf4}`;

    } else {

        r_cpf.innerHTML = `<b style="color: red"> CPF invalido! </b>`
    }
    cpf_usuario.value = text;


}

    function mcep(t , mask){
        var i = t.value.length;
        var saida = mask.substring(1,0);
        var texto = mask.substring(i)
        if (texto.substring(0,1) != saida){
        t.value += texto.substring(0,1);
        } 
            
    }

function verificar() {

 

    r_nome.innerHTML = '';
    r_sobre.innerHTML = '';
    r_email.innerHTML = '';
    r_tel.innerHTML = '';
    r_cpf.innerHTML = '';
    r_ende.innerHTML = '';
    r_cpf.innerHTML = '';


    var nome_u = nome.value;
    var sobre_u = sobrenome.value;
    var email_u = email.value;
    var tel_u = Tel.value;
    var cpf_u = cpf_usuario.value;
    var endereco_u = endereco.value;
    var cep_u = Cep.value;

    
    if (nome_u.length == 0 || sobre_u == '' || email_u == '' || email_u.indexOf('@') == -1) {

      

        if (nome_u.length == 0){
            
            r_nome.innerHTML = `<b style="color: red"> Prencha o campo nome</b>`;
        }

        if (sobre_u.length == 0) {
            r_sobre.innerHTML = `<b style="color: red"> Prencha o campo sobrenome</b>`;
        }

        if (email_u.length == 0 || email.value.indexOf('@') == -1) {
            r_email.innerHTML = `<b style="color: red"> Prencha o campo email certo</b>`;
        }

        if (tel_u.length == 0) {
            r_tel.innerHTML = `<b style="color: red"> Prencha o campo telefone</b>`;
        }

        if (cpf_u.length == 0) {
            r_cpf.innerHTML = `<b style="color: red"> Prencha o campo cpf</b>`;
        }

        if (endereco_u.length == 0) {
            r_ende.innerHTML = `<b style="color: red"> Prencha o campo endereço</b>`;
        }

        if (cep_u.length == 0 ) {
            r_cep.innerHTML = `<b style="color: red"> Prencha o campo cep</b>`;
        } else if (cep_u.length < 9){
            r_cep.innerHTML = `<b style="color: red"> CEP é muito pequeno! </b>`;
        }

    }

}

// ========================================== login js login js ===================================

    function verificar_login() {

        const email_login = emailL.value;
        const senha_login = senhaL.value;

    if (email_login == "" || senha_login == "") {
        
    
        if(email_login.length == 0 || email_login.indexOf('@') == -1 || email_login != "test@gmail.com"){
            alert('Digite um email valido');
        }
        if (senha_login.length == 0 || senha_login.length < 6 || senha_login != "bandtec") {
            alert('Digite uma senha valida');
        }
    }
}