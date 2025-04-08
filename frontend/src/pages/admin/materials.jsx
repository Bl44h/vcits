import React, { useEffect, useState } from "react";
import Sidebar from './sidebar';
import axios from 'axios'
import {
    LibraryContainer,
    Content,
    Title,
    AddBookForm,
    FormGroup,
    Label,
    Input,
    Button,
    BookList,
    BookItem,
    BookTitle,
    BookAuthor,
    ActionButton
} from '../../styles/LibraryStyles'

const Materials = () => {
    
      const [materials, setMaterials] = useState([]);
    
      useEffect(() => {
        fetchMaterials();
      }, []);
    
      const fetchMaterials = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/v1/courseworks/getall');
          setMaterials(response.data.materials);
        } catch (error) {
          console.error('Error fetching materials:', error);
        }
      };
    
      const addMaterial = async (material) => {
        try {
          const response = await axios.post('http://localhost:4000/api/v1/courseworks', {
            courseTitle: material.title,
            author: material.author,
          });
          setMaterials([...materials, response.data]);
        } catch (error) {
          console.error('Error adding material:', error);
        }
      };
    
      /*const handleBookPick = async (bookId, studentId) => {
        // Implement logic to record when a student picks a book
      };
    
      const handleBookReturn = async (bookId, studentId) => {
        // Implement logic to mark when a student returns a book
      };
    */

    return (
        <LibraryContainer>
            <Sidebar/>
            <Content>
                <Title>Course Materials</Title>
                <AddBookForm>
                    <h2>Add New Material</h2>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" id="title"/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="title">Author</Label>
                        <Input type="text" id="title"/>
                    </FormGroup>
                    <Button type="submit">Add Material</Button>
                </AddBookForm>

                <h2>Books</h2>
                <BookList>
                    {materials.map((material) => (
                                <BookItem key={material._id}>
                                  <BookTitle>{material.courseTitle}</BookTitle>
                                  <BookAuthor>by {material.author}</BookAuthor>
                                  {/*<ActionButton onClick={() => handleBookPick(book._id, 'student123')}>Pick</ActionButton>
                                  <ActionButton onClick={() => handleBookReturn(book._id, 'student123')}>Return</ActionButton>
                                  */}
                                </BookItem>
                              ))}
                </BookList>
            </Content>
        </LibraryContainer>
    )
};

export default Materials