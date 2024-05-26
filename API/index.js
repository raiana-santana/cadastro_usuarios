import express from "express";
import userRoutes from "./Routes/users.js";
import cors from "cors";

const app = express();

//Utilização do json
app.use(express.json());
app.use(cors());

//Rota do usuário
app.use("/", userRoutes)

//Criação da porta
app.listen(8800)