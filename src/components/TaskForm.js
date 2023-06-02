// TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, onUpdateTask, editTask }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
      onUpdateTask({ id: editTask.id, title: title });
    } else if (title.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: title
      };
      onAddTask(newTask);
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{editTask ? 'Actualizar tarea' : 'Agregar tarea'}</button>
    </form>
  );
};

export default TaskForm;