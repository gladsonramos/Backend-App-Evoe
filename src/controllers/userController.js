import express from "express";
import { getAll, getById, insertUser, userEdit, userDelete } from "../services/userService.js";

const router = express.Router();

router.get('/getAll', getAll)
router.get('/getById/:id', getById)
router.post('/registerUser', insertUser)
router.put('/editUser/:id', userEdit)
router.delete('/deleteUser/:id', userDelete)

export default router



