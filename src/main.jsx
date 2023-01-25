import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './css/app.css'
import RecipeProvider, { RecipeContext } from "./provider/RecipeProvider"



const samples = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Something\n2. Else\n3. Pepper",
    ingredients: [
      {
        id: 1, name: "Chicken", amount: "5"
      },
      {
        id: 2, name: "Egg", amount: "1"
      },
      {
        id: 3, name: "Salmon", amount: "12"
      }
    ]

  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '2:45',
    instructions: "1. Paprika ding\n2. Else\n3. Pepper",
    ingredients: [
      {
        id: 1, name: "Pepper", amount: "1kg"
      },
      {
        id: 2, name: "Paprika", amount: "12ox"
      },
      {
        id: 3, name: "Pork", amount: "12l"
      }
    ]
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider initialRecipes={samples}>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
)