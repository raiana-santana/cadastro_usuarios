//Criando a conexão com o banco de dados
import { config } from "dotenv";
config();
import mysql from "mysql"


export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})


