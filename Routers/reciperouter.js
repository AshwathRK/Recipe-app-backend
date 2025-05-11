const express = require('express');
const router = express.Router();

const RecipeController = require('../Controller/recipe.controller');

router.get('/', RecipeController.handleGetAllRecipes)
router.get('/:recipeID', RecipeController.handleGetRecipeById)
router.post('/', RecipeController.handleCreateRecipe)
router.put('/:recipeID', RecipeController.handleUpdateRecipe)
router.delete('/:recipeID', RecipeController.handleDeleteRecipe)

module.exports = router