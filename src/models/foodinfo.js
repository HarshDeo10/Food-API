const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  food_items: [
    {
      food_item_name: { type: String, required: true },
      food_group: { type: String, required: true },
      description: { type: String, required: true },
      nutritional_information: {
        calories: { type: Number, required: true },
        fat: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        protein: { type: Number, required: true },
        fiber: { type: Number, required: true },
      },
      serving_size: { type: String, required: true },
      allergens: { type: [String], required: true },
      ingredients: { type: [String], required: true },
      preparation_methods: { type: [String], required: true },
      certifications: { type: [String], required: true },
      country_of_origin: { type: String, required: true },
      brand_or_manufacturer: { type: String, required: true },
      dietary_restrictions: { type: [String], required: true },
      health_benefits: { type: [String], required: true },
    },
  ],
});

// Create the model
const FoodModel = mongoose.model('FoodModel', foodSchema);

module.exports = FoodModel;
