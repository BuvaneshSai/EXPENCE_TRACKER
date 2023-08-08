const mongoose = require('mongoose');

const DB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.mongo_url)
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {DB}