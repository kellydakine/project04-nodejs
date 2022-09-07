import cadastros from "../models/Cadastro.js";

class CadastroController {

    static listarCadastros = (req, res) => {
        cadastros.find((err, cadastros) => {
            res.status(200).json(cadastros);
        })
    }

    static listarCadastrosId = (req, res) => {
        const id = req.params.id;
        cadastros.findById(id, (err, cadastros) => {
            if(err) {
                res.status(404).send({message: `${err.message} - ID do usuário não localizada!` })
            } else {
                res.status(200).send(cadastros);
            }
        })
    }

    static criarCadastro = (req, res) => {
        let newCadastro = new cadastros(req.body);
        newCadastro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Erro ao cadastrar novo usuário`});
            } else {
                res.status(201).send(newCadastro.toJSON());
            }
        });
    }

    static attCadastro = (req, res) => {
        const id = req.params.id;
        cadastros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "O cadastro foi realizado com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirCadastro = (req, res) => {
        const id = req.params.id;
        cadastros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Usuário removido com sucesso!"})
            } else {
                res.status(404).send({message: "Usuário não encontrado!"})
            }
        })
    }
}
export default CadastroController; 