import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add , lenght }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )

        add(newTask);

    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-mg' required autoFocus placeholder='Task Name' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-mg' required placeholder='Task description' />
                <select className='form-select form-select-sm' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>

                    <option style={{color: 'blue', fontWeight: 'bold'}} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={{color: 'yellow', fontWeight: 'bold'}} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={{color: 'red', fontWeight: 'bold'}}value={LEVELS.BLOCKING}>
                        Blocking
                    </option>

                </select>
                <button type='submit' className='btn btn-primary btn-lg ms-2'>{lenght > 0 ? 'Add new task' : 'Create your firts task'}</button>


            </div>
        
            

        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    lenght: PropTypes.number.isRequired,

}
export default TaskForm;
