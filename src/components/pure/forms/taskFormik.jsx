import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskFormik = ({ add, lenght }) => {

    const levelRef = useRef(LEVELS.NORMAL);

    const initialValues = {
        name: '',
        description: '',
        state: false,
        level: LEVELS.NORMAL,
    }

    const taskSchema = yup.object().shape(
        {
            name: yup.string()
                .min(3, 'Name too short')
                .max(20, 'Name too long')
                .required('name is required'),

            description: yup.string()
                .min(6, 'description too short')
                .required('description is required'),

            level: yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'debes selecionar una de estas')
                .required('level is required')


        }
    )



    return (
        <div>

            <h4>task formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={(value, e) => {
                    const newTask = new Task(
                        value.name,
                        value.description,
                        value.state,
                        levelRef.current.value
                    )

                    add(newTask)

                }}


            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (

                    <Form>
                        <label htmlFor="name">Taks name</label>
                        <Field id="name" type="text" name="name" placeholder="new task" />

                        {
                            errors.name && touched.name &&
                            (
                                <ErrorMessage name="name" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="description">description</label>
                        <Field id="description" type="text" name="description" placeholder="new task" />

                        {
                            errors.description && touched.description &&
                            (
                                <ErrorMessage name="description" component='div'></ErrorMessage>
                            )
                        }

                        <select className='form-select form-select-sm' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>

                            <option style={{ color: 'blue', fontWeight: 'bold' }} value={LEVELS.NORMAL}>
                                Normal
                            </option>
                            <option style={{ color: 'yellow', fontWeight: 'bold' }} value={LEVELS.URGENT}>
                                Urgent
                            </option>
                            <option style={{ color: 'red', fontWeight: 'bold' }} value={LEVELS.BLOCKING}>
                                Blocking
                            </option>

                        </select>

                        <button type="submit">{lenght > 0 ? 'Add new task' : 'Create your firts task'}</button>
                        
                    </Form>
                )
                }

            </Formik>

        </div>
    );
}

export default TaskFormik;
