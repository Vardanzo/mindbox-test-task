import React, { useState } from 'react';
import s from './Task.module.css';

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  onDelete: (id: string) => void;
}

export const Task: React.FC<TaskProps> = ({ title, description, id, onDelete }) => {
  const [finished, setFinished] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const completeTask = () => {
    setFinished(!finished);
  };

  return (
    <div className={`${s.card} ${finished && s.taskDone}`}>
      <button onClick={completeTask}>{finished ? 'Вернуть в работу' : 'Завершить задачу'}</button>
      <button onClick={handleDelete}>Удалить задачу</button>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
    </div>
  );
};
