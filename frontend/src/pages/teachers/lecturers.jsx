import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import {
    TeachersContainer,
    Content,
    TeachersContent,
    TeachersHeader,
    TeacherList,
    TeacherItem,
    AddTeacherButton
} from '../../styles/TeachersStyles'

const TeacherSection = () => {
    return (
        <TeachersContainer>
            <Sidebar/>
            <Content>
                <TeachersContent>
                    <TeachersHeader>Teachers</TeachersHeader>
                    <TeacherList>
                        
                    </TeacherList>
                </TeachersContent>
            </Content>
        </TeachersContainer>
    )
};

export default TeacherSection