import React from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../history';

function Login(){
    const handleSubmit = values =>{
        axios.get('http://localhost/API%20react/action/login.php', values)
        .then(resp => {
            const { data } = resp
            if(data) {
                localStorage.setItem('app-token', data)
                history.push('/')
                console.log(resp)
            }
        })
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(' Email obrigatório!'),
        password: yup.string().min(8).required(' Senha obrigatória!')
    })
    return (
            <div className="container">
                <div className="text-center mt-5">
                    <h1>Login</h1>
                    <p>Acesse sua conta</p>
                </div>
                <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                    <Form className="form">
                        <div className="form-group">
                            <Field type="email" name="email" placeholder="Email" className="form-control" />
                            <ErrorMessage component="span" name="email" className="text-danger lead"/>
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" placeholder="Senha" className="form-control"/>
                            <ErrorMessage component="span" name="password" className="text-danger lead"/>
                        </div>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </Form>
                </Formik>
            </div>
    )
}

export default Login;