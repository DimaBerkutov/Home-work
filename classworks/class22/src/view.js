class View {
  constructor(data) {
    this.elements = {
      listItem: document.querySelector('.list-item'),
      btnAdd: document.querySelector('.btn'),
      input: document.querySelector('input')
    };
    this.render(data);
  }

  render(data) {
    this.elements.listItem.innerHTML = data.reduce(
      (tasksList, task) => {
        return tasksList + `<li>${task}</li>`
      },
      ''
    );
  }
}
