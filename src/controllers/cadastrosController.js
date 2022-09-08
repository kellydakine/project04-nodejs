import cadastros from "../models/Cadastro.js";

class CadastroController {
    static listarCadastros = (req, res) => {
        cadastros.find((_, cadastros) => {
            const {page = 1, limit = 3} = req.query;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const resultUsers = cadastros.slice(startIndex, endIndex);
            res.json(resultUsers);
        }).select("-password");
    }

    static findUserByName = (req, res) => {
        const name = req.query.name;
        cadastros.find({'name': {$regex: name, $options: 'i'}}, {}, (err, cadastros) => {
            err 
                ? res.status(404).send({message: `${err.message} - Usuário não encontrado!`})
                : res.status(200).send(cadastros);
        }).select("-password");
    }

    static listarCadastrosId = (req, res) => {
        const id = req.params.id;
        cadastros.findById(id, (err, cadastros) => {
            err 
                ? res.status(404).send({message: `ID do usuário não localizada!` })
                : res.status(200).send(cadastros);
        }).select("-password");
    }

    static criarCadastro = (req, res) => {
        let newCadastro = new cadastros(req.body);
        newCadastro.save((err) => {
            err 
                ? res.status(500).send({message: `Erro ao cadastrar novo usuário`})
                : res.status(201).send(newCadastro.toJSON());
        });
    }

    static attCadastro = (req, res) => {
        const id = req.params.id;
        cadastros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            !err 
                ? res.status(200).send({message: "O cadastro foi realizado com sucesso!"})
                : res.status(404).send({message: `Não foi possível localizar esse usuário!`});
        })
    }

    static excluirCadastro = (req, res) => {
        const id = req.params.id;
        cadastros.findByIdAndDelete(id, (err) => {
            !err
                ? res.status(200).send({message: `Usuário removido com sucesso!`})
                : res.status(404).send({message: "Usuário não encontrado, favor verificar novamente!"});
        })
    }
}
export default CadastroController; 