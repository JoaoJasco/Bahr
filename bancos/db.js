const mysql = require('mysql2');
require('dotenv').config(); // Carregar variáveis do .env

// Criar pool de conexões para otimizar as conexões ao banco
const db = mysql.createPool({
  host: process.env.193.203.175.156,        // Endereço do banco de dados
  user: process.env.u591638367_root,        // Usuário do banco de dados
  password: process.env.JasTecz69#$@,// Senha do banco de dados
  database: process.env.u591638367_bahr,    // Nome do banco de dados
  connectionLimit: 10,              // Número máximo de conexões simultâneas
});

// Testar a conexão
db.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados MySQL bem-sucedida!');
  connection.release(); // Liberar a conexão de teste
});

module.exports = db;