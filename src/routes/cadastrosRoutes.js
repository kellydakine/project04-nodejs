import express from "express";
import CadastroController from "../controllers/cadastrosController.js";

const router = express.Router();

router
    .get("/api/v1/user", CadastroController.listarCadastros)
    .get("/api/v1/user/busca", CadastroController.findUserByName)
    .get("/api/v1/user/:id", CadastroController.listarCadastrosId)
    .post("/api/v1/user", CadastroController.criarCadastro)
    .put("/api/v1/user/:id", CadastroController.attCadastro)
    .delete("/api/v1/user/:id", CadastroController.excluirCadastro)
export default router;