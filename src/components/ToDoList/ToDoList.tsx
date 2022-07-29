import React, { useState } from 'react';
import { Task } from '../Task/Task';
import s from './ToDoList.module.css';

interface TaskData {
  id: string;
  title: string;
  description: string;
}

export const ToDoList = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: String(Date.now()),
        title,
        description
      }
    ]);

    setTitle('');
    setDescription('');
  };

  const handleChangTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleDeleteTask = (id: string) => {
    const index = tasks.findIndex((task) => {
      return task.id === id;
    });
    const newTasks = [...tasks].splice(index, 1);
    console.log(newTasks);
    setTasks(newTasks);
    console.log(index);
  };
  console.log('tasks', tasks);
  return (
    <div className={s.wrapper}>
      <div className={s.taskBlock}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
      <div>
        <input
          onChange={handleChangTitle}
          type="text"
          className={s.title}
          placeholder={'Введите заголовок задачи'}
          value={title}
        />
        <textarea
          onChange={handleChangDescription}
          className={s.description}
          placeholder={'Введите описание задачи'}
          value={description}
        />
        <button className={s.addButton} onClick={handleAddTask}>
          Добавить задачу
        </button>
      </div>
    </div>
  );
};
