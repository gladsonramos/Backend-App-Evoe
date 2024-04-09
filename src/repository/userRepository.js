import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  email: String,
  telefone: String,
  endereco: String,
  preferenciasComunicacao: String,
  sobreVoce: String,
  senha: String
}, { collection: 'users' });


const UserModel = mongoose.model('users', userSchema);

export const getById = async (id) => {
  return await UserModel.findById(id);
}

export const getAll = async () => {
  return await UserModel.find();
}

export const insertUser = async (data) => {
  return await UserModel.insertMany(data);
}

export const editUser = async (userId, newData) => {
  const updatedUser = await UserModel.findOneAndUpdate(
    { _id: userId },
    newData,
    { new: true }
  );
  return updatedUser;
};

export const deleteUser = async (id) => {
  try {
    const result = await UserModel.deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      console.log("Usuário excluído com sucesso.");
    } else {
      console.log("Usuário não encontrado ou não foi excluído.");
    }
    return result;
  
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    throw error; // Lançar o erro para tratamento externo, se necessário
  }
};


const userFunctions = {
  getById,
  getAll,
  insertUser,
  editUser,
  deleteUser
};

export default userFunctions;
