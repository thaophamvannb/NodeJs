const express = require('express'),
      app = express()

app.use(require('./controllers'))
app.listen(3000, function() {
  console.log('Listening on port 3000...')
})