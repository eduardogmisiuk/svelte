import { writable } from "svelte/store";
import TodoItem from "./models/TodoItem.js";

const LOCAL_STORAGE_KEY = "todo-list-items";

function createItems() {
  let id = 1;
  let items = [];

  const item = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (item) {
    const itemsStorage = JSON.parse(item);
    id = itemsStorage.id;
    items = itemsStorage.items;
  }

  const { subscribe, update } = writable(items);

  function updateLocalStorage(updatedItems) {
    const value = { id, items: updatedItems };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
  }

  function addNewTodo(text) {
    return update((toUpdate) => {
      const updatedItem = new TodoItem({ id, text });
      id += 1;
      const updatedList = [...toUpdate, updatedItem];

      updateLocalStorage(updatedList);

      return updatedList;
    });
  }

  function removeTodo(id) {
    return update((toUpdate) => {
      const updatedList = toUpdate.filter((item) => item.id !== id);

      updateLocalStorage(updatedList);

      return updatedList;
    });
  }

  function updateTodo(toUpdate) {
    return update((items) => {
      const updatedList = items.map(item => item.id === toUpdate.id ? toUpdate : item);

      updateLocalStorage(updatedList);

      return updatedList;
    });
  }

  return {
    subscribe,
    addNewTodo,
    removeTodo,
    updateTodo
  };
}

export const items = createItems();