var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const CategoriaSchema = new Schema({
    nome: String,
}, {
    versionKey:false
});

module.exports = mongoose.model("Categoria", CategoriaSchema);