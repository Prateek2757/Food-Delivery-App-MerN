const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodmart:prtk1234@cluster0.ej3gl38.mongodb.net/foodmartmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const collection = mongoose.connection.db.collection("food_items");
        const foodCategory = mongoose.connection.db.collection("foods");

        const foodItems = await collection.find({}).toArray();
        const foodCategories = await foodCategory.find({}).toArray();

        console.log("Fetched data:");
        global.food_items = foodItems;
        global.foods = foodCategories;

        return { foodItems, foodCategories };
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = mongoDB;
