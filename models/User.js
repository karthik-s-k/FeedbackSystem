const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    name: String,
    email: String,
    authType: { type: String, default: "" },
    userId: { type: String, default: "" },
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);