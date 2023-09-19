import { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

export function useTasks() {
    return useContext(TasksContext);
}

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    );
}
