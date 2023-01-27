const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'
export const cacheRecipes = (recipes) => {
  console.log('Caching recipes')
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
}

export const loadRecipes = async () => {
  console.log('Loading recipes')
  const storedRecipes = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (null == storedRecipes) {
    return []
  }

  return JSON.parse(storedRecipes)
}
