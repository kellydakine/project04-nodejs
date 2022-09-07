import express from "express";
import CadastroController from "../controllers/cadastrosController.js";

const router = express.Router();

router
    .get("/api/v1/users", CadastroController.listarCadastros)
    .get("/api/v1/user/:id", CadastroController.listarCadastrosId)
    .post("/api/v1/users", CadastroController.criarCadastro)
    .put("/api/v1/user/:id", CadastroController.attCadastro)
    .delete("/api/v1/user/:id", CadastroController.excluirCadastro)
export default router;