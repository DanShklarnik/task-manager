import {TextField, Button} from '@mui/material';
import PriorityDropdown from './PriorityDropdown';
import './TaskForm.css';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContex';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';



const TaskForm = () => {
    const { addTask } = useContext(TaskContext);

    const [formData, setFormData] = useState({title: '', description: '', priority:'', estimateTime: '' });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addTask(formData);
        setFormData({title: '', description: '', priority:'', estimateTime: ''});

    };

    const handleChange = (ev) => {
        ev.preventDefault();
        const {name, value} = ev.target;
        setFormData (prevFormData => ({...prevFormData,[name]:value}));
    }

    return(
        <form onSubmit= {handleSubmit}>
            <TextField
             name = "title" 
             label="Title:" 
             variant="outlined" 
             value = {formData.title}
             onChange={handleChange}
            />

            <TextField 
             name = "description"
             label="Description:" 
             variant="outlined"
             value = {formData.description}
             onChange={handleChange}
            />

            <FormControl variant="outlined" fullWidth>
                <InputLabel id="dropdown-label">How Urgent is the task?</InputLabel>
                <Select
                    name = "priority"
                    labelId="dropdown-label"
                    value={formData.priority}
                    onChange={handleChange}
                    label="How Urgent is the task?"
                >
                    <MenuItem value="high priority">High Priority</MenuItem>
                    <MenuItem value="medium priority">Medium Priority</MenuItem>
                    <MenuItem value="low priority">Low Priority</MenuItem>
                </Select>
            </FormControl>
            
            <TextField
             name = "estimateTime"
             label= "how long will it take? (in hours)"
             type ="number"
             value={formData.estimateTime}
             onChange={handleChange}
            />

            <Button type="submit" variant="contained" color="primary">
                Add To List
            </Button>

            

        </form> 
    );
}

export default TaskForm;
