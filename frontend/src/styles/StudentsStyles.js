// StudentsStyles.js
import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;
  font-family: Montserrat;
 
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  font-family: montserrat;
  margin-left: ${({ isOpen }) => (isOpen ? '230px' : '50px')};
  transition: margin-left 0.3s ease;
`;

export const StudentsContent = styled.div`
  padding: 20px;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddStudentForm = styled.form`
  margin-bottom: 20px;
`;

export const AddStudentInput = styled.input`
  padding: 8px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddStudentButton = styled.button`
  padding: 8px 16px;
  background-color: rgb(169, 44, 196);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: montserrat;
  cursor: pointer;
  &:hover {
    background-color: rgb(98, 97, 99); /* Darker background on hover */
  }
`;
