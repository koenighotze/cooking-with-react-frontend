import React, { useContext, useEffect, useState } from 'react'
import { RecipeContext } from '../provider/RecipeProvider'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({ recipe }) {
  const {
    handleRecipeSelected,
    handleRecipeChanged,
    handleIngredientAdd,
    handleIngredientDeleted,
  } = useContext(RecipeContext)
  const { id, name, servings, cookTime, instructions, ingredients } = recipe

  const handleChange = (changes) => {
    handleRecipeChanged(id, { ...recipe, ...changes })
  }

  // TODO REFACTOR ME
  const handleIngredientChanged = (ingredientId, newIngredient) => {
    const prevIngIdx = recipe.ingredients.findIndex((r) => r.id === ingredientId)
    const newIngredients = [...recipe.ingredients]
    newIngredients[prevIngIdx] = newIngredient

    handleChange({ ingredients: newIngredients })
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => handleRecipeSelected(null)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="name"
          id="name"
          value={name}
          onInput={(e) => handleChange({ name: e.target.value })}
        />
        <label className="recipe-edit__label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="cookTime"
          id="cookTime"
          value={cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
        />
        <label className="recipe-edit__label" htmlFor="servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={servings}
          onInput={(e) => handleChange({ servings: parseInt(e.target.value) || '' })}
        />
        <label className="recipe-edit__label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          value={instructions}
          onInput={(e) => handleChange({ instructions: e.target.value })}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {ingredients.map((i) => (
          <RecipeIngredientEdit
            key={i.id}
            ingredient={i}
            handleIngredientChanged={handleIngredientChanged}
            handleIngredientDeleted={handleIngredientDeleted}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-button-container">
        <button className="btn btn--primary" onClick={() => handleIngredientAdd()}>
          Add ingredient
        </button>
      </div>
    </div>
  )
}
