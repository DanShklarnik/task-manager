import { useContext } from 'react';
import Grid from '@mui/material/Grid2';
import { TaskContext } from '../../context/TaskContex';
import TaskItem from '../task-list/TaskItem';
import './ListContainer.css';
import UrgencyFilter from '../filters/UrgencyFilter';

const ListContainer = ({title, booleanValue}) => {
    const {tasks,
        prioritiesTodo, 
        prioritiesDone, 
        handlePrioritiesTodo, 
        handlePrioritiesDone} = useContext(TaskContext);

    const priorities = title === "Tasks To Complete:" ? prioritiesTodo :  prioritiesDone;
    const handlePriorities = title === "Tasks To Complete:" ? handlePrioritiesTodo : handlePrioritiesDone;


    return (
        <div className = "list-container">
            <div className = "list-header">
                <h1>{title}</h1>
                <UrgencyFilter handlePriorities = {handlePriorities} priorities = {priorities}/>

            </div>
            <Grid container spacing={2} justifyContent="center">
                {tasks.filter(task => priorities.includes(task.priority) && task.completed == booleanValue)
                .sort((task1, task2) => task2.estimateTime - task1.estimateTime)
                .map((task) => 
                    <Grid size={{ xs: 12, s: 6, md: 4, lg: 2}} key={task.id}>
                        <TaskItem task = {task}/>
                    </Grid>
                 )}
            </Grid>
        </div>

    );

}

export default ListContainer;



