import styled from 'styled-components';


export const BoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const RecipeCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 250px;
  overflow: hidden;
  padding: 15px;
`;

export const RecipeImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const RecipeTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const InfoText = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;

export const DifficultyWrapper = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ level }) =>
    level === 1 ? "green" :
    level === 2 ? "orange" :
    level === 3 ? "red" : "gray"};
  font-weight: bold;
`;