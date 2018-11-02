import * as mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);
