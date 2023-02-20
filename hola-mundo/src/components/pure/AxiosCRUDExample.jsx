import React from 'react';
import { login, getAllUsers, getAllPagedUsers, getUsersByID, createUser } from '../../services/axiosCRUDService';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosCRUDExample = () => {
    
    const authUser = (values) => {
        login(values.email,values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login Failure');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'))
    }
    
    const initialCredentials = {
        email: '',
        password: ''
    }
   
    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }
    );

    // CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }

    const obtainUsersByID = (id) => {
        getUsersByID(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }

    const createNewUser = (name, job) => {
        createUser(name,job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error(`User not created`);
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`));
    }

    const navigate = useNavigate();

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues = { initialCredentials }
                // *** Yup Validation Schema
                validationSchema = {loginSchema}
                // *** onSubmit Event
                onSubmit = { async (values) => {
                    authUser(values)
                }}
            >

                {/* We obtain props from Formik */}

                {({errors, touched, isSubmitting}) => 
                    {
                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {/* Email errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />

                            {/* Password errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                )
                            }

                            <button type="submit">Login</button>
                            {isSubmitting ? ( <p>Login your credentials...</p>): null}
                        </Form>
                    )
                }}
            </Formik>
            <br/>
            <button onClick={() => {navigate('/register')}}>Register</button>
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>Get all users with Axios</button>
                <button onClick={() => obtainAllPagedUsers(1)}>Get all users (Page 1) with Axios</button>
                <button onClick={() => obtainUsersByID(1)}>Get user 1</button>
                <button onClick={() => createNewUser('Cristian Marin','Analista')}>Created User</button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
