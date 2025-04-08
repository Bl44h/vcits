
import React from 'react';


import {Navbar, 
        Logo,
        NavigationLinks,
        NavLink,
        ButtonsContainer, 
        LoginButton,
        //GuestButton,
        HomeContainer,
        SchoolInfo,
        SchoolImage,
        Title, 
        LoremTextContainer,
        AdminRegisterLink
} from '../styles/styles';

import bg from '../../src/assets/paper background.jpg';
import bg1 from '../../src/assets/VCITS.png';
import {Link, useNavigate} from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    
    
    const handleLoginClick = () => {
        navigate('/choose-user');
    };

    return (
        <>
            {/*<Navbar>
                <Logo src={bg1} alt='Logo' />
                <NavigationLinks>
                    <NavLink href = '#'> </NavLink>
                    <NavLink href = '#'> </NavLink>
                    <NavLink href = '#'> </NavLink>
                </NavigationLinks>
                <ButtonsContainer>
                    <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
                </ButtonsContainer>
            </Navbar> */}
            <HomeContainer>
                <SchoolInfo>
                <Logo src={bg1} alt='Logo' />
                    <Title> VIRTUAL CLASSROOM</Title>
                    <ButtonsContainer>
                    <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
                </ButtonsContainer>
                    
                </SchoolInfo>
                
            </HomeContainer>
        </>
    );
};

export default Home;