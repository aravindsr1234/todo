import axios from "axios";
import { useEffect, useState } from "react";

const TaskList = () => {
    const { data, setData } = useState([]);
    // useEffect(() => {
    //     const res = axios.get('http://localhost:3030');
    //     setData(res);
    // }, []);
    return (
        <>TaskList</>
    )
};

export default TaskList;