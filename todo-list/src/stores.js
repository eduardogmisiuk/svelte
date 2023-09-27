import { writable } from "svelte/store";
import TodoItem from "./models/TodoItem.js";

function createItems() {
  const { subscribe, update } = writable([]);

  let id = 0;

  function addNewTodo(text) {
    return update((toUpdate) => {
      id += 1;
      return [...toUpdate, new TodoItem({ id, text })];
    });
  }

  function removeTodo(id) {
    return update((toUpdate) => {
      return toUpdate.filter((item) => item.id !== id);
    });
  }

  function updateTodo(toUpdate) {
    return update((items) => items.map(item => item.id === toUpdate.id ? toUpdate : item));
  }

  return {
    subscribe,
    addNewTodo,
    removeTodo,
    updateTodo
  };
}

export const items = createItems();