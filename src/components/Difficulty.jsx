import PropTypes from 'prop-types';
import {DifficultyWrapper} from './recipe.styled'
const Difficulty = ({ level }) => <DifficultyWrapper level={level}>{level}</DifficultyWrapper>;

Difficulty.propTypes = {
  level: PropTypes.oneOf([1, 2, 3]).isRequired,
};

export default Difficulty;