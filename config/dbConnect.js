const mongoose = require('mongoose');

const url = "mongodb+srv://MayankNodeCrud:Mayank123@cluster0.gjvco.mongodb.net/node_crud?retryWrites=true&w=majority"
    
module.exports = (() => {
    mongoose.connect(url);
});