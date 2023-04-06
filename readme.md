# Express-Api-Gateway

Simples iniciativa para facilitar a criação de api gateway utilizando do framework express

## Dependência

ExpressJs

## Exemplo de uso

```javascript
const app = require('express')()
const ApiGateway = require('express-api-gateway');

const api = new ApiGateway(app);
api
    .setPath('/google')
    .setUrl('https://www.google.com.br')
    .builder();

api
    .setPath('/uol')
    .setUrl('https://www.uol.com.br')
    .builder();

app.listen(5000);
```
