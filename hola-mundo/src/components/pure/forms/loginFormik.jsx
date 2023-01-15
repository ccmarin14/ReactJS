import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
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
                    await new Promise((r) => setTimeout(r, 1000));
                    alert (JSON.stringify(values, null , 2));
                    // We save credentials in navegator
                    await localStorage.setItem('credentials', values);
                    navigate('/profile');
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
        </div>

    );
}

export default LoginFormik;
