
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://gladson:Comentar6507@cluster0.zup2n.mongodb.net/', {
    dbName: "Evoe",
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
});

export default mongoose;

