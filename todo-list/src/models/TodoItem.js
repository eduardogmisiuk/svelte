export default class TodoItem {
  constructor({ id, text, isChecked } = { text: "Add a new note", isChecked: false }) {
    this.id = id;
    this.text = text;
    this.isChecked = isChecked;
  }
}
