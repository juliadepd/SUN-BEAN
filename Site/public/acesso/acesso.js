function validCadastro() {
  var nomeVar = input_nome.value;
  var telefoneVar = input_telefone.value;
  var emailVar = input_email.value;
  var cpfVar = input_cpf.value;
  var senhaVar = input_senha.value;
  var confirmarSenha = input_confirmarSenha.value;
  var idUsuarioLogado = sessionStorage.getItem("ID_USUARIO");

  /* Verifica se há algum input com valor vazio e ajusta o layout para o texto caber na tela caso houver */
  if (
    nomeVar== "" ||
    telefoneVar== "" ||
    emailVar == "" ||
    cpfVar == "" ||
    senhaVar == "" ||
    confirmarSenha == ""
  ) {
    span_validacao.style.marginBottom = "-30px";
    span_validacao.style.marginTop = "10px";
    span_validacao.innerHTML = "Por favor preencha todos os campos";

    /* marca o campo cpf se estiver vazio */
    if (cpfVar != "") {
      input_cpf.style.border = "none";
    } else {
      input_cpf.style.border = "thin solid #FF0000";
    }

    /* marca o campo email se estiver vazio */
    if (email != "") {
      input_email.style.border = "none";
    } else {
      input_email.style.border = "thin solid #FF0000";
    }

    /* marca o campo nome se estiver vazio */
    if (nome != "") {
      input_nome.style.border = "none";
    } else {
      input_nome.style.border = "thin solid #FF0000";
    }

    /* marca o campo senha se estiver vazio */
    if (senha != "") {
      input_senha.style.border = "none";
    } else {
      input_senha.style.border = "thin solid #FF0000";
    }

    /* marca o campo repetir senha se estiver vazio */
    if (confirmarSenha != "") {
      input_confirmarSenha.style.border = "none";
    } else {
      input_confirmarSenha.style.border = "thin solid #FF0000";
    }

    /* marca o campo sobrenome se estiver vazio */
    if (sobrenome != "") {
      input_telefone.style.border = "none";
    } else {
      input_telefone.style.border = "thin solid #FF0000";
    }
  } else {
    /* tira as marcações das inputs já preenchidas */
    input_nome.style.border = "none";
    input_telefone.style.border = "none";
    input_cpf.style.border = "none";
    input_email.style.border = "none";
    input_senha.style.border = "none";
    input_confirmarSenha.style.border = "none";

    /* Valida se o email possui "@" */
    if (input_email.value.indexOf("@") == -1) {
      input_email.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = 'Email inválido, deve conter "@"';
    } else if (input_email.value.length < 10) {

      /* Valida se o email possui mais de 10 caracteres */
      input_email.style.border = "thin solid #FF0000";
      span_validacao.innerHTML =
        "Email inválido, deve conter no mínimo 10 digitos";
    } else if (input_nome.value.length < 6) {

      /* Valida se o nome possui mais de 6 caracteres */
      input_nome.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Nome deve conter no mínimo 6 digitos";
    } else if (input_telefone.value.length < 3) {

      /* Valida se o campo sobrenome possui mais de 3 caracteres */
      input_telefone.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Sobrenome deve conter no mínimo 3 digitos";
    } else if (input_cpf.value.length !== 11) {

      /* Valida se a input cpf possui 11 caracteres */
      input_cpf.style.border = "thin solid #FF0000";
      span_validacao.innerHTML =
        "Valor inválido, digite um valor de 11 numeros";
    } else if (input_senha.value.length < 8) {

      /* Valida se a senha tem mais de 8 caracteres */
      input_senha.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Senha deve conter no mínimo 8 digitos";
    } else if (input_senha.value !== input_confirmarSenha.value) {

      /* Valida se as inputs de senha e confirmar senha são iguais */
      input_senha.style.border = "thin solid #FF0000";
      input_confirmarSenha.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "As senhas não coincidem";
    } else {

      /* Confirma o cadastro*/
      span_validacao.style.marginBottom = "-30px";
      span_validacao.style.marginTop = "10px";

      input_nome.style.border = "none";
      input_telefone.style.border = "none";
      input_cpf.style.border = "none";
      input_email.style.border = "none";
      input_senha.style.border = "none";
      input_confirmarSenha.style.border = "none";

      // Alterar essa parte quando for conectar a API
      span_validacao.innerHTML = "Cadastro ok, aguardando conexão com a API";
      span_validacao.style.color = "green";

      fetch("/usuarios/acesso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nomeVar,
          telefoneServer: telefoneVar,
          emailServer: emailVar,
          cpfServer: cpfVar,
          senhaServer: senhaVar,
          fkTitularServer: idUsuarioLogado
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {
            //cardErro.style.display = "block";

            alert(
              "Cadastro realizado com sucesso! Redirecionando para tela de Login..."
            );

            setTimeout(() => {
              window.location.href = "../Login/login.html";
            }, "100");

            limparFormulario();
          } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
            finalizarAguardar();
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });

      return false;

    }
  }
}