import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios'
import{
    PerformanceContainer,
    Content,
    PerformanceContent,
    PerformanceHeader,
    SchoolPerformance,
    IndividualPerformance
} from '../../styles/PerformanceStyles'

const Performance = () => {

    const schoolPerformanceData = {
        averageScore: 30,
        totalStudents: 100,
    };

    const individualPerformanceData = [
        {id: 1, name: '', score:80 },
        {id: 1, name: '', score:90 },
        {id: 1, name: '', score:54 },
    ];

    return (
        <PerformanceContainer>
            <Sidebar/>
            <Content>
                <PerformanceContent>
                    <PerformanceHeader>School Performance</PerformanceHeader>
                    <SchoolPerformance>
                        <p>Average Score: {schoolPerformanceData.averageScore} </p>
                        <p>Total Students: {schoolPerformanceData.totalStudents}</p>
                    </SchoolPerformance>
                    <PerformanceHeader>Individual Performance</PerformanceHeader>
                    <IndividualPerformance>
                        {individualPerformanceData.map((student) => (
                            <p key={student.id}>
                                {student.name} : {student.score}
                            </p>
                        ))}
                    </IndividualPerformance>
                </PerformanceContent>
            </Content>
        </PerformanceContainer>
    )
};

export default Performance