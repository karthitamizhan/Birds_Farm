const mongoose = require('mongoose');
const connectDB = async () =>
{
    try{
        const connection = await mongoose.connect("mongodb+srv://karthikeyans:Karthikeyan7225@cluster0.oihwjcw.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB Connected");
    }
    catch(err)
    {
        console.log(err,"error while connecting db");
    }
}
module.exports = connectDB;