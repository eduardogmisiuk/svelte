export default class TodoItem {
	constructor(id, text = 'Add a new note', isChecked = false) {
		this.id = id;
		this.text = text;
		this.isChecked = isChecked;
	}
}
