const express = require('express');
const router = express.Router();

const RecipeController = require('../Controller/recipe.controller');

router.get('/', RecipeController.handleGetAllRecipes)
router.get('/:recipeID', RecipeController.handleGetRecipeById)
router.post('/', RecipeController.handleCreateRecipe)
router.put('/', RecipeController.handleUpdateRecipe)
router.delete('/', RecipeController.handleDeleteRecipe)

module.exports = router