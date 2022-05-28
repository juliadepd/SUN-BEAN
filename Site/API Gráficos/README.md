#Passo a Passo como inserir no local

- Cole o arquivo script_medida.sql no Mysql Workbench e crie o banco de dados e as tabelas;
- Se precisar mude o arquivo de conexão com o banco de dados dentro de /app/connection.js;
- Veja se as portas estão configuradas de maneira correta;
- Insira o Arduino no Computador e teste dentro do Software arduino se os dados estão chegando OK no Monitor Serial;
- Após isso, no terminal do VS Code, instale os pacotes do node, com 'npm i';
- Quando os pacotes forem instalados, dê 'npm start' e os dados começaram a vir no terminal e uma aba no navegador irá abrir e assim, os dados serão gravados no Banco de Dados Local Mysql - Sensor.

