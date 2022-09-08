import mongoose from "mongoose";

function validaCpf(cpf) {
    return cpf.length === 11;
}

function validaSenha(senha) {
    return senha.length >= 6;
}

function validaAniversario(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18;
}

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, validate: [validaCpf, "Precisa de um cpf válido!"], required: true},
        birthDate: {type: String, validate: [validaAniversario, "Usuário precisa ter mais de 18 anos!"] , required: true},
        email: {type: String, validate: [/[^@\t\r\n]+@[^@\t\r\n]+\.[^@\t\r\n]+/, "Email inválido!"], required:true},
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