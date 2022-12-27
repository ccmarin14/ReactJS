import React from 'react';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from 'formik';
import { User } from '../../../models/user.class';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        roles: ROLES.USER
    }


    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when('password',{
                    is: value => (value && value.length > 0 ? true: false),
                    then: Yup.string().oneOf(
                        [yup.ref('password')],
                        '¡Passwords must match!'
                    )
                }).required('You must confirm the password')
        }
    )
    
    const submit = () => {
        alert('Register user');
    }

    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ]

    const [data, setData] = useState(initialData);
    
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
