import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'task/addTask',
    payload: {
      id: nanoid(),
      completed: false,
      text: text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payLoad: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'tasks/setStatusFilter',
    payload: value,
  };
};
