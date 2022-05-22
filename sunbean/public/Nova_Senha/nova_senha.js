function validNovaSenha() {
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
            span_validacao.innerHTML = "Alteração OK";
            span_validacao.style.color = "green"
        }
    }
}