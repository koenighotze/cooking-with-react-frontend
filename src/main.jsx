import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './css/app.css'
import RecipeProvider from './provider/RecipeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider initialRecipes={[]}>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
)
