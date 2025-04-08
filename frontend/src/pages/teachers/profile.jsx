import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import{
    ProfileContainer,
    SidebarContainer,
    Content,
    ProfileHeader,
    ProfileDetails,
    ProfileLabel,
    ProfileInfo,
    EditButton
} from '../../styles/SettingsProfileStyles'

const TeacherProfileSection = () => {
    const teacherInfo = {
        name: 'Tunde Oyewo',
        email: 'tundeoyewo@gmail.com',
        phone: '41999',
        address: 'ilorin',
        qualification: 'Ph.D'
    };

    return (
        <ProfileContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
                <ProfileHeader>Profile Details</ProfileHeader>
                <ProfileDetails>
                    <ProfileLabel>Name:</ProfileLabel>
                    <ProfileInfo>{teacherInfo.name}</ProfileInfo>

                    <ProfileLabel>Email:</ProfileLabel>
                    <ProfileInfo>{teacherInfo.email}</ProfileInfo>

                    <ProfileLabel>Phone:</ProfileLabel>
                    <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

                    <ProfileLabel>Address:</ProfileLabel>
                    <ProfileInfo>{teacherInfo.address}</ProfileInfo>

                    <ProfileLabel>Qualification:</ProfileLabel>
                    <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
                </ProfileDetails>

                <EditButton>Edit Profile</EditButton>
            </Content>
        </ProfileContainer>
    )
};

export default TeacherProfileSection