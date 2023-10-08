export default class Message {
	constructor({ id, sender, text, createdAt }) {
		this.id = id;
		this.sender = sender;
		this.text = text;
		this.createdAt = createdAt ? createdAt : Date.now();
		let currentDate = new Date(this.createdAt);
		this.createdAtFormatted = `${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}`;
	}
}
