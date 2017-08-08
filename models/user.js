var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    fullName: string,
    username: string,
    password: string,
    passwordConfirm: string,
    gender: string,
    email
})
exports.User = mongoose.model('User', userSchema)
//crud
module.exports = {
    // ----------------------add user ------------------------
    addUser: function (req, res) {
        const fullName = req.body.fullName;
        const userName = req.body.userName;
        const password = req.body.password;
        const passwordConfirm = req.body.passwordConfirm;
        const gender = req.body.gender;
        const email = req.body.email;
        
        var dbUser = new User();
        dbUser.username = username;
        dbUser.password = password;
        dbUser.email = email;
        dbUser.name = name;
        dbUser.save(function (err) {
            if (err) {
                throw err;
            } else {
                console.log(dbUser);
            }
        });
    },
}
module.exports.getUserNames = function (callback) {
    User.find(callback);
}