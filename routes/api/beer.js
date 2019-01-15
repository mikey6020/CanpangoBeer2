const express = require('express');
const router = express.Router();


const Beer = require('../../models/Beer');

router.get('/', (req, res) => {
    Beer.find()
        .sort({date: -1})
            .then(beers => res.json(beers));
});

router.post('/', (req, res) => {
    const newBeer = new Beer({
        name:req.body.name,
        ibu:req.body.ibu,
        calories:req.body.calories,
        abv:req.body.abv,
        style:req.body.style,
        brewery_location:req.body.brewery_location,
        created_on:req.body.created_on,
        category:req.body.category
    });

    newBeer.save().then(beer => res.json(beer));

router.delete('/:id', (req, res) => {
        Beer.findById(req.params.id) 
            .then(beer => beer.remove().then(() => res.json({success:true})))
                .catch(err => res.status(404).json({success:false}));
        }); 

});
router.put('/:id', (req, res) => {
    Beer.findByIdAndUpdate(req.params.id) 
        .then(beer => beer.remove().then(() => res.json({success:true})))
            .catch(err => res.status(404).json({success:false}))
            .then(newBeer.save().then(beer => res.json(beer)));
    });

module.exports = router;    