const express = require('express');
const router = express.Router();


const Category = require('../../models/Category');

router.get('/', (req, res) => {
    Category.find()
        .sort({date: -1})
            .then(categories => res.json(categories));
});

router.post('/', (req, res) => {
    const newCategory = new Beer({
        url:req.body.url,
        name:req.body.name})

    newCategory.save().then(beer => res.json(beer));

router.delete('/:id', (req, res) => {
        Category.findById(req.params.id) 
            .then(category => category.remove().then(() => res.json({success:true})))
                .catch(err => res.status(404).json({success:false}));
        }); 

});
router.put('/:id', (req, res) => {
    Category.findByIdAndUpdate(req.params.id) 
        .then(category => cateogry.remove().then(() => res.json({success:true})))
            .catch(err => res.status(404).json({success:false}))
            .then(newCategory.save().then(category => res.json(category)));
    });

module.exports = router;    