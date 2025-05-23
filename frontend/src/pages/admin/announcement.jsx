import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios'
import {
    AnnouncementContainer,
    Content,
    Title,
    AnnouncementForm,
    FormGroup,
    Label,
    TextArea,
    Button,
    AnnouncementList,
    AnnouncementItem,
    AnnouncementContent,
    AnnouncementHeader
}from '../../styles/AnnouncementStyles'

const Announcements = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    
      // State for managing announcement
      const [announcement, setAnnouncement] = useState('');
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
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/api/v1/announcements', {
            announcement: announcement, // Ensure that the key matches the backend model
          });
          console.log('Announcement sent:', response.data);
          // Display success toast message
          toast.success('Announcement sent successfully');
          // Clear the form
          setAnnouncement('');
          // Fetch announcements again to update the list
          fetchAnnouncements();
        } catch (error) {
          console.error('Error sending announcement:', error);
          // Display error toast message
          toast.error('Error sending announcement');
        }
      };
    
    return (
        <AnnouncementContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <Title>Announcement</Title>
                <AnnouncementForm onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="announcement">Announcement</Label>
                        <TextArea
                            id="announcement"
                            value={announcement}
                            onChange={(e) => setAnnouncement(e.target.value)}
                            required
                            rows={4}
                            cols={50}
                        />
                    </FormGroup>
                    <Button type="submit">Send announcement</Button>
                </AnnouncementForm>

                <h2>Announcements</h2>
                <AnnouncementList>
                    {announcements.map((announcement) => (
                        <AnnouncementItem key={announcement._id}>
                             <AnnouncementContent>{announcement.announcement}</AnnouncementContent>
                        </AnnouncementItem>
                        ))}
                </AnnouncementList>
            </Content>
                <ToastContainer 
                  position="top-center" 
                  autoClose={3000} 
                  hideProgressBar={false} 
                  newestOnTop={false}
                /> 
        </AnnouncementContainer>
    )
};

export default Announcements