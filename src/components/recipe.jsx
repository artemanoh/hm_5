import PropTypes from 'prop-types';
import {FaUtensils, FaFire , FaClock } from "react-icons/fa";
import {RecipeCard, RecipeImage, RecipeTitle, InfoText, DifficultyWrapper } from './recipe.styled'
import Difficulty from './Difficulty';
const RecipeItem = ({ image, title, servings, time, calories, difficulty }) => (
  <RecipeCard>
    <RecipeImage src={image} alt={title} />
    <RecipeTitle>{title}</RecipeTitle>
    <InfoText><FaUtensils/>Порції: {servings}</InfoText>
    <InfoText><FaClock/>Час: {time} хв</InfoText>
    <InfoText><FaFire/>Калорії: {calories}</InfoText>
    <div><Difficulty level={difficulty} /></div>
    
  </RecipeCard>
);

RecipeItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  difficulty: PropTypes.oneOf([0,1,3]).isRequired,
};

export default RecipeItem;
