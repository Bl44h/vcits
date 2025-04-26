// ClassesStyles.js
import styled from 'styled-components';

export const ClassesContainer = styled.div`
  display: flex;
  padding-left: 240px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  font-family: montserrat;
  margin-left: ${({ isOpen }) => (isOpen ? '230px' : '50px')};
  transition: margin-left 0.3s ease;
`;

export const ClassesContent = styled.div`
  padding: 20px;
`;

export const ClassesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ClassItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AddClassForm = styled.form`
  margin-bottom: 20px;
`;

export const AddClassInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
`;

export const AddClassButton = styled.button`
  padding: 8px 16px;
  font-family: montserrat;
  background-color: rgb(169, 44, 196);
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(98, 97, 99); /* Darker background on hover */
  }
`;


export const ClassContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const ClassHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const GradeHeader = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
