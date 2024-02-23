import { useState } from "react";
import axios from 'axios';

const AddTask = ({ task, setTask }) => {

    const [data, setData] = useState({
        title: "",
        description: "",
        date: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (data) => {
        setTask(data);
        const res = await axios.post('http://localhost:3030', data);
    }

    return (
        <>
            <div class="add-task-container">
                <input type="text" placeholder="Add new task..." id="new-task" name="title" onChange={(e) => handleChange(e)} />
                <input type="date" placeholder="Add new task..." id="new-task" name="date" onChange={(e) => handleChange(e)} />
                <select id="task-filter" name="category" onChange={(e) => handleChange(e)}>
                    <option value="optional">All</option>
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="optional">Optional</option>
                </select>
                <textarea name="description" id="" cols="60" rows="2" placeholder='Description' onChange={(e) => handleChange(e)}></textarea>
                <button id="add-task-button" type="submit" onClick={() => handleSubmit(data)}>+</button>
            </div>
        </>
    )
};

export default AddTask;