// AnnouncementStyles.js
import styled from 'styled-components';

export const AnnouncementContainer = styled.div`
  display: flex;
  

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

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const AnnouncementForm = styled.form`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: rgb(169, 44, 196);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(98, 97, 99); /* Darker background on hover */
  }
`;

export const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AnnouncementItem = styled.li`
  margin-bottom: 10px;
`;

export const AnnouncementContent = styled.p`
  font-size: 16px;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;


export const AnnouncementHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;


export const AnnouncementTitle = styled.h3`
  margin-bottom: 10px;
`;

