# My Wallet API

Backend da aplicação **My Wallet**, responsável por autenticação,
gerenciamento de transações financeiras e persistência de dados.

A API fornece endpoints para criação de usuários, autenticação e
controle de despesas.

## Tecnologias

-   Node.js
-   Express
-   MySQL
-   TypeORM
-   JWT
-   Bcrypt
-   Docker

## Funcionalidades

-   Registro de usuários
-   Login com autenticação JWT
-   CRUD de transações financeiras
-   Controle de despesas por usuário

## Estrutura

src/ - controllers - services - repositories - entities - middlewares -
routes - database

## Instalação

Clone o repositório

git clone https://github.com/lucazgbrl/my-wallet-api.git

Entre na pasta

cd my-wallet-api

Instale as dependências

npm install

Configure o arquivo `.env`

DB_HOST= DB_PORT= DB_USER= DB_PASSWORD= DB_DATABASE= JWT_SECRET=

Execute

npm run dev

## Endpoints principais

Auth

POST /auth/login\
POST /auth/register

Transactions

GET /transactions\
POST /transactions\
PUT /transactions/:id\
DELETE /transactions/:id

## Autor

Lucas Gabriel\
https://github.com/lucazgbrl
