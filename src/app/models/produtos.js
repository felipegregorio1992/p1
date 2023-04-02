const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Produto = new Schema({
    id : ObjectId,
    nome : String,
    valor : Number,
    categoria : String,
    descrcao : String
});

const ProdutoModel = mongoose.model('Produto', Produto);

module.exports = ProdutoModel;
