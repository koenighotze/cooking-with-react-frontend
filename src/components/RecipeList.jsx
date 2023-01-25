import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from '../provider/RecipeProvider'
import { useEffect } from 'react'

export default function RecipeList() {
  const { handleRecipeAdd, recipes } = useContext(RecipeContext)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((r) => (
          <Recipe key={r.id} {...r} />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={() => handleRecipeAdd()}>
          Add Recipe
        </button>
      </div>
    </div>
  )
}
