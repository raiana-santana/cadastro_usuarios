import express from "express";
import { getUsers } from "../Controllers/user.js";

//Indicando que é uma rota
const router = express.Router();

//Chamando a função getUsers, que está em user.js no Cotrollers
router.get("/", getUsers)

export default router;