function logar(){
    let usuario = document.getElementById('inputUsuario');
    let senha = document.getElementById('inputSenha')

    if(!usuario.value.length){
        window.alert('Usuário não informado')
    } else if(!senha.value.length){
        window.alert('Senha não informada')
    }
    else {
        redirecionarTela()  
    }
}

function cadastrar(){
    let nome = document.getElementById('inputNome')
    let email = document.getElementById('inputEmail')
    let senha = document.getElementById('inputSenha')
    let confirmaSenha = document.getElementById('inputSenhaConfirma')
    let termosChecked = document.getElementById('inputCheckTermos')
    
    if(!nome.value.length){
        window.alert('O campo Nome não foi informado')
    } else if(!email.value.length){
        window.alert('O campo E-mail não foi informado')
    } else if(!senha.value.length){
        window.alert('O campo Senha não foi informado')
    } else if(senha.value != confirmaSenha.value){
        window.alert('O campo Senha e o campo Confirmar Senha estão diferentes')
    } else if(!termosChecked.checked){
        window.alert('Para prosseguir você precisa concordar com os termos de uso')
    } else {
        redirecionarTela()
    }    

    /*if(nome.value.length == 0 && email.value.length == 0 && senha.value.length == 0 ){
        window.alert('Um ou mais campos não preenchidoos')
    } else {
        redirecionarTela()  
    }*/
}

function redirecionarTela(){
    location.replace('principal.html')
}
