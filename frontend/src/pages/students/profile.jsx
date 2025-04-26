import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios';
import {
    ProfileContainer,
    SidebarContainer,
    Content,
    ProfileHeader,
    ProfileInfo,
    ProfileDetail,
    Label,
    Value
} from '../../styles/SettingsProfileStyles';

const ProfileSection = () => {

    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const studentProfile = {
        name: 'Tunde Oyewo',
        email: 'tundeoyewo@gmail.com',
        phone: '41999',
        address: 'ilorin',
        level: '200'
    };

    return (
        <ProfileContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <ProfileHeader>Profile</ProfileHeader>
                <ProfileInfo>
                    <ProfileDetail>
                        <Label>Name:</Label>
                        <Value>{studentProfile.name}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Email:</Label>
                        <Value>{studentProfile.email}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Level:</Label>
                        <Value>{studentProfile.level}</Value>
                    </ProfileDetail>
                    <ProfileDetail>
                        <Label>Phone:</Label>
                        <Value>{studentProfile.phone}</Value>
                    </ProfileDetail>
                </ProfileInfo>
            </Content>
        </ProfileContainer>
    )
}

export default ProfileSection