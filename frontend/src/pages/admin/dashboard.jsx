import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import Announcement from './announcement';
import Performance from "./performance";
import axios from 'axios';
import {
    AdminDashboardContainer,
    Content,
    TopContent,
    BottomContent,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle
} from '../../styles/DashboardStyles';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev); 
    console.log("Sidebar State:", isOpen);
  };
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const [stats, setStats] = useState({
    totalStudents: 0,
    totalClasses: 0,
    totalLecturers: 0,
    newStudentsThisWeek: 0
  });
  
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/dashboard/stats');
        if (response.data.success) {
          setStats(response.data.stats);
        }
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };
  
    fetchStats();
  }, []);
  

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/performance/getall');
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error('Error fetching student performance:', error);
    }
  };



    return (
        <AdminDashboardContainer >
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Content isOpen={isOpen}>
                <TopContent>
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Total Students</CardTitle>
                                <CardContent>{stats.totalStudents}</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Courses</CardTitle>
                                <CardContent>{stats.totalClasses}</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Lecturers</CardTitle>
                                <CardContent>{stats.totalLecturers}</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>

                    <Section>
                        <SectionTitle>
                            
                        </SectionTitle>
                    </Section>
                </TopContent>

                <BottomContent>
                    <Performance studentPerformance={studentPerformance}/>          
                    <Announcement announcements={announcements}/>
                </BottomContent>
            </Content>
        </AdminDashboardContainer>
    )
};

export default AdminDashboard