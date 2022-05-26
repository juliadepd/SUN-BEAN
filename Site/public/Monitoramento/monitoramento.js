function teste1() {
    var temperatura_real = Number(ipt_temp.value)
    medida_temp.innerHTML = `${temperatura_real}ºC`

    var acima = temperatura_real - 30
    var abaixo = 20 - temperatura_real

   
    if (temperatura_real >= 21 && temperatura_real <= 29){
        tooltip_temp.style = "background-color: green"
        text_temp.innerHTML = "Temperatura adequada"
        temp_alerta.src = "../assets/Identidade Visual/tudo-certo.png" 
        temp_alerta.style = "width: 78px; margin-top: 8px"
    }
    else if (temperatura_real > 29 && temperatura_real <= 30 || temperatura_real >= 20 && temperatura_real < 21 ) {
        tooltip_temp.style = "background-color: orange"
        text_temp.innerHTML = "Alerta - Risco de ultrapassagem do limite"
        temp_alerta.src = "../assets/Identidade Visual/alerta.png" 
        temp_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"

    }
    else if (temperatura_real > 80) {
        tooltip_temp.style = "background-color: red"
        text_temp.innerHTML = `${acima}ºC acima do limite`
        temp_alerta.src = "../assets/Identidade Visual/alerta.png" 
        temp_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }

    else if (temperatura_real < 20) {
        tooltip_temp.style = "background-color: red"
        text_temp.innerHTML = `${abaixo}ºC abaixo do limite`
        temp_alerta.src = "../assets/Identidade Visual/alerta.png" 
        temp_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }

    
}

function teste2() {
    var umidade_real = Number (ipt_umid.value)
    medida_umid.innerHTML = `${umidade_real}%`

    var acima2 = umidade_real - 75
    var abaixo2 = 56 - umidade_real


    if (umidade_real > 60 && umidade_real <= 70){
        tooltip_umid.style = "background-color: green"
        text_umid.innerHTML = `Umidade adequada`
        umid_alerta.src = "../assets/Identidade Visual/tudo-certo.png" 
        umid_alerta.style = "width: 78px; margin-top: 8px"

    }
    else if (umidade_real > 70 && umidade_real <= 75 || umidade_real >= 56 && umidade_real <= 60 ) {
        tooltip_umid.style = "background-color: orange"
        text_umid.innerHTML = `Alerta - Risco de ultrapassagem do limite`
        umid_alerta.src = "../assets/Identidade Visual/alerta.png" 
        umid_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }
    else if (umidade_real < 56) {
        tooltip_umid.style = "background-color: red"
        text_umid.innerHTML = `${abaixo2}% abaixo do limite`
        umid_alerta.src = "../assets/Identidade Visual/alerta.png" 
        umid_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }
    else if (umidade_real > 75 ) {
        tooltip_umid.style = "background-color: red"
        text_umid.innerHTML = `${acima2}% acima do limite`
        umid_alerta.src = "../assets/Identidade Visual/alerta.png" 
        umid_alerta.style = "width: 90px; margin-top: 18px; margin-bottom: 5px"
    }
    
    
}



