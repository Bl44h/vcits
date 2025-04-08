// ChooseUserStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:rgb(255, 255, 255); 
  
  /* @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between; 
    align-items: flex-start;
  }
    */
`;

export const UserSection = styled.div`
  font-family: montserrat;
  text-align: center; /* Center text */
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin: 20px;
    text-align: left; /* Align text to the left for larger screens */
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color:rgb(0, 0, 0); 

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled(Link)`
  background-color: rgb(169, 44, 196); 
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(98, 97, 99); 
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
