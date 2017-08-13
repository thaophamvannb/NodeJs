const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'), //mongo connection
      bodyParser = require('body-parser'), //parses information from POST
      User = require('../models/user');

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))


/* GET New Blob page. */
router.get('/new', function(req, res) {
    res.render('blobs/new', { title: 'Add New Blob' });
});

// router.get('/:users', function(req, res) {
//   Comment.get(req.params.id, function (err, comment) {
//     res.render('comments/comment', {comment: comment})
//   })
// })
router.get('/users', User.getAllUser);
router.delete('/delete/:id', User.deleteUser);
router.put('/update/:id', User.updateUser);
router.get('/user/:id', User.getUserById);





module.exports = router