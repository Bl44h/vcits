import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import {
    AssignmentsContainer,
    Content,
    AssignmentsContent,
    AssignmentsHeader,
    AssignmentList,
    AssignmentTitle,
    AddAssignmentButton,
    AddAssignmentInput,
    AddAssignmentForm,
    AddAssignmentTextArea

} from '../../styles/AssignmentsStyles'

const AssignmentSection = () => {
    return (
        <AssignmentsContainer>
            <Sidebar/>
            <Content>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignments</AssignmentsHeader>
                    <AddAssignmentForm>
                        <AddAssignmentInput
                            type="text"
                            placeholder="Enter Assignment Title"
                        />
                        <AddAssignmentTextArea
                            placeholder="Enter Assignment Description"
                        />
                        <AddAssignmentInput
                            type="text"
                            placeholder="Enter Assignment grade"
                        />
                        <AddAssignmentInput
                            type="text"
                            placeholder="Enter Assignment Deadline"
                        />
                        <AddAssignmentButton type="submit">Add Asssignment</AddAssignmentButton>
                    </AddAssignmentForm>
                    <AssignmentList>
                        
                    </AssignmentList>
                </AssignmentsContent>
            </Content>
        </AssignmentsContainer>
    )
};

export default AssignmentSection