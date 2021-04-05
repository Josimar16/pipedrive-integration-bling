## Integração do Pipedrive com Bling usando Nodejs 🚀

---

**_Inicializando_**

Obs:. É necessário que preencha as variaveis de ambiente no arquivo .env

**_Start usando yarn_**

> `yarn start:dev`

**_Start usando npm_**

> `npm run start:dev`

**_Documentação dos endpoints_**

> `http://localhost:3333/api-docs`

---

**_Requisitos funcionais_**

[ x ] Buscar as negociações criadas no Pipedrive com status 'Won';

[ x ] Cadastrar todas as negociações no Bling;

[ x ] Guardar um registro no mongo diário com todos os valores ganhos do dia;

[ x ] Recuperar o registro do mongo passando a data de filtro para visualizar o valor total das negociações por dia.

---

**_Requisitos não funcionais_**

[ x ] Usar nodejs;

[ x ] Usar um banco não relacional (MongoDB);

[ x ] Usar o Pipedrive;

[ x ] Usar o bling;

[ x ] As criações/buscas sejam feitas aparti de um endpoint;

[ x ] Criar rotinas para realizar as criações/buscas;

[ x ] Transformar as negociações em XML antes de enviar para o bling.

---

**_Regra de negócio_**

[ x ] Criar as rotinas no intervalo 22:55 ~ 23:00;

[ x ] Não pode guardar a mesma negociação mais de uma vez no mongo/bling;

[ x ] Guardar o valor total diário das negociações.
