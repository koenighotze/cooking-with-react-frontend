import PropTypes from 'prop-types'
import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingredients }) {
  const elements = ingredients.map((i) => <Ingredient key={i.id} {...i} />)
  return <div className="ingredients-grid">{elements}</div>
}

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
}
