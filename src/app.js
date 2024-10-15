import express from 'express';
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/cart.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Router
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)


const SERVER_PORT = 8080;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});