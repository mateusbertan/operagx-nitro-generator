# Gerador de Nitros da promoção do Opera GX
Programa simples para gerar links da [promoção de 1 mês de Nitro para usuários de Opera GX]((https://support.discord.com/hc/pt-br/articles/19822382831767-1-Month-Discord-Nitro-for-Opera-GX-Users-2023-Promo-FAQ))!

## Funcionamento

Nessa promoção do Discord, quando o usuário resgata o Nitro na tela do OperaGX, é feito uma requisição para uma API que recebe uma string chamada de partnerUserId e retorna um token, esse token é usado na URL do Nitro, que depois pode ser resgatado em uma conta do Discord. O que o programa faz é basicamente fazer essas requisições usando um partnerUserId criado com caracteres aleatórios, o que gera um token válido e pode ser usado em uma URL para resgatar o Nitro.

> **Aviso:** Este programa foi desenvolvido para fins educacionais. Não me responsabilizo pelo seu uso indevido.


## Configurações

No **index.js** você pode configurar algumas coisas, como o nome do arquivo e número de requisições que serão feitas.
```js
// Nome do arquivo que os Nitros serão salvos
const outputFile = 'nitros.txt';

// Número de requisições que serão feitas
const numRequests = 10;
```

## Uso

1. Instale as depedências.
```console
$ npm i
```
2. Execute o programa.
```console
$ npm start
```

> **Importante:** Depois de um tempo os links expiram, por isso você deve resgata-los ou mandar para outra pessoa resgatar o mais rápido possível. Além disso, depois de ir para segunda página do link em uma conta aquele link só poderá ser usado naquela conta e não expirará mais.
