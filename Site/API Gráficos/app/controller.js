const express = require('express');
const { ArduinoData } = require('./serial')
const router = express.Router();
const {connection, getConnAzure} = require('./connection');

router.get('/temperature', (request, response, next) => {

    let sum = ArduinoData.ListTemp.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoData.ListTemp.length).toFixed(2);

    response.json({
        data: ArduinoData.ListTemp,
        total: ArduinoData.ListTemp.length,
        average: isNaN(average) ? 0 : average
    });

});

router.get('/humidity', (request, response, next) => {

    let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoData.List.length).toFixed(2);

    response.json({
        data: ArduinoData.List,
        total: ArduinoData.List.length,
        average: isNaN(average) ? 0 : average
    });

});

router.get('/chave',(request, response, next) => {
    let sum = ArduinoData.ListSwitch.reduce((a,b) => a + b,0);
    let average = (sum / ArduinoData.ListSwitch.length).toFixed();

    response.json({
        data: ArduinoData.ListSwitch,
        total: ArduinoData.ListSwitch.length,
        average: isNaN(average) ? 0 : average
    });
});

router.get('/lux',(request, response, next) => {
    let sum = ArduinoData.ListLux.reduce((a,b) => a + b,0);
    let average = (sum / ArduinoData.ListLux.length).toFixed(2);

    response.json({
        data: ArduinoData.ListLux,
        total: ArduinoData.ListLux.length,
        average: isNaN(average) ? 0 : average
    });
});

// sendData();
// function sendData(){
//     var http = new XMLHttpRequest();
//     http.open('POST','http://localhost:3000/api/sendData', false);
//     //open(metodo,url[,async[,user[,password]]])
//     http.send(null);
// }

router.post('/sendData', (request, response) => {
    let temperatura = ArduinoData.ListTemp[ArduinoData.ListTemp.length - 1];
    let umidade = ArduinoData.List[ArduinoData.List.length - 1];
    let lux = ArduinoData.ListSwitch[ArduinoData.ListSwitch.length - 1];
    let temp2 = ArduinoData.ListLux[ArduinoData.ListLux.length - 1];
    let chave = ArduinoData.ListChave[ArduinoData.ListChave.length - 1];

    /**
     * Para inserir apenas temperatura utilize o bloco abaixo
     */
    // var sql = "INSERT INTO medida(temp) VALUES(?)"; 
    // let values = [temperatura];

    //  Para inserir todos os valores utilize o bloco abaix
    var sql = "Insert INTO medida(fkPlantacao, fkSensor,temperatura, umidade) VALUES(?,?,?,?)";
    let values = [1,1,temperatura,umidade];
    // let lugar = 'dev';
    let lugar = 'prod';
      if(lugar == 'prod'){
        sql = `Insert INTO medida(fkSensor, fkPlantacao, temperatura, umidade) VALUES(1,1, '${temperatura}', ${umidade})`;
          getConnAzure(sql).then(val=>console.log(val))
      }else{
          connection.query(sql, values, function(err, result){
            if(err) throw err;
            console.log("Medidas inseridas: " + result.affectedRows)
          });
    }
    response.sendStatus(200);
});

module.exports = router;