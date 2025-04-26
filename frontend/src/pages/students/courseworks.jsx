import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios';
import {
    LibraryContainer,
    SidebarContainer,
    Content,
    LibraryHeader,
    BookList,
    BookItem,
    BookTitle

} from '../../styles/LibraryStyles';

const CourseworksSection = () => {

    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
    return (
        <LibraryContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <LibraryHeader>Courseworks</LibraryHeader>
                <BookList>
                    
                </BookList>
            </Content>
        </LibraryContainer>
    )
};

export default CourseworksSection