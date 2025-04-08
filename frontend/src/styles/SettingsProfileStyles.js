// SettingsProfileStyles.js
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; 
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  font-family: montserrat;
`;

export const ProfileHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProfileDetails = styled.div`
  max-width: 400px;
`;

export const ProfileLabel = styled.label`
  font-weight: bold;
`;

export const ProfileInfo = styled.p`
  margin-bottom: 10px;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  font-family: montserrat;
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

export const ProfileDetail = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  margin-left: 10px;
`;
