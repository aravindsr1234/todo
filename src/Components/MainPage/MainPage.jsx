import { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/Tasklist';
import './MainPage.css';

const MainPage = () => {
    const [task, setTask] = useState([]);
    console.log("Task", task);
    return (
        <>
            <div class="to-do-list">
                <h1>To-Do List</h1>
                <AddTask task={task} setTask={setTask} />
                <div class="task-list">
                    <TaskList />
                </div>
                <footer>
                    Total tasks: <span id="total-tasks"></span>, Completed:
                    <span id="completed-tasks"></span>
                </footer>
            </div>
        </>
    )
};

export default MainPage;