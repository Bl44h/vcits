import { useState } from 'react';
import {TeacherSignInContainer,
    FormContainer,
    InputField,
    SubmitButton
 } from '../styles/TeacherSignInStyles';

 const StudentSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Teacher Sign In', {email, password});
    }

    return (
        <TeacherSignInContainer>
            <h2>Teacher Sign In</h2>
            <FormContainer>
                <InputField
                    type='email'
                    placeholder= 'Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    type='password'
                    placeholder= 'Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <SubmitButton type ='button' to="/teachers/dashboard" onclick={handleSignIn} >Sign In</SubmitButton>

            </FormContainer>
        </TeacherSignInContainer>
    )
 }

 export default StudentSignIn;