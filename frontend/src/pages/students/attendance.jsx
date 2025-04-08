import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios';
import {
    AttendanceContainer,
    SidebarContainer,
    Content,
    AttendanceHeader,
    AttendanceList,
    AttendanceItem,
    AttendanceDate,
    AttendanceStatus
} from '../../styles/AttendanceStyles';

const AttendanceSection = () => {

    const attendance = [
        {id:1, date: '2025-01-01', present: true},
        {id:2, date: '2025-01-01', present: true},
        {id:3, date: '2025-01-01', present: true},
        {id:4, date: '2025-01-01', present: false},
    ]


    return (
        <AttendanceContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
                <AttendanceHeader>Attendance</AttendanceHeader>
                <AttendanceList>
                    {attendance.map(({id,date,present}) => (
                        <AttendanceItem key={id}>
                            <AttendanceDate>{date}</AttendanceDate>
                            <AttendanceStatus present = {present}>{present ? 'Present': 'Absent' }</AttendanceStatus>
                        </AttendanceItem>
                    ))};
                </AttendanceList>
            </Content>
        </AttendanceContainer>
    )
};

export default AttendanceSection