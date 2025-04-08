import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import Announcement from './announcement';
import Performance from "./performance";
import axios from 'axios';
import {
    StudentDashboardContainer,
    Content,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle
} from '../../styles/DashboardStyles';


const StudentDashboard = () => {
    return (
        <StudentDashboardContainer>
            <Sidebar />
            <Content>
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Assignments</CardTitle>
                                <CardContent>120</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Term</CardTitle>
                                <CardContent>1</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Performance</CardTitle>
                                <CardContent>120</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>

                    <Section>
                        <SectionTitle>
                            Update this Section
                        </SectionTitle>
                    </Section>
                </Content>    
        </StudentDashboardContainer>
    )
};

export default StudentDashboard