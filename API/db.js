//Criando a conexão com o banco de dados
import mysql from "mysql";
import { config } from 'dotenv';
config();


export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

