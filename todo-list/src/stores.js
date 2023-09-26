import { writable } from "svelte/store";
import TodoItem from "./models/TodoItem.js";

function createItems() {
  const { subscribe, update } = writable([]);

  let id = 0;

  function addNewTodo(text) {
    return update((toUpdate) => {
      id += 1;
      return [...toUpdate, new TodoItem(id, text)];
    });
  }

  function removeTodo(id) {
    return update((toUpdate) => {
      return toUpdate.filter((item) => item.id !== id);
    });
  }

  return {
    subscribe,
    addNewTodo,
    removeTodo
  };
}

export const items = createItems();