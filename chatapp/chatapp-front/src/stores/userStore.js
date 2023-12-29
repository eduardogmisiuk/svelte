import {writable} from "svelte/store";

function createUserStore() {
  let user = null;
  const {subscribe, update} = writable(user);

  function updateUser(newUser) {
    return update(() => newUser);
  }

  return {
    subscribe,
    updateUser,

  };
}

export default createUserStore();