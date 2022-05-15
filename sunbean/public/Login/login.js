function validLogin() {
    
    /* verifica se há algum input vazio */
    if (input_email_login.value == '' || input_senha_login.value == '') {
  span_validacao.innerHTML = 'Por favor preencha todos os campos';
  texto_login.style.marginTop = "0px";
  input_email_login.style.border = "thin solid #FF0000"
  input_senha_login.style.border = "thin solid #FF0000"
    
    /* marca a input email */
    if (input_email_login.value !== '') {
        input_email_login.style.border = "none"
      } else {
        input_email_login.style.border = "thin solid #FF0000"
      }

      /* marca a input senha */
      if (input_senha_login.value !== '') {
        input_senha_login.style.border = "none"
      } else {
        input_senha_login.style.border = "thin solid #FF0000"
      }
    }

    else {
        /* tira as marcações das inputs já preenchidas */
        input_email_login.border = "none"
        input_senha_login.style.border = "none"

        /* Valida se o email possui mais de 10 caracteres */
        if (input_email_login.value.length < 10) {
            input_email_login.style.border = "thin solid #FF0000"
            input_senha_login.style.border = "none"
            span_validacao.innerHTML = 'Email inválido, deve conter no mínimo 10 digitos'
        }

        /* Valida se o email possui "@" */
        else if (input_email_login.value.indexOf("@") == -1) {
          input_email_login.style.border = "thin solid #FF0000"
          span_validacao.innerHTML = 'Email inválido, deve conter "@"'
        }

        /* Valida se a senha tem mais de 10 caracteres */
          else if (input_senha_login.value.length < 10) {
            input_senha_login.style.border = "thin solid #FF0000"
            input_email_login.style.border = "none"
            span_validacao.innerHTML = 'Senha deve conter no mínimo 10 digitos'
        }

        /* Confirma o login e abre a tela de monitoramento */
          else {
            var emailVar = input_email_login.value;
            var senhaVar = input_senha_login.value;
        
            fetch("/usuarios/autenticar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        emailServer: emailVar,
                        senhaServer: senhaVar
                    })
                }).then(function (resposta) {
                    console.log("ESTOU NO THEN DO entrar()!")
        
                    if (resposta.ok) {
                        console.log(resposta);
        
                        resposta.json().then(json => {
                            console.log(json);
                            console.log(JSON.stringify(json));
        
                            sessionStorage.EMAIL_USUARIO = json.email;
                            sessionStorage.NOME_USUARIO = json.nome_rs;
                            sessionStorage.ID_USUARIO = json.idUsuario;
        
                            setTimeout(function () {
                                window.location.href = "../Monitoramento/monitoramento.html";
                            }, 500); // apenas para exibir o loading
        
                        });
        
                    } else {
        
                        console.log("Houve um erro ao tentar realizar o login!");
        
                        resposta.text().then(texto => {
                            console.error(texto);
                            finalizarAguardar(texto);
                        });
                    }
        
                }).catch(function (erro) {
                    console.log(erro);
                })
        
                return false;
        }
    }
}