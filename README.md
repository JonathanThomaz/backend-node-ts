Esse é um projeto da NWL da rocketseat

## Install dependencies

Após clonar o projeto:

```bash
npm install
# or
yarn
```
## Set .env variables

Copy the content of '.env sample' on archive '.env' and set as variables.

## Create database

For create tables on database is required run migrations:

```bash
yarn typeorm migration:run
```

## Run server

For run server:

```bash
npm run dev
# or
yarn dev
```

