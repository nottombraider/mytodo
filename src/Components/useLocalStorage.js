import { useEffect } from 'react';
import { useArray } from 'react-hanger/array';

const LOCAL_STORAGE_KEY = 'toDoTaskList';


export const useLocalStorage = (key = LOCAL_STORAGE_KEY) => {
  const getInitialState = () => {
    const initialStr = localStorage.getItem(key);

    if (initialStr) {
      return JSON.parse(initialStr);
    }

    return [];
  };
  const [tasks, tasksActions] = useArray(getInitialState);

  useEffect(() => {
    const itemsStr = JSON.stringify(tasks);

    localStorage.setItem(key, itemsStr);
  }, [tasks]);
  
  return [tasks, tasksActions];
};
