import express from 'express';
import { UsuarioController } from '../controllers/index.js';
import mongoose from '../database/config.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const PORT = process.env.PORT || 3001

const app = express();

// Middlewares para análise de JSON e URL codificada
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/user', UsuarioController);

// Resolve o caminho absoluto para a pasta 'build' do seu aplicativo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildPath = path.resolve(__dirname, '../../evoe/build');


console.log(buildPath)

// Serve os arquivos estáticos do aplicativo
app.use(express.static(buildPath));

// Rota para lidar com todas as outras requisições, devolvendo o arquivo 'index.html'
app.get('*', (req, res) => {
    res.sendFile(`${buildPath}/index.html`);
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});
