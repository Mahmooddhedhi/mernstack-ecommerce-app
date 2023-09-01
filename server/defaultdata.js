const productsdata = require("./itemsCollection");
const Items = require('./models/itemsModel')
const DefaultData = async()=>{
    try {
        await Items.deleteMany({});
        const storeData = await Items.insertMany(productsdata);
        console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;