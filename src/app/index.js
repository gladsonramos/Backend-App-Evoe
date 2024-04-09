import express from 'express';
import { UsuarioController } from '../controllers/index.js';
import mongoose from '../database/config.js';

const app = express();
const PORT = process.env.PORT || 3001; // Define a porta com base na variável de ambiente PORT ou usa a porta 3001 como padrão

app.use(express.json());

app.use('/user', UsuarioController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
