import { db } from "../db.js";

//Função getUsers
export const getUsers = (_, res) => {
    const request = "SELECT * FROM usuarios"

    //Utilizando a query do SELECT no MySQL e fazendo verificações de erro
    db.query(request, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}