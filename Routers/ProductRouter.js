import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductsByID, updateProduct } from '../Controllers/ProductController.js';

const router = express.Router();

router.get('/getdata',getAllProducts);
router.get('/getdata/:id',getProductsByID);
router.post('/create',createProduct);
router.put('/update/:id',updateProduct);
router.delete('/delete/:id',deleteProduct);

export default router;