function validLogin() {

  /* verifica se há algum input vazio */
  if (input_email_login.value == "" || input_senha_login.value == "") {
    span_validacao.innerHTML = "Por favor preencha todos os campos";
    texto_login.style.marginTop = "0px";
    input_email_login.style.border = "thin solid #FF0000";
    input_senha_login.style.border = "thin solid #FF0000";
    

    /* marca a input email */
    if (input_email_login.value !== "") {
      input_email_login.style.border = "none";
    } else {
      input_email_login.style.border = "thin solid #FF0000";
    }

    /* marca a input senha */
    if (input_senha_login.value !== "") {
      input_senha_login.style.border = "none";
    } else {
      input_senha_login.style.border = "thin solid #FF0000";
    }
  } else {
    /* tira as marcações das inputs já preenchidas */
    input_email_login.style.border = "none";
    input_senha_login.style.border = "none";

    /* Valida se o email possui mais de 10 caracteres */
    if (input_email_login.value.length < 10) {
      input_email_login.style.border = "thin solid #FF0000";
      input_senha_login.style.border = "none";
      span_validacao.innerHTML =
        "Email inválido, deve conter no mínimo 10 digitos";
    } else if (input_email_login.value.indexOf("@") == -1) {

    /* Valida se o email possui "@" */
      input_email_login.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = 'Email inválido, deve conter "@"';
    } else if (input_senha_login.value.length < 8) {

    /* Valida se a senha tem mais de 8 caracteres */
      input_senha_login.style.border = "thin solid #FF0000";
      input_email_login.style.border = "none";
      span_validacao.innerHTML = "Senha deve conter no mínimo 8 digitos";
    } else {
      aguardar()
    /* Confirma o login e abre a tela de monitoramento */
      var emailVar = input_email_login.value;
      var senhaVar = input_senha_login.value;
      var spanval = document.getElementById("span_validacao")



      fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar,
        }),
      })
        .then(function (resposta) {
          console.log("ESTOU NO THEN DO entrar()!");
          finalizarAguardar();

          if (resposta.ok) {
            console.log(resposta);
            spanval.innerHTML = ""

            resposta.json().then((json) => {
              console.log(json);
              console.log(JSON.stringify(json));

              sessionStorage.EMAIL_USUARIO = json.email;
              sessionStorage.NOME_USUARIO = json.nome_rs;
              sessionStorage.ID_USUARIO = json.idUsuario;

              setTimeout(function () {
                window.location.href = "../Monitoramento/monitoramento.html";
              }, 100); // apenas para exibir o loading
            });
          } else {
            console.log("Houve um erro ao tentar realizar o login!");

            spanval.innerHTML = "Email ou senha incorretos"

            resposta.text().then((texto) => {
              console.error(texto);
              finalizarAguardar(texto);
            });
          }
        })
        .catch(function (erro) {
          console.log("cheguei aqui" + erro);
        });

      return false;

    }
  }
}