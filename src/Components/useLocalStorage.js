import { useState } from 'react';

const LOCAL_STORAGE_KEY = 'toDoTaskList';

export const useLocalStorage = (key = LOCAL_STORAGE_KEY) => {
  const [state, setState] = useState(() => {
    const initialStr = localStorage.getItem(key);

    if (initialStr) {
      return JSON.parse(initialStr);
    }

    return [];
  });

  const setItem = (item, rewriteState) => {
    const items = rewriteState ? [...item] : [...state, item];

    items.sort((a, b) => a.id - b.id);

    const itemsStr = JSON.stringify(items);

    localStorage.setItem(key, itemsStr);

    setState(items);
  };

  const updateItem = (itemId, status) => {
    const item = state.find((item) => item.id === itemId);

    item.done = status;

    setItem(state, true);
  };

  const deleteCompletedItem = () => {
    const undoneItems = state.filter((item) => !item.done);

    setItem(undoneItems, true);
  };

  return [state, { setItem, updateItem, deleteCompletedItem }];
};
