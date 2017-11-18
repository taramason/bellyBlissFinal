const express = require('express');
const router = express.Router();


//all routes in this file will be prepended with blissful-kids
//create new route file for each route
router.get('/', (req, res) => {
  res.render('index', {title: 'Blissful Kids'});
});

module.exports = router;
