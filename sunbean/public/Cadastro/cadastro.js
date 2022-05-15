function validCadastro() {
  var nomeVar = input_nome_razao.value;
  var telVar = input_tel.value;
  var senhaVar = input_senha.value;
  var cpfVar = input_cpf_cnpj.value;
  var emailVar = input_email.value;
  var confirmacaoSenhaVar = input_repetir_senha.value;
  var idUsuarioLogado = sessionStorage.getItem("ID_USUARIO");

  /* Verifica se há algum input com valor vazio e ajusta o layout para o texto caber na tela caso houver */
   if (input_nome_razao.value == '' || input_tel.value == '' || input_senha.value == '' || input_cpf_cnpj.value == '' || input_email.value == '' || input_repetir_senha.value == '') {
     span_validacao.innerHTML = 'Por favor preencha todos os campos';
     idcontainer2.style.marginTop = "-25px";
     texto_cadastro.style.marginBottom = "30px"

     /* marca o campo cpf/cnpj se estiver vazio */
     if (input_cpf_cnpj.value !== '') {
       input_cpf_cnpj.style.border = "none"
     } else {
       input_cpf_cnpj.style.border = "thin solid #FF0000"
     }

     /* marca o campo email se estiver vazio */
     if (input_email.value !== '') {
       input_email.style.border = "none"
     } else {
       input_email.style.border = "thin solid #FF0000"
     }

     /* marca o campo nome/razão social se estiver vazio */
     if (input_nome_razao.value !== '') {
       input_nome_razao.style.border = "none"
     } else {
       input_nome_razao.style.border = "thin solid #FF0000"
     }

     /* marca o campo senha se estiver vazio */
     if (input_senha.value !== '') {
       input_senha.style.border = "none"
     } else {
       input_senha.style.border = "thin solid #FF0000"
     }

     /* marca o campo repetir senha se estiver vazio */
     if (input_repetir_senha.value !== '') {
       input_repetir_senha.style.border = "none"
     } else {
       input_repetir_senha.style.border = "thin solid #FF0000"
     }

     /* marca o campo telefone se estiver vazio */
     if (input_tel.value !== '') {
       input_tel.style.border = "none"
     } else {
       input_tel.style.border = "thin solid #FF0000"
     }
   }

   else {
     /* tira as marcações das inputs já preenchidas */
     input_tel.style.border = "none"
     input_senha.style.border = "none"
     input_repetir_senha.style.border = "none"
     input_nome_razao.style.border = "none"
     input_email.style.border = "none"
     input_cpf_cnpj.style.border = "none"

     /* Valida se o email possui "@" */
     if (input_email.value.indexOf("@") == -1) {
       input_email.style.border = "thin solid #FF0000"
       span_validacao.innerHTML = 'Email inválido, deve conter "@"'
     }

     /* Valida se o email possui mais de 10 caracteres */
     else if (input_email.value.length < 10) {
       input_email.style.border = "thin solid #FF0000"
       span_validacao.innerHTML = 'Email inválido, deve conter no mínimo 10 digitos'
     }

     /* Valida se o nome possui mais de 6 caracteres */
     else if (input_nome_razao.value.length < 6) {
       input_nome_razao.style.border = "thin solid #FF0000"
       span_validacao.innerHTML = 'Nome deve conter no mínimo 6 digitos'
     }

     /* Valida se a input cpf/cnpj possui 11 ou 14 caracteres */
     else if (input_cpf_cnpj.value.length !== 11 && input_cpf_cnpj.value.length !== 14) {
       input_cpf_cnpj.style.border = "thin solid #FF0000"
       span_validacao.innerHTML = 'Valor inválido, digite um valor de 11 (cpf) ou 14 (cnpj) numeros'
     }

     /* Valida se o número de telefone possui ao menos 10 digitos */
     else if (input_tel.value.length < 10 || input_tel.value.length > 11) {
       input_tel.style.border = "thin solid #FF0000"
       span_validacao.innerHTML = 'Telefone deve conter no mínimo 10 digitos e máximo de 11 digitos (contando com DDD)'
     }

     /* Valida se a senha tem mais de 8 caracteres */
     else if (input_senha.value.length < 8) {
       input_senha.style.border = "thin solid #FF0000"
       span_validacao.innerHTML = 'Senha deve conter no mínimo 8 digitos'
     }

     /* Valida se as inputs de senha e confirmar senha são iguais */
     else if (input_senha.value !== input_repetir_senha.value) {
       input_senha.style.border = "thin solid #FF0000"
       input_repetir_senha.style.border = "thin solid #FF0000"
       span_validacao.innerHTML = 'As senhas não coincidem'
     }

     /* Valida se o checkbox de termos de uso foi aceito */
     else if (chk_termos.checked == false) {
       span_validacao.innerHTML = 'Você deve concordar com os nossos termos de uso antes de prosseguir'
       chk_termos.style.outline = "1px solid red"
       chk_termos.style.outlineOffset = "-1px"
     }

     /* Confirma o cadastro e abre a tela de monitoramento */
     else {
       input_tel.style.border = "none"
       input_senha.style.border = "none"
       input_repetir_senha.style.border = "none"
       input_nome_razao.style.border = "none"
       input_email.style.border = "none"
       input_cpf_cnpj.style.border = "none"

       fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            telServer: telVar,
            senhaServer: senhaVar,
            cpfServer: cpfVar,
            emailServer: emailVar,
            fkTitularServer: idUsuarioLogado
        })
    }).then(function (resposta) {
    
        console.log("resposta: ", resposta);
    
        if (resposta.ok) {
            //cardErro.style.display = "block";
    
            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");
    
            setTimeout(() => {
                window.location.href = "../Login/login.html";
            }, "2000")
            
            limparFormulario();
            
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
       
    });
    
    return false;

     }
   }

   
}


