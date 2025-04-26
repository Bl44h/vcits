import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import{
    AttendanceContainer,
    Content,
    AttendanceContent,
    AttendanceHeader,
    AttendanceList,
    AttendanceItem,
    StudentName,
    CheckboxLabel,
    Divider,
    SubmitButton
} from '../../styles/AttendanceStyles'

const CheckAttendanceSection = () => {

    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return (
        <AttendanceContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <AttendanceContent>
                    <AttendanceHeader>Attendance</AttendanceHeader>
                    <AttendanceList>
                        <AttendanceItem>
                            <StudentName></StudentName>
                            <CheckboxLabel>
                                <input
                                    type="checkbox"
                                />
                                Present
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input
                                    type="checkbox"
                                />
                                Absent
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input
                                    type="checkbox"
                                />
                                Absent with apology
                            </CheckboxLabel>
                        </AttendanceItem>
                    </AttendanceList>
                    <SubmitButton>Submit</SubmitButton>
                </AttendanceContent>
            </Content>
        </AttendanceContainer>
    )
};

export default CheckAttendanceSection