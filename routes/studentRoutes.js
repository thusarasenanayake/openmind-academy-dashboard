const express  =require('express');

const  router = express.Router()

router.get('/dashboard/students', (req, res) => {
    res.render('./students/index');
  });



  module.exports = router