const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ["isSeller", "isCustomer", "isAdmin"], 
        default: "isCustomer" 
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
