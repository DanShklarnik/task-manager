import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([
        {id: 0, title: 'clean the house', description:'wash floor and clean dust', priority: "high priority" , estimateTime: 0.5, completed: false},
        {id: 1, title: 'clean the car', description:'to take the car to the gas station to a wash', priority: "high priority" , estimateTime: 1, completed: false},
        {id: 2, title: 'call mom', description:'to talk to mom after long time', priority: "medium priority" , estimateTime: 3.5, completed: false},
        {id: 3, title: 'prepare food', description:'to make 4 fish dishes', priority: "medium priority" , estimateTime: 2, completed: false},
        {id: 4, title: 'edit my progect', description:'Add design to the new feature', priority: "low priority", estimateTime: 0.25, completed: false},
        {id: 5, title: 'management meeting', description:'Schedule a management meeting and set goals for the coming month ', priority: "low priority", estimateTime: 5, completed: false},
        ]);

    const [newId, setNewId] = useState(6);

    const [prioritiesTodo, setPrioritiesTodo] = useState(() => ["high priority", "medium priority", "low priority"]);
    const [prioritiesDone, setPrioritiesDone] = useState(() => ["high priority", "medium priority", "low priority"]);

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }

    const addTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks,{...newTask, id: newId, completed: false}]);
        setNewId(prevNewId => (prevNewId + 1));

    }

    const toggleCompleted = (id) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
        

    }


    const handlePrioritiesTodo = (event, newPriorities) => {
        setPrioritiesTodo(newPriorities);
    };

    const handlePrioritiesDone = (event, newPriorities) => {
        setPrioritiesDone(newPriorities);
    };
     

    return (
        <TaskContext.Provider value = {{tasks, deleteTask, toggleCompleted, prioritiesTodo, prioritiesDone, handlePrioritiesTodo,
            handlePrioritiesDone, addTask}}>
            {children}
        </TaskContext.Provider>

    );
};