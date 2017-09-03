(function($) {
  const initialDatabase = ['JS', 'React', 'Node.js'];
  // скачал с сервера
  const model = new Model(initialDatabase);
  const view = new View(initialDatabase);
  const view2 = new ViewSuper(initialDatabase);

  const controller = new Controller(model, view2);

})();
