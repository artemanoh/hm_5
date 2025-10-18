import './App.css';
import RecipeBoard from './components/RecipeList'
import RecipesData from './recipe.json'
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <RecipeBoard recipes={RecipesData}/>
    </div>
  );
}

export default App;
