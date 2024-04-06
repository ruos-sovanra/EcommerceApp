'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation'
import { FormEvent } from 'react';
import * as Yup from 'yup';
import style from './style.module.css';

type FormValues = {
    email: string;
    password: string;
};

const initialValues: FormValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

const LoginPage = () => {
    const router = useRouter();

    const handleSubmit = async (values: FormValues) => {
        try {
            const response = await fetch(`${BaseUrl}user/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const { access_token } = await response.json();
                localStorage.setItem('token', access_token);
                router.push('/');
            } else {
                // Handle error
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <main className={style.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ errors, touched }) => (
                    <Form className="bg-gray-100 p-4 rounded-lg w-96">
                        <h1 className={`${style.title}`}>Login</h1>
                        {/* Email */}
                        <div className="mb-5">
                            <label className={style.label} htmlFor="email">
                                Email
                            </label>
                            <Field
                                type="email"
                                placeholder="Email"
                                name="email"
                                id="email"
                                className={style.input}
                            />
                            <ErrorMessage name="email" component="div" className={style.error}/>
                        </div>
                        {/* Password */}
                        <div className="mb-5">
                            <label className={style.label} htmlFor="password">
                                Password
                            </label>
                            <Field
                                type="password"
                                placeholder="Password"
                                name="password"
                                id="password"
                                className={style.input}
                            />
                            <ErrorMessage name="password" component="div" className={style.error}/>
                        </div>
                        <button type="submit" className={style.button}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </main>
    );
};

export default LoginPage;
