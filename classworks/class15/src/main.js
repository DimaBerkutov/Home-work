const app = {
  appName: 'Тест по программированию',
  questions: [
    {
      name: 'Вопрос 1',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    }, // приходят с сервера
    {
      name: 'Вопрос 2',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [1]
    }, // приходят с сервера
    {
      name: 'Вопрос 3',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    } // приходят с сервера
  ],

  createLi() {
    return this.new('li');
  },
  createAnswer(answer) {
    const liAnswer = this.createLi();
    const label = this.new('label');
    label.textContent = answer;
    const input = this.new('input');
    input.setAttribute('type', 'checkbox');
    liAnswer.appendChild(input);
    console.log(input.getAttribute('type'));
    liAnswer.appendChild(label);
    return liAnswer;
  },
  render() {
    const body = document.body;
    const main = this.new('main');
    const h1 = this.new('h1');
    h1.textContent = this.appName;
    const ol = this.new('ol');
    const button = this.new('button');
    button.textContent = 'Проверить';

    main.appendChild(h1);
    main.appendChild(ol);

    this.questions.forEach(question => {
      const li = this.createLi();
      const h3 = this.new('h3');
      h3.textContent = question.name;
      const ul = this.new('ul');
      question.answers.forEach(answer => {
        /* ---------------------------- */
        const htmlAnswer = this.createAnswer(answer);
        /* ---------------------------- */
        ul.appendChild(htmlAnswer);
      });
      li.appendChild(h3);
      li.appendChild(ul);
      ol.appendChild(li);
    });
    body.appendChild(main);
      main.appendChild(button);
      let button_click = button.onclick = (() => {
      	ol.children[1].children[0].textContent = 'New text';
      	console.log(ol.children[0].children[1].children[2].children[0].checked = true);
      	const someUl = ol.querySelectorAll('ul');
      	const someElem = [...someUl].querySelectorAll('input');
      	for(let i = 0; i < someElem.length; i++){
      		if(i == 1){
      			someElem[i].checked = true;
      		}
      	}
      	console.log(ol.querySelectorAll('ul'));
      	// .forEach((elem, index) => {
      	// 	console.log(elem.index == 1);
      	// });
      });
  },
  new(tag) {
    return document.createElement(tag);
  }
};

app.render();