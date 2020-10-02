const Categoria = require('./categoria');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
}, {
    versionKey:false
});

module.exports = mongoose.model("Produto", ProdutoSchema);