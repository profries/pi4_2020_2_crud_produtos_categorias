const Categoria = require('../model/categoria')

exports.listar = (req, res) => { 
    Categoria.find({},(err, Categorias) => {
        if(err){
            res.status(500).send(err);
        }
        res.json(Categorias);
    });
}


exports.inserir = (req, res) => {
    let novoCategoria = new Categoria(req.body);        
    novoCategoria.save((err, Categoria) => {
        if(err){
            res.send(err);
        }    
        res.status(201).json(Categoria);
        
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.id;
    let CategoriaAtualizar = req.body;
    Categoria.findOneAndUpdate({ _id: id }, CategoriaAtualizar, { new: true }, (err, CategoriaAtual) => {
        if(err){
            res.send(err);
        }
        res.json(CategoriaAtual);
    });
}

exports.deletar = (req, res) => {
    let id = req.params.id;
    Categoria.findOneAndDelete({ _id: id }, (err, CategoriaAtual) => {
        if(err){
            res.send(err);
        }
        res.json(CategoriaAtual);
    });
}

exports.buscarPorId = (req, res) => {
    let id = req.params.id;
    Categoria.findById(id, (err, Categoria) => {
        if(err)
            res.status(500).send(err);        
        res.json(Categoria);
    });    
}
