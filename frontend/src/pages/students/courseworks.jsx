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
    return (
        <LibraryContainer>
            <SidebarContainer>
                <Sidebar/>
            </SidebarContainer>
            <Content>
                <LibraryHeader>Courseworks</LibraryHeader>
                <BookList>
                    
                </BookList>
            </Content>
        </LibraryContainer>
    )
};

export default CourseworksSection