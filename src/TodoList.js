import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    // Fetch tasks from the backend
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = () => {
    if (taskName.trim() !== '') {
      fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: taskName }),
      })
        .then(response => response.json())
        .then(newTask => {
          setTasks([...tasks, newTask]);
          setTaskName('');
        })
        .catch(error => console.error('Error adding task:', error));
    }
  };

  const toggleTaskCompletion = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
    })
      .then(response => response.json())
      .then(updatedTask => {
        const updatedTasks = tasks.map(task =>
          task._id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id));
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className='tasksContainer'>
      <div className='addTask'>
      <h2>add task</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="enter task name"
      />
      <button onClick={addTask}>add task</button>
      </div>
      <div className='currentTask'>
      <h2>current tasks</h2>
      <ul>
        {tasks.filter(task => !task.completed).map(task => (
          <li key={task._id}>
            <span className="taskName">{task.name}</span>
            <button onClick={() => toggleTaskCompletion(task._id)}>complete</button>
            <button onClick={() => deleteTask(task._id)}>delete</button>
          </li>
        ))}
      </ul>
      </div>
      <div className='completedTask'> 
      <h2>completed tasks</h2>
      <ul>
        {tasks.filter(task => task.completed).map(task => (
          <li key={task._id}>
            <span className="taskName">{task.name}</span>
            <button onClick={() => toggleTaskCompletion(task._id)}>undo</button>
            <button onClick={() => deleteTask(task._id)}>delete</button>
          </li>
        ))}
      </ul>
      </div> 
    </div>
  );
};

export default TodoList;