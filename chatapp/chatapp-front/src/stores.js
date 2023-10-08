import { writable } from 'svelte/store';
import Message from './models/Message.js';

function createMessagesStore() {
	let id = 3;
	let messages = [
		new Message({ id: 1, sender: 'User A', text: 'Hello there' }),
		new Message({ id: 2, sender: 'User B', text: 'Hi! Would you like to take a test?' })
	];

	const { subscribe, update } = writable(messages);

	function sendMessage(sender, text) {
		return update((toUpdate) => {
			const updatedItem = new Message({ id, sender, text });
			id += 1;
			return [...toUpdate, updatedItem];
		});
	}

	return {
		subscribe,
		sendMessage
	};
}

export const messages = createMessagesStore();
