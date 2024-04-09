import userFunctions from "../repository/userRepository.js";

export const getAll = async (req, res) => {
    try {
        const users = await userFunctions.getAll();
        res.json({ sucess: users });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
};

export const getById = async (req, res) => {
    try {
        const idFromParams = req.params.id;
        const users = await userFunctions.getById(idFromParams);
        res.json({ sucess: users });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
}

export const insertUser = async (req, res) => {
    try {
        userFunctions.insertUser(req.body)
        res.json({ sucess: "Usuário registrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir usuário' });
    }
}


export const userEdit = async (req, res) => {
    try {
        userFunctions.editUser(req.params.id, req.body)
        res.json({ sucess: "Dados atualizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao autualisar seus dados' });
    }
}

export const userDelete = async (req, res) => {
    try {
        userFunctions.deleteUser(req.params.id)
        res.json({ sucess: "Dados excluido com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir dados seus dados' });
    }
}

export default {

    getAll,
    getById,
    userEdit,
    userDelete
}