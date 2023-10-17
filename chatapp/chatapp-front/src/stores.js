import { writable } from 'svelte/store';
import Message from './models/Message.js';
import WebSocketClient from '$lib/WebSocketClient.js';

function createMessagesStore() {
	const users = [
		'user123',
		'jane_doe',
		'mike_j',
		'e_davis'
	];
	let messages = [
		new Message({ id: 1, sender: 'user123', text: 'Hi everyone, how\'s it going?' }),
		new Message({ id: 2, sender: 'jane_doe', text: 'Hey! I\'m doing great, thanks for asking.' }),
		new Message({ id: 3, sender: 'mike_j', text: 'Hello, good to see you all!' }),
		new Message({ id: 4, sender: 'e_davis', text: 'Hey there! I\'m doing well too.' }),
		new Message({ id: 5, sender: 'mike_j', text: 'Has anyone heard about the new project updates?' }),
		new Message({ id: 6, sender: 'jane_doe', text: 'Yes, I\'ve been keeping an eye on it. Looks promising.' }),
		new Message({ id: 7, sender: 'user123', text: 'I\'m excited to see how it turns out.' }),
		new Message({ id: 8, sender: 'e_davis', text: 'Me too, the team has been working hard on it.' }),
		new Message({ id: 9, sender: 'user123', text: 'That\'s great to hear. Let\'s keep up the good work!' }),
		new Message({ id: 10, sender: 'jane_doe', text: 'Absolutely! We\'ve got this.' }),
		new Message({ id: 11, sender: 'e_davis', text: 'I also wanted to remind everyone about the upcoming meeting.' }),
		new Message({ id: 12, sender: 'jane_doe', text: 'Thanks for the heads up. I\'ll make sure to be there.' }),
		new Message({ id: 13, sender: 'mike_j', text: 'Any specific agenda for the meeting?' }),
		new Message({ id: 14, sender: 'user123', text: 'We\'ll be discussing the quarterly targets and progress.' }),
		new Message({ id: 15, sender: 'jane_doe', text: 'And also the timeline for the upcoming release.' }),
		new Message({ id: 16, sender: 'mike_j', text: 'Sounds good, I\'ll prepare a brief on our progress.' }),
		new Message({ id: 17, sender: 'e_davis', text: 'Thanks, Mike_J. That would be helpful.' }),
		new Message({ id: 18, sender: 'user123', text: 'Is there anything else we need to cover?' }),
		new Message({ id: 19, sender: 'jane_doe', text: 'I think that should cover the main points.' }),
		new Message({ id: 20, sender: 'e_davis', text: 'Great, looking forward to the discussion.' })
	];
	let id = messages.length + 1;

	let wsClient = new WebSocketClient(receiveMessageAsAnyUser);
	wsClient.connect();

	const { subscribe, update } = writable(messages);

	function receiveMessage(sender, text) {
		return update((toUpdate) => {
			const updatedItem = new Message({ id, sender, text });
			id += 1;
			return [...toUpdate, updatedItem];
		});
	}

	function receiveMessageAsAnyUser(text) {
		const i = Math.floor(Math.random() * 4);
		const sender = users[i];
		return update((toUpdate) => {
			const updatedItem = new Message({ id, sender, text });
			id += 1;
			return [...toUpdate, updatedItem];
		});
	}

	function sendMessage(message) {
		wsClient.sendMessage(message);
	}

	return {
		subscribe,
		receiveMessage,
		receiveMessageAsAnyUser,
		sendMessage
	};
}

function createMessageContainerStore() {
	let initMessageContainer = null;
	const { subscribe, update } = writable(initMessageContainer);

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

export const messages = createMessagesStore();
export const messageContainer = createMessageContainerStore();
