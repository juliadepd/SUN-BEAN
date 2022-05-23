function validNovaSenha() { 
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    
    span_validacao.innerHTML = ""
    
    /* verifica se há algum input vazio */
    if (input_email.value == "" || input_senha.value == "" || input_confirmar_senha.value == "") {
        span_validacao.innerHTML = "Por favor preencha todos os campos";
        input_email.style.border = "thin solid #FF0000";
        input_senha.style.border = "thin solid #FF0000";
        input_confirmar_senha.style.border = "thin solid #FF0000"

        /* marca a input email */
        if (input_email.value !== "") {
            input_email.style.border = "none";
        } else {
            input_email.style.border = "thin solid #FF0000";
        }

        /* marca a input senha */
        if (input_senha.value !== "") {
            input_senha.style.border = "none";
        } else {
            input_senha.style.border = "thin solid #FF0000";
        }

        /* marca a input confirmar senha */
        if (input_confirmar_senha.value !== "") {
            input_confirmar_senha.style.border = "none";
        } else {
            input_confirmar_senha.style.border = "thin solid #FF0000";
        }

    } else {
        /* tira as marcações das inputs já preenchidas */
        input_email.style.border = "none";
        input_senha.style.border = "none";
        input_confirmar_senha.style.border = "none";

        /* Valida se o email possui mais de 10 caracteres */
        if (input_email.value.length < 10) {
            input_email.style.border = "thin solid #FF0000";
            input_senha.style.border = "none";
            span_validacao.innerHTML =
                "Email inválido, deve conter no mínimo 10 digitos";
        } else if (input_email.value.indexOf("@") == -1) {
            /* Valida se o email possui "@" */
            input_email.style.border = "thin solid #FF0000";
            span_validacao.innerHTML = 'Email inválido, deve conter "@"';
        } else if (input_senha.value.length < 8) {
            /* Valida se a senha tem mais de 8 caracteres */
            input_senha.style.border = "thin solid #FF0000";
            input_email.style.border = "none";
            span_validacao.innerHTML = "Senha deve conter no mínimo 8 digitos";
        } else if (input_confirmar_senha.value != input_senha.value) {
            /* Valida se a senha tem mais de 8 caracteres */
            span_validacao.innerHTML = "As senhas não coincidem";
            input_senha.style.border = "thin solid #FF0000";
            input_confirmar_senha.style.border = "thin solid #FF0000";
        } else {
            /* Confirma o login*/
            // span_validacao.innerHTML = "Alteração OK";
            // span_validacao.style.color = "green"
            aguardar()

            

            fetch("/usuarios/novasenha", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  // crie um atributo que recebe o valor recuperado aqui
                  // Agora vá para o arquivo routes/usuario.js
                  emailServer: emailVar,
                  senhaServer: senhaVar,
                }),
              })
                .then(function (resposta) {
                  console.log("resposta: ", resposta);
          
                if(emailVar != sessionStorage.getItem('EMAIL_USUARIO')){
                span_validacao.innerHTML = "Email incorreto"
                finalizarAguardar();
                }

                  else if (resposta.ok) {
                    span_validacao.innerHTML = ""
                    //cardErro.style.display = "block";
          
                    // alert("Senha atualizada com sucesso!!");
                    finalizarAguardar();
          
                    setTimeout(() => {
                      window.location.href = "../Login/login.html";
                    }, "100");
          
                    limparFormulario();
                  } else {
                    throw "Houve um erro ao tentar atualizar senha!...";
                    console.log(resposta);
                  }
                })
                .catch(function (resposta) {
                  console.log(`#ERRO: ${resposta}`);
                });
          
              return false;
        }
    }
}