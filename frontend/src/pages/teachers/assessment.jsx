import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import {
    ExamContainer,
    SidebarContainer,
    Content,
    ExamHeader,
    ExamForm,
    FormLabel,
    FormInput,
    AddButton
} from '../../styles/ExamStyles'

const CheckAssessmentSection = () => {

    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return (
        <ExamContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <ExamHeader>Assessment Details</ExamHeader>
                <ExamForm>
                    <FormLabel>Name:</FormLabel>
                    <FormInput
                        type="text"
                        required
                    />
                    <FormLabel>Matric Number:</FormLabel>
                    <FormInput
                        type="text"
                        required
                    />
                    <FormLabel>Level:</FormLabel>
                    <FormInput
                        type="text"
                        required
                    />
                    <FormLabel>Marks:</FormLabel>
                    <FormInput
                        type="number"
                        required
                    />
                    <AddButton type="submit">Add Exam</AddButton>
                </ExamForm>

                <h2>Total Marks:</h2>
                <h3>Exam Details:</h3>
                <ul></ul>
                
            </Content>
        </ExamContainer>
    )
};

export default CheckAssessmentSection