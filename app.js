const express = require('express');

require('./utils/db');
const Product = require('./model/service');


const app = express();
const port = 3000;

//middleware
app.use(express.json());

//route default
app.get('/', (req, res) => {
    res.send('test');
})

//route get
app.get('/product', async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
})

//route get product by id
app.get('/product/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const productById = await Product.findById(
            id
        );
        res.status(200).json(productById);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
})

//route post
app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
})

//update data by id
app.put('/product/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({
                message: `cannot find any product with id ${id}`
            })
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
})

//delete data by id
app.delete('/product/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({
                message: `cannot find any product with id ${id}`
            })
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        });
    }
})


app.listen(port, () => {
    console.log(`Server runing in port ${port}`);
})