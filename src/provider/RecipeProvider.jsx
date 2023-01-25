import React, { useState } from 'react'
import { useEffect } from 'react'
import { storeRecipes, loadRecipes } from './repository/recipeRepository'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
export default function RecipeProvider({ children, initialRecipes }) {
  const [recipes, setRecipes] = useState(() => {
    return loadRecipes(initialRecipes)
  })

  const [selectedRecipeId, setSelectedRecipeId] = useState()

  useEffect(() => storeRecipes(recipes), [recipes])

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: crypto.randomUUID(),
      name: 'New recipe',
      servings: 0,
      cookTime: '',
      instructions: '',
      ingredients: [],
    }

    setRecipes(() => [...recipes, newRecipe])
    setSelectedRecipeId(() => newRecipe.id)
  }

  const handleIngredientDeleted = (ingredientId) => {
    if (!selectedRecipeId) {
      console.log('No recipe selected!')
      return
    }

    const recipe = recipes.find((r) => r.id === selectedRecipeId)
    handleRecipeChanged(selectedRecipeId, {
      ...recipe,
      ingredients: [...recipe.ingredients.filter((i) => i.id !== ingredientId)],
    })
  }

  const handleIngredientAdd = () => {
    if (!selectedRecipeId) {
      console.log('No recipe selected!')
      return
    }

    const newIngredient = {
      id: crypto.randomUUID(),
      name: 'New ingredient',
      amount: '',
    }

    const recipe = recipes.find((r) => r.id === selectedRecipeId)
    handleRecipeChanged(selectedRecipeId, {
      ...recipe,
      ingredients: [...recipe.ingredients, newIngredient],
    })
  }

  const handleRecipeDelete = (id) => {
    setRecipes((prev) => prev.filter((r) => r.id !== id))
  }

  const handleRecipeSelected = (id) => {
    setSelectedRecipeId(id)
  }

  // TODO check if this can be done with a cold copy and "apply changes button"
  const handleRecipeChanged = (id, newRecipe) => {
    const prevRecipeIdx = recipes.findIndex((r) => r.id === id)
    const newRecipes = [...recipes]
    newRecipes[prevRecipeIdx] = newRecipe
    setRecipes(newRecipes)
  }

  // const handleIngredientChanged = (ingredientId, newIngredient) => {
  //   const recipe = recipes.findIndex(r => r.id === id)
  //   const newIngredients = [...recipe.ingredients]
  //   const prevIngredientIdx = newIngredients.findIndex(r => r.id === ingredientId)
  //   newIngredients[prevIngredientIdx] = newIngredient

  //   handleRecipeChanged(recipeId, { ...recipe, ingredients: newIngredients } )
  // }

  const contextState = {
    handleRecipeDelete,
    handleRecipeAdd,
    handleRecipeSelected,
    handleRecipeChanged,
    handleIngredientAdd,
    handleIngredientDeleted,
    // handleIngredientChanged,
    recipes,
    // setRecipes,
    selectedRecipeId,
    // setSelectedRecipeId
  }

  return <RecipeContext.Provider value={contextState}>{children}</RecipeContext.Provider>
}
