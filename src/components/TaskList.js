// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
            <button onClick={() => onEditTask(task)}>Modificar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
