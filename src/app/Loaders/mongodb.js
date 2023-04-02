const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://felipegregoriotesteemail:21zz6c41mBBg8kUo@cluster0.ym8qysb.mongodb.net/test');
}

module.exports = startDB;

