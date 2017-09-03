function Controller(model, view) {
  this.model = model;
  this.view = view;
  this.init();
}
// Описываем что Controller будет делать над
// View, elements

Controller.prototype.init = function() {
  // 1. Получаем кнопку
  // 2. Добавить событие addTask
  const { btnAdd } = this.view.elements;
  btnAdd.addEventListener('click', this.addTask.bind(this));
};

Controller.prototype.addTask = function() {
  // 1. Получить значение из input
  const { input } = this.view.elements;
  // 2. Достать значение из input
  const value = input.value;
  input.value = '';
  // 3. Потом добавить в модель
  this.model.addItem(value);
  // 4. Запустить рендер в View
  this.view.render(this.model.dataBase);
};
