function validEsqueceu() {

  var emailVar = input_email_login.value;
  var cpfVar = input_cpf_login.value;

  fetch("/usuarios/esqueceu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      cpfServer: cpfVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");
      // finalizarAguardar();

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome_rs;
          sessionStorage.ID_USUARIO = json.idUsuario;

          setTimeout(function () {
            window.location.href = "../Nova_Senha/nova_senha.html";
          }, 100); // apenas para exibir o loading
        });
      } else {
        console.log("Houve um erro ao tentar realizar a alteração da senha!");


        // var spanval = document.getElementById("span_validacao")
        // spanval.innerHTML = "Email ou senha incorretos"
        resposta.text().then((texto) => {
          console.error(texto);
          // finalizarAguardar(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log("cheguei aqui" + erro);
    });

  return false;
}
