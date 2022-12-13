import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description3', true, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => {
            console.log('Tasklist componente is going to unmount...');
        };
    }, [tasks]);

    function completeTask(task) {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        // We updte the state of the component with the new list of tasks and it will update the
        // iteration of the tasks in order to show the task updated
        setTasks(tempTask);
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task) {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    function Table() {
        return (
            <table>
            <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                { tasks.map((task, index) => {
                    return (
                        <TaskComponent 
                            key={index} 
                            task={task}
                            complete={completeTask}
                            remove={deleteTask}
                        >
                        </TaskComponent>
                    )
                })}
            </tbody>
        </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mbd-scrollbar='true' style={{position:'relative', height: '400px'}}>
                        {/* TODO: Add loading spinner */}
                        {loading ? <p className='task-loading'>Loadings tasks ...</p>: tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length} ></TaskForm>    
        </div>
    );
};

export default TaskListComponent;
