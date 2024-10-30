import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {useContext} from 'react';
import { TaskContext } from '../../context/TaskContex';
import './TaskList.css';


const TaskItem = ({task}) =>{

    const {deleteTask} = useContext(TaskContext);
    const {toggleCompleted} = useContext(TaskContext);


    let priorityImgSrc = "";

    switch (task.priority) {
        case "high priority":
            priorityImgSrc = "/images/highPriority.png";
            break;
        case "medium priority":
            priorityImgSrc = "/images/mediumPriority.png";
            break;
        case "low priority":
            priorityImgSrc = "/images/lowPriority.png";
            break;
        default:
    }

    return(
        <Card sx={{ maxWidth: 345 }} className = 'task-card' >
            <CardActionArea onClick = {() => toggleCompleted(task.id)}>
                 <CardMedia
                component="img"
                width = "100%"
                image = {priorityImgSrc}
                alt="urgency logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {task.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {task.description}
                        <p id ="estimateTime">{task.estimateTime} h'</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick = {() => deleteTask(task.id)}>
                    delete
                </Button>
            </CardActions>
        </Card>

    );
}

export default  TaskItem;