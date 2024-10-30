import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import TaskForm from '../task-form/TaskForm';
import './AddTask.css';

const AddTask = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    }
    

    return(
        <div className="add-task-div">
            <Fab className = "open-btn" variant="extended" onClick= {toggleForm}>
                <AddIcon sx={{ mr: 1 }} />
                {isFormVisible ? 'Close' : 'Add Task'}
            </Fab>
            {isFormVisible && <TaskForm/>}
        </div>
    );
}

export default AddTask;