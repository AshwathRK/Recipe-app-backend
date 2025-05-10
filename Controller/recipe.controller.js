const recipeModel = require('../Models/Recipe.model')

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

const handleCreateRecipe = (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'handleCreateRecipe'
    })
}
const handleUpdateRecipe = (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'handleUpdateRecipe'
    })
}
const handleDeleteRecipe = (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'handleDeleteRecipe'
    })
}

module.exports = {
    handleGetAllRecipes, handleGetRecipeById, handleCreateRecipe, handleUpdateRecipe, handleDeleteRecipe
}