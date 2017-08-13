// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordconf: { type: String, required: true },
  admin: Boolean,
  gender:String,
  email: String,
  location: String,
  created: Date,
  updated: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  // change the updated field to current date
  this.updated = currentDate;
  // if created doesn't exist, add to that field
  if (!this.created)
    this.created = currentDate;
  next();
});
//crud
module.exports = {
    // ----------------------add user ------------------------
    addUser: function (req, res) {
        const name = req.body.name;
        const username = req.body.username;
        const password = req.body.password;
        const passwordconf = req.body.passworconf;
        const admin = req.body.admin;
        const gender = req.body.gender;
        const email = req.body.email;
        const location = req.body.email;
        var newUser  = User({
            name: name,
            username: username,
            password: password,
            passwordconf: passwordconf,
            admin: admin,
            gender: gender,
            email: email,
            location: location
        });
       
        newUser.save(function (err) {
            if (err) {
                throw err;
            } else {
                console.log("User create:" + dbUser);
            }
        });
    },
}