const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      Product
    ]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
  })

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
  },
  include: [
    Product
  ]
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where:{
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
  })

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
