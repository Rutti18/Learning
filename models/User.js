const mongoose = require ('mongoose');
const {schema} = mongoose;

const userSchema = new mongoose.Schema({
    googleId: String
});

mongoose.model('users', userSchema);