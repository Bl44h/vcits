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
    return (
        <ExamContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
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