import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios';
import {
    AnnouncementContainer,
    SidebarContainer,
    Content,
    AnnouncementHeader,
    AnnouncementList,
    AnnouncementItem,
    AnnouncementTitle,
    AnnouncementContent
} from '../../styles/AnnouncementStyles';

const AnnouncementSection = () => {
    return (
        <AnnouncementContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
                <AnnouncementHeader>Announcements</AnnouncementHeader>
                <AnnouncementList>
                    
                </AnnouncementList>
            </Content>
        </AnnouncementContainer>
    )
};

export default AnnouncementSection