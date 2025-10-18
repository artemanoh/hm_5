import RecipeItem from './recipe'
import {BoardWrapper} from './recipe.styled'

const RecipeBoard = ({ recipes }) => (
  <BoardWrapper>
    {recipes.map((recipe, index) => (
      <RecipeItem key={index} {...recipe} />
    ))}
  </BoardWrapper>
);

export default RecipeBoard;