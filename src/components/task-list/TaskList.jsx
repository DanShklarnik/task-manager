import { useContext } from 'react';
import Grid from '@mui/material/Grid2';
import { TaskContext } from '../../context/TaskContex';
import './TaskList.css';
import ListContainer from '../ListContainer/ListContainer';
import AddTask from '../add-task/AddTask';


const TaskList = () => {
    return(
        <>
            <AddTask/>
            <ListContainer title = "Tasks To Complete:" booleanValue={false}/>
            <ListContainer title = "Already Done:" booleanValue={true}/>
        </>
    );
}

export default TaskList;