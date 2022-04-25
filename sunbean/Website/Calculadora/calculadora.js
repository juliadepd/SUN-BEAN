function calcular_botao() {
  var hect = Number(qtd_hectares.value);
  var saca = Number(cotacao_saca_soja.value);
  var safraanterior = Number(lucro_safra_anterior.value);

    var perda = safraanterior * 0.26 // 26% é a estimativa de perda comparada com o ano passado
    var perda_formatada = perda.toLocaleString("pt-BR", { style: 'currency', currency: "BRL" }); // formatação para moeda "real brasileira"
    var lucroestimado = saca * hect * 55; // lucro que ele vai ter sem o nosso sitema ( numero de sacas previsto para esta safra, por hectares)
    var lucrocomparado = (saca * hect * 80) - lucroestimado; // lucro que ele vai ter com a nossa solução a mais
    var lucroestimado_formatado = lucroestimado.toLocaleString("pt-BR", {
      style: 'currency', currency: "BRL",
    });
    var lucrocomparado_formatado = lucrocomparado.toLocaleString("pt-BR", {
      style: 'currency', currency: "BRL",
    });

    frase.innerHTML = `<p>Previsões para a produtividade da soja no Brasil:<br>
                       <br> Em razão das recentes mudanças climáticas observadas no território brasileiro, especialistas estimam
                       para a safra atual uma perda de até 26% na produtividade média em relação à safra anterior: <br>
                       Você está sujeito a uma perda de até ${perda_formatada}.
                       <br>
                       Você sabia que essa situação pode ser revertida caso o produtor possua um controle sobre os dados de umidade
                       e temperatura do local de plantio? 
                       <br> 
                       É exatamente esse controle que a Sun Bean pode te oferecer.<br>
  
                       <br> A previsão de produtividade média para esta safra é de 55 sacas por hectare. 
                       <br> Assim, o seu ganho atualmente previsto é de aproximadamente: <b>${lucroestimado_formatado}</b>.
  
                       Ao confiar na nossa solução, você poderá obter um ganho de até <b>${lucrocomparado_formatado}</b> a mais, nesta safra. <br>
                       <br>
                       <a href="../Cadastro/cadastro.html"> Cadastre-se</a> e saiba mais!</p>`;

  }

