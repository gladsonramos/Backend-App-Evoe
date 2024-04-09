import express from 'express';
import { UsuarioController } from '../controllers/index.js';
import mongoose from '../database/config.js';

const app = express();
app.use(express.json());

app.use('/user', UsuarioController);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
