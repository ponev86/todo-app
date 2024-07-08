import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export enum Filter {
  all,
  active,
  completed,
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.all);

  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filterChange = (filter: Filter) => setFilter(filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === Filter.active) return !task.completed;
    if (filter === Filter.completed) return task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTask onAddTask={addTask} />
      <FilterButtons currentFilter={filter} onFilterChange={filterChange} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
