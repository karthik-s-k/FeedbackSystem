const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema ({
    email: String,
    responded: { type: Boolean, default: 0 }
});

mongoose.model('recipient', recipientSchema);