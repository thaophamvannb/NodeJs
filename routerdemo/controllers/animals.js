const express = require('express'),
      router = express.Router()
// Middleware
// function authorize(req, res, next) {
//   if (true) {
//    next()
//   } else {
//     res.status(403).send('Forbidden')
//   }
// }
router.use(function (req, res, next) {
  if (req.user === 'farmer') {
    next()
  } else {
    res.status(403).send('Forbidden')
  }
})
// Domestic animals page
router.get('/domestic',/*authorize,*/ function(req, res) {
  res.send('Cow, Horse, Sheep')
})

// Wild animals page
router.get('/wild', function(req, res) {
  res.send('Wolf, Fox, Eagle')
})

module.exports = router
