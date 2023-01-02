import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({add, length}) => {

    let task = new Task();

    const initialValues = {
        name: task.name,
        description: task.description,
        level: task.level
    }


    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(4, 'Task too short')
                .max(25, 'Task too long')
                .required('Task name is required'),
            description: Yup.string()
                .min(4, 'Task description too short')
                .max(50, 'Task description too long')
                .required('Description is required'),
            level: Yup.string()
                .oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT], 'You must select a level: blocking, normal, urgent')
                .required('Levels is required')
        }
    )

    function addTask(e, values) {
        e.preventDefault();
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        );
        add(newTask);
    }

    return (
        <div>
            <Formik
                // *** Initial values that the form will take
                initialValues = { initialValues }
                // *** Yup Validation Schema
                validationSchema = { taskSchema }
                // *** onSubmit Event
                onSubmit = { async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    addTask(values);
                    // We save credentials in navegator
                    localStorage.setItem('task', values)
                }}
            >

                {/* We obtain props from Formik */}

                {({errors, touched, isSubmitting}) => 
                    {
                    return (
                        <Form>
                            <div >
                                <Field 
                                    id="task" 
                                    type="task" 
                                    name="task" 
                                    placeholder="Task name" 
                                    className='form-control form-lg' 
                                />

                                {/* Task errors */}
                                {
                                    errors.task && touched.task && (
                                        <ErrorMessage name="task" component='div'></ErrorMessage>
                                    )
                                }
                            </div>

                            <div>
                                <Field 
                                    id="description" 
                                    name="description" 
                                    placeholder="description" 
                                    type="description" 
                                    className='form-control form-lg'
                                />

                                {/* Description errors */}
                                {
                                    errors.description && touched.description && 
                                    (
                                        <div className='error'>
                                            <p>{errors.description}</p>
                                        </div>
                                    )
                                }
                            </div>

                            <div>
                                <Field 
                                    name="selectLevel" 
                                    as="select" 
                                    defaultValue={LEVELS.NORMAL}
                                    className='form-control form-lg'
                                >
                                    <option value={LEVELS.NORMAL}>
                                        Normal
                                    </option>
                                    <option value={LEVELS.URGENT}>
                                        Urgent
                                    </option>
                                    <option value={LEVELS.BLOCKING}>
                                        Blocking
                                    </option>
                                </Field>
                            </div>

                            <button 
                                type="submit" 
                                className='btn btn-success btn-lg ms-2'
                            >
                                Add task</button>
                            {isSubmitting ? ( <p>{length > 0 ? 'Add new task': 'Create your first task'}</p>): null}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
