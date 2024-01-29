// Importação das bibliotecas
import axios from 'axios';
import fs from 'node:fs';
import crypto from 'node:crypto';

// URL da API que gera os tokens
const apiUrl = 'https://api.discord.gx.games/v1/direct-fulfillment';

// Nome do arquivo que os Nitros serão salvos
const outputFile = 'nitros.txt';

// Número de requisições que serão feitas
const numRequests = 10;

// Função para fazer a requisição e retornar o token
async function makeRequest() {
  try {
    const response = await axios.post(apiUrl, {
      partnerUserId: crypto.randomUUID(),
      }, {
      headers: {
        "Origin": "https://www.opera.com",
      },
    })
    return response.data.token;
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error.message);
    return null;
  }
}

// Função para salvar os links dos Nitros no arquivo
async function saveLinks() {
  const tokens = [];

  for (let i = 0; i < numRequests; i++) {
    const token = await makeRequest();
    if (token) {
      tokens.push(token);
      console.log(`Requisição ${i + 1}: Token recebido!`);
    } else {
      console.log(`Requisição ${i + 1}: Ocorreu um erro!`);
    }
  }

  const tokenLinks = tokens.map((token) => `https://discord.com/billing/partner-promotions/1180231712274387115/${token}`);
  const tokenLinksText = tokenLinks.join('\n');

  fs.writeFileSync(outputFile, tokenLinksText, 'utf-8');
  console.log(`Tokens salvos em ${outputFile}`);
}

// Executa a função que salva os links
saveLinks();
