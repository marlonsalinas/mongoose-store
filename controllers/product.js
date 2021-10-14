const express = require('express');
const router = express.Router();
const products = require('../models/products');

//Controllers 

//Index
router.get('/products', (req, res) => {
    products.find({}, (error, foundProducts) => {
        res.render('index.ejs', {
            products: foundProducts
        });
    });
});

// New
router.get('/newproduct', (req, res) => {
    res.render('newproduct.ejs');
});

// Delete
router.delete('/products/:id', (req, res) => {
    products.findByIdAndRemove(req.params.id, (error, deleteProducts) => {
        res.redirect('/products');
    });
});

// Update
router.put('/products/:id', (req, res) => {
    products.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedProduct) => {
            res.redirect(`/products/${req.params.id}`);
        });
});

// Create
router.post('/products', (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }

    products.create(req.body, (error, createdProduct) => {
        res.redirect('/products');
    });
});

// Edit
router.get('/products/edit/:id', (req, res) => {
    products.findById(req.params.id, (error, foundProducts) => {
        res.render('editproduct.ejs', {
            products: foundProducts,
        });
    });
});

router.put('/products/:id', (req, res) => {
    products._id = req.body;
    res.redirect('/products');
});

// // Buy
// router.put('/products/:id', (req, res) => {
//     products._id = req.body;
//     product.qty -= 1;
// });

// Show
router.get('/products/:id', (req, res) => {
    products.findById(req.params.id, (error, foundProducts) => {
        res.render('show.ejs', {
            products: foundProducts,
        });
    });
});

module.exports = router;




