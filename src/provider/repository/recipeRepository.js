const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
export const storeRecipes = (recipes) => {
  console.log('Storing recipes')
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
}

export const loadRecipes = (initialRecipes) => {
  console.log('Loading recipes')
  const storedRecipes = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (null == storedRecipes) {
    return initialRecipes
  }

  return JSON.parse(storedRecipes)
}
