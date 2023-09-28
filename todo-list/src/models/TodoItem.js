export default class TodoItem {
  constructor({ id, text, isChecked } = { text: "Add a new note", isChecked: false }) {
    this.id = id;
    this.text = text;
    this.isChecked = isChecked;
    this.createdAt = Date.now();
    let currentDate = new Date(this.createdAt);
    this.createdAtFormatted = `${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}`;
  }
}
