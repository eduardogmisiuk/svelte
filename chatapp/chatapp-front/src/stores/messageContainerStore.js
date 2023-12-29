import {writable} from "svelte/store";

function createMessageContainerStore() {
  let initMessageContainer = null;
  const {subscribe, update} = writable(initMessageContainer);

  function addMessageContainer(newMessageContainer) {
    return update(() => newMessageContainer);
  }

  function scrollToBottom() {
    return update((messageContainer) => {
      if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight;
        return messageContainer;
      }
    });
  }

  return {
    subscribe,
    addMessageContainer,
    scrollToBottom
  };
}

export const messageContainerStore = createMessageContainerStore();