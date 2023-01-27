import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import fetchRecipes from './service/backend-service'

export const RecipeContext = React.createContext()
export default function RecipeProvider({ children, initialRecipes }) {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(initialRecipes)
  useEffect(() => {
    const load = async () => {
      const recipes = await fetchRecipes()
      setRecipes(recipes)
    }

    load()
  }, [])

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

  const contextState = {
    handleRecipeDelete,
    handleRecipeAdd,
    handleRecipeSelected,
    handleRecipeChanged,
    handleIngredientAdd,
    handleIngredientDeleted,
    recipes,
    selectedRecipeId,
  }

  return <RecipeContext.Provider value={contextState}>{children}</RecipeContext.Provider>
}

RecipeProvider.propTypes = {
  children: PropTypes.object.isRequired,
  initialRecipes: PropTypes.array.isRequired,
}
