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

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const [announcements, setAnnouncements] = useState([]);
  
    // Function to fetch announcements
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
        setAnnouncements(response.data.announcements);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };
    
  
    useEffect(() => {
      fetchAnnouncements();
    }, []);
  

    return (
        <AnnouncementContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <AnnouncementHeader>Announcements</AnnouncementHeader>
                <AnnouncementList>
                                     {announcements.map((announcement) => (
                                            <AnnouncementItem key={announcement._id}>
                                                 <AnnouncementContent>{announcement.announcement}</AnnouncementContent>
                                            </AnnouncementItem>
                                            ))}
                </AnnouncementList>
            </Content>
        </AnnouncementContainer>
    )
};

export default AnnouncementSection