const recipeModel = require('../Models/Recipe.model')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const handleGetAllRecipes = async (req, res, next) => {
    try {
        const allRecipes = await recipeModel.find();
        console.log(allRecipes)
        return res.status(200).json({
            success: true,
            message: 'Get all recipes',
            data: allRecipes
        });
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return res.status(500).json({
            success: false,
            message: 'Error occurred while fetching recipes',
            error: error.message
        });
    }
};

const handleGetRecipeById = async (req, res, next) => {
    const paramsID = req.params.recipeID;

    try {
        // Mongoose can handle ObjectId casting internally
        const recipe = await recipeModel.findById(paramsID);

        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: `No recipe found with ID ${paramsID}`,
            });
        }

        return res.status(200).json({
            success: true,
            message: `Fetched recipe for ID ${paramsID}`,
            data: recipe
        });

    } catch (err) {
        console.error(`Error fetching recipe with ID ${paramsID}:`, err);
        return res.status(500).json({
            success: false,
            message: `Server error while fetching recipe with ID ${paramsID}`,
            error: err.message
        });
    }
};

const handleCreateRecipe = async (req, res, next) => {
    try {
        const result = await recipeModel.insertOne({
            Recipe_key: req.body.Recipe_key,
            RecipeName: req.body.RecipeName,
            Ingredients: req.body.Ingredients,
            Recipetype: req.body.Recipetype
        });

        return res.status(200).json({
            success: true,
            message: 'The recipe has been created'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error while creating the recipe: ${error.message}`
        });
    }
};

const handleUpdateRecipe = async (req, res, next) => {
    const paramsID = req.params.recipeID;

    console.log(paramsID)

    if (!ObjectId.isValid(paramsID)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid recipe ID'
        });
    }

    try {
        const updateFields = {};

        if (req.body.Recipe_key) updateFields.Recipe_key = req.body.Recipe_key;
        if (req.body.RecipeName) updateFields.RecipeName = req.body.RecipeName;
        if (req.body.Ingredients) updateFields.Ingredients = req.body.Ingredients;
        if (req.body.Recipetype) updateFields.Recipetype = req.body.Recipetype;

        const result = await recipeModel.updateOne(
            { _id: new ObjectId(paramsID) },
            { $set: updateFields }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'No recipe found or no changes made'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'The recipe has been updated'
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error while updating the recipe: ${error.message}`
        });
    }
};

const handleDeleteRecipe = async (req, res, next) => {
    const paramsID = req.params.recipeID; // Use recipeID consistently

    // Check for valid ObjectId
    if (!ObjectId.isValid(paramsID)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid recipe ID'
        });
    }

    try {
        const result = await recipeModel.deleteOne({ _id: new ObjectId(paramsID) });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Recipe not found',
            });
        }

        return res.status(204).json({ // Return 204 No Content
            success: true,
            message: 'The recipe has been deleted',
        });

    } catch (error) {
        console.error('Error while deleting the recipe:', error);
        return res.status(500).json({
            success: false,
            message: `Error while deleting the recipe: ${error.message}`
        });
    }
};



module.exports = {
    handleGetAllRecipes, handleGetRecipeById, handleCreateRecipe, handleUpdateRecipe, handleDeleteRecipe
}