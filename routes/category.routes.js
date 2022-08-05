const router = require("express").Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require("../middleware/jwt.middleware");

const Category = require('../models/Category');

router.get('/categories', (req, res, next) => {
  Category.find()
    .then(allCategories => {
      res.json(allCategories)
    })
    .catch(err => res.json(err));
});


router.post('/categories', isAuthenticated, (req, res, next) => {
  const { title, description } = req.body;

  Category.create({ title, description })
    .then(newCategory => res.json(newCategory))
    .catch(err => res.json(err));
});




module.exports = router;