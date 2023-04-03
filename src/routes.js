const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');

const router = Router();

router.post('/adicionar_produtos', ProductController.adcionar);
router.get('/mostrar', ProductController.mostrar);
router.get('/mostrar/:id', ProductController.mostraid);
router.delete('/deletar/:id', ProductController.deletar);
router.put('/atualizar/:id', ProductController.atualizar);

module.exports = router;
