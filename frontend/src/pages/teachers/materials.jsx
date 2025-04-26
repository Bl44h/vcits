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

const MaterialSection = () => {
  const [newMaterial, setNewMaterial] = useState({ title: '', author: '' });
const [file, setFile] = useState(null);


  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    
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
    
     

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!newMaterial.title || !newMaterial.author || !file) {
          alert("Please fill all fields and select a PDF file!");
          return;
        }
      
        const formData = new FormData();
        formData.append('courseTitle', newMaterial.title);
        formData.append('author', newMaterial.author);
        formData.append('file', file);

        
      
        try {
          const response = await axios.post('http://localhost:4000/api/v1/courseworks', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setMaterials([...materials, response.data.coursework]);
          setNewMaterial({ title: '', author: '' });
          setFile(null);
        } catch (error) {
          console.error('Error adding material:', error);
        }
      };
      

    return (
        <LibraryContainer>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Content isOpen={isOpen}>
                <Title>Course Materials</Title>
                <AddBookForm >
                    <h2>Add New Material</h2>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" id="title" 
                        value={newMaterial.title}
                        onChange={(e) => setNewMaterial({ ...newMaterial, title: e.target.value })}/>
                        </FormGroup>
                    <FormGroup>
                        <Label htmlFor="author">Author</Label>
                        <Input type="text" id="title" value={newMaterial.author} 
                          onChange={(e) => setNewMaterial({ ...newMaterial, author: e.target.value })}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="file">File</Label>
                        <Input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                    </FormGroup>
                    <Button type="submit" onSubmit={handleSubmit} >Add Material</Button>
                </AddBookForm>

                <h2>Course Materials</h2>
                <BookList>
  {Array.isArray(materials) && materials.length > 0 ? (
    materials.map((material, index) => (
      <BookItem key={material._id || index}>
        <BookTitle>{material.courseTitle || "Untitled"}</BookTitle>
        <BookAuthor>by {material.author || "Unknown"}</BookAuthor>
        
        {material.fileUrl ? (
          <a
            href={`http://localhost:4000/${material.fileUrl.replace(/\\/g, '/')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        ) : (
          <p style={{ color: "gray" }}>No file uploaded</p>
        )}
      </BookItem>
    ))
  ) : (
    <p>No course materials found.</p>
  )}
</BookList>

            </Content>
        </LibraryContainer>
    )
};

export default MaterialSection