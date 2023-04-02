// const { v4 } = require('uuid');
// const produtos = require('../models/produtos');


// class produtos_config{

//     async deposito(req, res){
//         const Produto = await produtos.create(req.body);
//         return res.status(200).json(Produto);  
//     }

//     async deposito_id(id){
//         const produto = await produtos.findById(id);
//         return produto;
//     }

//     async atualizar(id, nome, valor, categoria, descricao){
//         const produto = await produtos.findByIdAndUpdate(id, {nome, valor, categoria, descricao});
//         return produto;
//     }

//     async deletar(id){
//         const produto = await produtos.findByIdAndDelete(id);
//         return produto;
//     }

//     async criar(nome, valor, categoria, descricao){
//         const produto = await produtos.create({nome, valor, categoria, descricao});
//         return produto;
//     }



// }


// module.exports = new produtos_config();
