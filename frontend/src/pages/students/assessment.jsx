import React, { useEffect, useState} from "react";
import Sidebar from './sidebar';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import {
    ExamContainer,
    SidebarContainer,
    Content,
    ExamHeader,
    ExamResultsContainer,
    ExamSubject,
    ExamResult,
    ExamChartContainer
} from '../../styles/ExamStyles';
import { useRef } from 'react';

const AssessmentSection = () => {
    const chartRef = useRef(null);

    // Sample exam results data
    const examResultsData = {
        courses: ['CSC111', 'CSC101', 'GNS101', 'MAT111'],
        results: [80, 75, 90, 85] // Sample results out of 100
    };

    // Bar chart data
    const barChartData = {
        labels: examResultsData.courses,
        datasets: [
        {
            labels: 'Exam Results',
            backgroundColor: '#007BFF',
            borderColor: '#007bff',
            borderWidth: '1',
            hoverBackgroundColor: '#0056b3',
            hoverBorderColor:  '#0056b3',
            data: examResultsData.results
        }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                type: 'linear',
                beginAtZero: true,
                max: 100
            }
        }
    }

    return (
        <ExamContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
                <ExamHeader>Assessment Results</ExamHeader>
                {/* <ExamResultsContainer>
                    {examResultsData.courses.map((course, index) => (
                        <div key={index}>
                            <ExamSubject>{course}</ExamSubject>
                            <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
                        </div>
                    ))}

                    <ExamChartContainer>
                    <Bar
                    ref={chartRef}
                    data = {barChartData}
                    options={chartOptions}
                />
                    </ExamChartContainer>
    
                </ExamResultsContainer> */}
                
            </Content>
        </ExamContainer>
    );  
};

export default AssessmentSection