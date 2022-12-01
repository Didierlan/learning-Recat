import React from 'react';
import { User } from '../../../models/user.class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = ({lol}) => {
    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    const registerSchema = yup.object().shape(
        {
            username: yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),

            email: yup.string()
                .email('Invalid email format')
                .required('email is required'),

            password: yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),

            confirm: yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: yup.string().oneOf(
                        [yup.ref("password")],
                        '¡Passwords must match!'
                    )
                }).required('You must confirm the password'),


            role: yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select Role ADMIN/USER')
                .required('role is required')

        }
    )




    const submit = (values) => {
        alert('se ha echo clik')
    }
    return (
        <div>
            <h4>Register Formik</h4>

            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credential', JSON.stringify(values))
                }}

            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="Jhoe" />

                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name="username" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

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
                            placeholder="****"
                            type='password'
                        />

                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Confirm Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="****"
                            type='password'
                        />

                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit">Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>

                )}




            </Formik>


        </div>
    );
}

export default RegisterFormik;
