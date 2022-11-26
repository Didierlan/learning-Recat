import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import { Task } from '../../models/task.class'


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...'); 
        }
    }, [tasks])



    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <h1>Your Tasks:</h1>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
