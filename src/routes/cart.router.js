import { Router } from 'express'
import CartManager from '../service/CartManager.js';

const router = Router();
const cartManager = new CartManager();

// POST
router.post('/', async (req, res) =>{

    try {
        const newCart = cartManager.nuevoCarrito();
        res.status(201).json(newCart);
      } catch (error) {
        console.log(error);
      }
    

})

//POST 

router.post('/:cid/product/:pid', (req, res) => {
    try {
      const cid = parseInt(req.params.cid);
      const pid = parseInt(req.params.pid);
      const updatedCart = cartManager.addProductToCart(cid, pid);
      res.json(updatedCart);
    } catch (error) {
        console.log(error);
    }
  });

//GET

router.get('/:cid', (req, res) => {
    try {
      const cid = parseInt(req.params.cid);
      const products = cartManager.getProductsFromCart(cid);
      res.status(201).json({ cart: products });
    } catch (error) {
        console.log(error);
    }
  });


export default router;