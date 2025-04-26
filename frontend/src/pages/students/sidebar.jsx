import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsGraphUp,
    BsPeople,
    BsPerson,
    BsFileText,
    BsBook,
    BsGraphDown,
    BsCalendar,
    BsGear,
    BsChatDots,
    BsBookHalf,
    BsQuestionSquare
} from 'react-icons/bs'

import bg1 from '../../assets/VCITS2.png';


const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '230px' : '50px')};
  transition: width 0.3s ease;
  height: 100%;
  border-radius: 8px;
  background-color: rgb(23,23,23); /* Dark blue background */
  color: white;
  font-family: montserrat;
  font-size: 12px;
  font-weight: lighter;
  overflow-x: hidden; /* Enable vertical scrolling */
  padding-top: 40px;
  transition: width 0.3s ease; /* Smooth width transition */
  z-index: 100; /* Ensure sidebar stays above content */

  &::-webkit-scrollbar{
  display: none;}
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid rgb(169, 44, 196); /* Darker border */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(98, 97, 99); /* Darker background on hover */
  }
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;

const SidebarIcon = styled(Link)`
  margin-right: 10px;
  color: rgb(169, 44, 196);
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
    width: ${({ isOpen }) => (isOpen ? '50px' : '25px')};

`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: rgb(169, 44, 196); 
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 30px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;



const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarHeader>
                <Logo src = {bg1} alt= 'Logo' isOpen={isOpen} />
            </SidebarHeader>
            <SidebarNav>
                <SidebarNavItem>
                    <SidebarIcon to=  "/students/dashboard"> <BsGraphUp /> </SidebarIcon>
                    <StyledLink to=  "/students/dashboard" isOpen={isOpen}> Dashboard </StyledLink>
                    </SidebarNavItem>
                {/*
                <SidebarNavItem>
                    <SidebarIcon to=  "/students/assignment"> <BsFileText /> </SidebarIcon>
                    <StyledLink to=  "/students/assignment" isOpen={isOpen} > Assignments </StyledLink>
                </SidebarNavItem>
                */}
                <SidebarNavItem>
                    <SidebarIcon to= "/students/assessment"> <BsBook /> </SidebarIcon>
                    <StyledLink to=  "/students/assessment" isOpen={isOpen} > Assessments </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon to=  "/students/performance" > <BsGraphDown /> </SidebarIcon>
                    <StyledLink to=  "/students/performance" isOpen={isOpen} > Performance </StyledLink>
                </SidebarNavItem>
                {/*
                <SidebarNavItem>
                    <SidebarIcon to=  "/students/attendance" > <BsCalendar /> </SidebarIcon>
                    <StyledLink to=  "/students/attendance" isOpen={isOpen} > Attendance </StyledLink>
                </SidebarNavItem>
                */}
                <SidebarNavItem>
                    <SidebarIcon to=  "/students/courseworks" > <BsBookHalf /> </SidebarIcon>
                    <StyledLink to=  "/students/courseworks" isOpen={isOpen} > Courseworks </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon to=  "/students/announcement" > <BsChatDots /> </SidebarIcon>
                    <StyledLink to=  "/students/announcement" isOpen={isOpen} > Announcements </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon to=  "/students/profile" > <BsGear /> </SidebarIcon>
                    <StyledLink to=  "/students/profile" isOpen={isOpen} > Student Profile </StyledLink>
                </SidebarNavItem>

                <ToggleButton onClick={toggleSidebar}>
                    <ToggleIcon isOpen = {isOpen}>▲</ToggleIcon>
                </ToggleButton>
            </SidebarNav>
        </SidebarContainer>
    )
}

export default Sidebar