// Importação das bibliotecas
import axios from 'axios';
import fs from 'fs';

// URL da API que gera os tokens
const apiUrl = 'https://api.discord.gx.games/v1/direct-fulfillment';

// Nome do arquivo que os Nitros serão salvos
const outputFile = 'nitros.txt';

// Número de requisições que serão feitas
const numRequests = 10;

// Função para gerar um partnerUserId aleatório usando caracteres aleatórios
async function generateRandomPartnerUserId(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Função para fazer a requisição e retornar o token
async function makeRequest() {
  const requestData = {
    partnerUserId: await generateRandomPartnerUserId(64),
  };

  try {
    const response = await axios.post(apiUrl, requestData);
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
