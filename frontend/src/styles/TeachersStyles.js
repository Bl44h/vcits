// TeachersStyles.js
import styled from 'styled-components';

export const TeachersContainer = styled.div`
  display: flex;
  
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  font-family: montserrat;
  margin-left: ${({ isOpen }) => (isOpen ? '230px' : '50px')};
  transition: margin-left 0.3s ease;
`;

export const TeachersContent = styled.div`
  padding: 20px;
`;

export const TeachersHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const TeacherList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TeacherItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddTeacherForm = styled.form`
  margin-bottom: 20px;
`;

export const AddTeacherInput = styled.input`
  padding: 8px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddTeacherButton = styled.button`
  padding: 8px 16px;
  background-color: rgb(169, 44, 196);
  color: #fff;
  border: none;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(98, 97, 99); /* Darker background on hover */
  }
`;
