# Nestia with Prisma Backend Template

[backend-template](https://github.com/gun7728/backend-template) framework TypeScript starter repository.

## Project setup
- ${\textsf{\color{red}If you are using Verdaccio, you need to update your .npmrc file}}$	
  <br/>
  - change your own url


```bash
$ npm install
```

<br/>

## Project start
```bash
$ npm run start:dev

# You can see db use prisma stuiod
$ npx prisma stuido

# You can see swagger /api add url
$ http://localhost:3000/api
```

<br/>

## Default init .env 
${\textsf{\color{red}If you don’t use the vault, skip this. Just Create .env}}$	

- ${\textsf{\color{red}Change pacakge.json vault:init to your vault}}$	
  <br/>
  - npx dotenv-vault@latest new vlt_your_own_vault_url

```bash
$ npm run vault:init
$ npm run vault:pull
```

<br/>

## Default init Prisma

```bash
# Prisma needs the env! 
# Do the init env first

$ npm run prisma:init
$ npm run prisma:sync
```

<br/>

## Create SDK
- ${\textsf{\color{red}Change pacakge.json sdk:publish to your verdaccio}}$	
  <br/>
  - cd ./packages/api/lib/ && npm publish --registry your_own_vardaccio_url

- ${\textsf{\color{red}Change pacakge.publish.json}}$	
  <br/>
  - Change, and later, after making any modifications, run sdk:json again to update the changes

```bash
# Need to login npm or your Verdaccio

#root directory
$ mkdir -p packages/api

$ npm run sdk:build


#If you update the package.publish.json, run this 
$ npm run sdk:json
$ npm run sdk:publish
```


<br/>

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```