import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { RecipeContext } from '../provider/RecipeProvider'
import IngredientList from './IngredientList'

export default function Recipe(props) {
  const {
    id,
    name,
    description,
    servings,
    totalTimeMinutes,
    prepTimeMinutes,
    instructions,
    ingredients,
  } = props
  const { handleRecipeDelete, handleRecipeSelected } = useContext(RecipeContext)

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1" onClick={() => handleRecipeSelected(id)}>
            Edit
          </button>
          <button className="btn btn--danger" onClick={() => handleRecipeDelete(id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__description">{description}</div>
      <div className="recipe__row">
        <span className="recipe__label">Preparation Time:</span>
        <span className="recipe__value">{prepTimeMinutes}</span>
      </div>

      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{totalTimeMinutes}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          <ul>
            {instructions.split('\n').map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  totalTimeMinutes: PropTypes.number.isRequired,
  prepTimeMinutes: PropTypes.number.isRequired,
  instructions: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
}
