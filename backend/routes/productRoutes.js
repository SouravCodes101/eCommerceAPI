import express from 'express';
import products from '../data/products.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  console.log('Requested product ID:', productId);

  const product = products.find((product) => product._id === productId);
  console.log('Found product:', product);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

export default router;
