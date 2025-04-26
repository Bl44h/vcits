import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios';
import {Line} from 'react-chartjs-2'
import {
    PerformanceContainer,
    SidebarContainer,
    Content,
    PerformanceHeader,
    PerformanceInfo,
    PerformanceGraphContainer,
    TotalMarks
} from '../../styles/PerformanceStyles';

const PerformanceSection = () => {

    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const performanceData = {
        month: ['Jan', 'Feb', 'Mar', 'Apr'],
        marks: [50, 85, 84, 93],
        totalMarks: 520
    };

    const lineChartData = {
        labels: performanceData.month,
        datasets: [
            {
                label: 'Performance Trends',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                data: performanceData.marks
            }
        ]
    };

    return (
        <PerformanceContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <PerformanceHeader>Performance</PerformanceHeader>
                <PerformanceInfo>
                    {/* <PerformanceGraphContainer>
                        <Line
                            data = {lineChartData}
                            options = {{
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }   
                            }}
                        />
                    </PerformanceGraphContainer> */}
                    <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
                </PerformanceInfo> 
            </Content>
        </PerformanceContainer>
    )
};

export default PerformanceSection