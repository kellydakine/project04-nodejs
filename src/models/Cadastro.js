import mongoose from "mongoose";

function validaCpf(cpf) {
    return cpf.length === 11;
}


const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, validate: [validaCpf, "Precisa de um cpf válido!"], required: true},
        birthDate: {type: String, validate: [validaAniversario, "Usuário precisa ter mais de 18 anos!"] , required: true},
        email: {type:String, validate: [/[^@\t\r\n]+@[^@\t\r\n]+\.[^@\t\r\n]+/, "Email inválido!"], required:true},
        password: {type: String, validate: [validaSenha, "Esse campo precisa de no mínimo 6 caracteres!"], required: true},
        address: {type: String, required: true},
        number: {type: String, required: true},
        complement: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        country: {type: String, required: true},
        zipCode: {type: String, required: true}
    }
);

const cadastros = mongoose.model("cadastros", usuarioSchema);
export default cadastros;