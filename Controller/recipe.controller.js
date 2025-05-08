const recipeModel = require('../Models/Recipe.model')

const handleGetAllRecipes = async (req, res, next) => {
    const allRecipes = await recipeModel.find()
    try {
        return res.status(200).json({
            success: true,
            message: 'Get all recipes',
            allRecipes
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Getting error while fetching all recipes',
            allRecipes
        })
    }
}
const handleGetRecipeById = async (req, res, next) => {
    const paramsID = req.params.recipeID;
    const recipeID = `ObjectID(${paramsID})`
    const allRecipes = await recipeModel.findOne(recipeID)
    return res.status(200).json({
        success: true,
        message: `Get recipes for ${paramsID}`,
        allRecipes
    })
}
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