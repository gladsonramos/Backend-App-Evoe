import express from 'express';
import { UsuarioController } from '../controllers/index.js';
import mongoose from '../database/config.js';
import cors from 'cors';

const PORT = process.env.PORT || 3001

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/user', UsuarioController);


app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});
