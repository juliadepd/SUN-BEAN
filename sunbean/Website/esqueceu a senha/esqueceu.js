function validEsqueceu() {
    
    /* verifica se há algum input vazio */
    if (input_email_login.value == '' || input_telefone_login.value == '') {
  span_validacao.innerHTML = 'Por favor preencha todos os campos';
  texto_login.style.marginTop = "0px";
  input_email_login.style.border = "thin solid #FF0000"
  input_telefone_login.style.border = "thin solid #FF0000"
    
    /* marca a input email */
    if (input_email_login.value !== '') {
        input_email_login.style.border = "none"
      } else {
        input_email_login.style.border = "thin solid #FF0000"
      }

      /* marca a input senha */
      if (input_telefone_login.value !== '') {
        input_telefone_login.style.border = "none"
      } else {
        input_telefone_login.style.border = "thin solid #FF0000"
      }
    }

    else {
        /* tira as marcações das inputs já preenchidas */
        input_email_login.border = "none"
        input_telefone_login.style.border = "none"

        /* Valida se o email possui mais de 10 caracteres */
        if (input_email_login.value.length < 10) {
            input_email_login.style.border = "thin solid #FF0000"
            input_telefone_login.style.border = "none"
            span_validacao.innerHTML = 'Email inválido, deve conter no mínimo 10 digitos'
        }

        /* Valida se o email possui "@" */
        else if (input_email_login.value.indexOf("@") == -1) {
          input_email_login.style.border = "thin solid #FF0000"
          span_validacao.innerHTML = 'Email inválido, deve conter "@"'
        }

        /* Valida se a senha tem mais de 10 caracteres */
          else if (input_telefone_login.value.length < 10) {
            input_telefone_login.style.border = "thin solid #FF0000"
            input_email_login.style.border = "none"
            span_validacao.innerHTML = 'Telefone deve conter no mínimo 10 digitos'
        }

        /* Confirma o login e abre a tela de monitoramento */
          else {
            window.location.href="../Validação Esqueceu a senha/validação_esqueceu.html"
        }
    }
}