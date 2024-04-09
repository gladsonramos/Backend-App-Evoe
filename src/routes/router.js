import express from 'express';

import { Listar, Cadastro, Update, Delete, ListarID } from '../controllers/index.js';

const rota = express.Router();

rota.get('/Listar', Listar);
rota.post('/Cadastro', Cadastro);
rota.put('/Update/:id', Update);
rota.delete('/Delete/:id', Delete);
rota.get('/Listar/:id', ListarID);

export default rota
