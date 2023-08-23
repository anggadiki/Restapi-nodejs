const mongoose = require('mongoose');

const Product = mongoose.model('product', {
    nama: {
        type: String,
        required: true,
    },
    harga: {
        type: Number,
        required: true,
    },
    stok: {
        type: Number,
        required: true,
    },
    jenis: {
        type: String,
    },
    gambar: {
        type: String,
        required: true,
    }
})

module.exports = Product;