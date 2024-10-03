import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

// exportando get user como solicitado no /routes/users, passando a requisição - e dentro do metodo tem uma const de q de query = select * (indicando que vai pegar todos os campos de from usuarios) e vou pegar o db (basicamento o sql no codigo) fazendo uma query com o primeiro de q (query) com uma função de verificação e retorno de erro (se houver), caso nao haja erro retorna res.status(code200)