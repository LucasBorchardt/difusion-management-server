const router = require("express").Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require("../middleware/jwt.middleware");

const Article = require('../models/Article');
const Category = require('../models/Category');

router.get('/articles', (req, res, next) => {
    Article.find()
        .populate('category')
        .then(allArticles => {
            res.json(allArticles)
        })
        .catch(err => res.json(err));
});

router.post('/articles', isAuthenticated, (req, res, next) => {
    const { title,
        location,
        category,
        date,
        content } = req.body;

    Article.create({
        title,
        location,
        category,
        date,
        content })
        .then(response => {
            console.log("response",response);
            res.json(response)})
        .catch(err =>{ 
            console.log(err);
            res.status(500).json(err)});
});

router.get('/articles/:articleId', (req, res, next) => {
    const { articleId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(articleId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
console.log(articleId)
    Article.findById(articleId)
        .populate('category')
        .then(article => res.json(article))
        .catch(error => res.json(error));
});

router.put('/articles/:articleId', isAuthenticated, (req, res, next) => {
    const { articleId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(articleId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Article.findByIdAndUpdate(articleId, req.body, { returnDocument: 'after' })
        .then((updatedArticle) => res.json(updatedArticle))
        .catch(error => res.json(error));
});

router.delete('/articles/:articleId', isAuthenticated, (req, res, next) => {
    const { articleId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(articleId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Article.findByIdAndRemove(articleId)
        .then(() => res.json({ message: `Article with id ${articleId} & all associated categories were removed successfully.` }))
        .catch(error => res.status(500).json(error));
});





module.exports = router;