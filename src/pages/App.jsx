import React, { useContext, useEffect, useState } from 'react'
import RecipeEdit from "../components/RecipeEdit"
import RecipeList from "../components/RecipeList"
import RecipeProvider, { RecipeContext } from "../provider/RecipeProvider"

function App() {
  const { selectedRecipeId, recipes } = useContext(RecipeContext)
  const selectedRecipe = recipes.find(r => r.id === selectedRecipeId)

  return (
    <>
      <RecipeList />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/> }
    </>
  )
}


export default App
