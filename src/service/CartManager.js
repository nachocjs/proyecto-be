import fs from 'fs/promises'
import path from 'path'

const CartsFilePath = path.resolve('data', 'Carts.json')

export default class CartManager {
    constructor() {
        this.carts = []
        this.init()
    }

    async init() {
        try {
            const dataCarrito = await fs.readFile(CartsFilePath, 'utf-8')
            this.carts = JSON.parse(dataCarrito)
        } catch (error) {
            this.carts = []
        }
    } 

     // Metodos
    
     saveToFile() {
        fs.writeFile(CartsFilePath, JSON.stringify(this.carts, null, 2));
    }

    getCartById(cid) {
        1
        if (!cid || isNaN(cid)) {
            return "Por favor, ingresa un ID válido.";
        }
        
        return this.carts.find(cart => cart.cid === Number(cid));

       
    }   

    nuevoCarrito() {
        
        const newCart = {
            cid: this.carts.length ? this.carts[this.carts.length - 1].cid + 1 : 1,
            products: [],
        };
        this.carts.push(newCart)
        this.saveToFile()
        return newCart;
    }


    addProductToCart(cid, pid) {
        const cart = this.getCartById(cid);
    
        if (!cart) {
          throw new Error('Carrito no encontrado');
        }
    
        const existingProduct = cart.products.find(p => p.product === pid);
    
        if (existingProduct) {
          
          existingProduct.quantity += 1;
        } else {
          
          cart.products.push({
            product: pid,
            quantity: 1
          });
        }
    
        this.saveToFile();
        return cart;
      }

      getProductsFromCart(cid) {
        const cart = this.getCartById(cid);
    
        if (!cart) {
          throw new Error('Carrito no encontrado');
        }
    
        return cart.products;
      }
    

      
}