import express from "express";
import cors from "cors";

const app = express();

//Utilização do json
app.use(express.json());
app.use(cors());

//Criação da porta
app.listen(8800)