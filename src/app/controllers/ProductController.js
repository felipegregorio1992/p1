const ProductsRepository = require('../models/produtos');

class ProductController {
  
  async adcionar(req, res) {
    try {
      const produtos = await ProductsRepository.create(req.body);
      return res.status(200).json(produtos);
    }
    catch (err) {
      return res.status(400).json({ error: 'produto invalido' });
    }
  }

  async mostrar(req, res) {
    const produtos = await ProductsRepository.find();
    return res.status(200).json(produtos);

  }

  async mostraid(req, res) {

    try {
      const { id } = req.params;
      const produtos = await ProductsRepository.findById(id);

      if (!produtos) {
        return res.status(400).json({ error: 'Produto não encontrado' });
      }
      return res.status(200).json(produtos);
    }
    catch (err) {
      return res.status(400).json({ error: 'Produto não encontrado' });
    }
  }

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const produtos = await ProductsRepository.findByIdAndDelete(id);

      if (!produtos) {
        return res.status(400).json({ error: 'Produto não encontrado' });
      }

      return res.status(200).json( {message: "Produto deletado com sucesso"});
    }
    catch (err) {
      return response.status(400).json({ error: 'Produto não encontrado' });
    }


  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const produtos = await ProductsRepository.findByIdAndUpdate(id, req.body);

      if (!produtos) {
        return res.status(400).json({ error: 'Produto não encontrado' });
      }

      return res.status(200).json(produtos);
    }
    catch (err) {
      return res.status(400).json({ error: 'Produto não encontrado' });
    }

}
}

module.exports = new ProductController();
