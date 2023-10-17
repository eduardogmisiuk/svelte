export default class WebSocketClient {
	constructor(onMessageReceived) {
		this.socket = null;
		this.onMessageReceived = onMessageReceived;
	}

	connect() {
		this.socket = new WebSocket('ws://localhost:8080/ws');

		this.socket.onopen = ((e) => {
			console.log('Connection established');
			console.log(e);
		});
		this.socket.onclose = ((e) => {
			console.log('Connection closed');
			console.log(e);
		});
		this.socket.onmessage = ((e) => {
			console.log('Received message');
			console.log(e);
			this.onMessageReceived(e.data);
		});
	}

	sendMessage(message) {
		if (this.socket.readyState === WebSocket.OPEN) {
			this.socket.send(message);
		} else {
			console.error('Failed to connect to WebSocket server');
		}
	}
}
