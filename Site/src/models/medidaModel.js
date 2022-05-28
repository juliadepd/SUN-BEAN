var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                         temperatura, 
                     umidade, 
                        data_hora,
                        CONVERT(varchar, data_hora, 108) as momento_grafico
                    from medida
                    where fkSensor = ${idAquario}
                    order by idMedida desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
           temperatura, 
         umidade, 
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                    from medida
                    where fkSensor = ${idAquario}
                    order by idMedida desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
           temperatura, 
         umidade, 
                        CONVERT(varchar, data_hora, 108) as momento_grafico, 
                        fkSensor 
                        from medida where fkSensor = ${idAquario} 
                    order by idMedida desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
           temperatura, 
         umidade, 
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico, 
                        fkSensor 
                        from medida where fkSensor = ${idAquario} 
                    order by idMedida desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
