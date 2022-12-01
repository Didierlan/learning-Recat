import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'

import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge text-bg-success'>{task.level}</span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge text-bg-warning'>{task.level}</span>
                    </h6>
                )

            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge text-bg-danger'>{task.level}</span>
                    </h6>
                )


            default:
                return (
                    <h6 className='mb-0'>
                        <span className='badge text-bg-primary'>{task.level}</span>
                    </h6>
                )
        }
    }


    function taskCompletedIcon() {
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{ color: '#214cce', fontWeight: 'bold' }}></i>)
        }else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{ color: 'grey', fontWeight: 'bold' }}></i>)
        }
    }


    const taskCompleted = {
        color: 'green'
    }

    const taskPending = {
        color: 'yellow'
    }

    


    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                {/*esta seria otra forma utilizando el operador ternario */}
                {/* {task.completed ?
                    (<i className='bi-toggle-on' style={{ color: 'blue', fontWeight: 'bold' }}></i>)
                    : (<i className='bi-toggle-off' style={{ color: 'grey', fontWeight: 'bold' }}></i>)} */}

                <i  onClick={() => remove(task)}className='bi-trash task-action' style={{ color: 'grey' }}></i>

                {/* <span>{task.completed ? 'COMPLETED' : 'PENDING'}</span> */}
            </td>


        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,

};


export default TaskComponent;
