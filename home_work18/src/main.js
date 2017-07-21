`use strict`;
/*
 Алгоритмы !
 TASK 0
 Вам дано предложение, верните массив из слов,
 которые длинее чем средняя длина всех слов.
 Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
 solution(["This is a sample string"]) expected ["This" "sample" "string"]
 solution(["Some another sample"]) expected ["another" "sample"]
 solution(["Do, do, do, do... do it!"]) expected []
 */
const solution = (arr) => {
    let count = arr[0].replace(/[,.!]/g, '').split(' ').join('').length,
        stringLength = arr[0].replace(/[,.!]/g, '').split(' ').length,
        arrNew = [];
    arr[0].replace(/[,.!]/g, '').split(' ').forEach(elem => {
        if(elem.length > count/stringLength){
            arrNew.push(elem);
        }
    });
    console.log('TASK 0:', arrNew);
};

solution(["This is a sample string"]); //expected ["This" "sample" "string"]
solution(["Some another sample"]); //expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]); // expected []


/* TASK 1
 Сделайте таблицу 5x5
 При клике на элемент, изменяйте цвет у элемента на красный.
 Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
 Пример 3х3:
 []|[]|[]
 []|[]|[]
 []|[]|[]
 кликаем сюда -> []|[]|[]
 []|[]|[]
 []|[]|[x] <- загорается тут
 []|[]|[]
 кликаем сюда -> []|[]|[x] <- загорается тут
 []|[]|[x]
 */

let tableClick = () =>{
    // let tbody = document.body.querySelector('tbody');
    // tbody.addEventListener('click', (event) => {
    //     if(event.target.tagName == 'TD'){
    //         event.target.style.background = 'red';
    //         let td = document.body.querySelectorAll('td');
    //         console.log('td', td)
    //     }
    //     console.log(event)
    // });
    let td = document.body.querySelectorAll('td');
    let tdLength = td.length;
    td.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            let tdClick = tdLength - index - 1;
            td[tdClick].style.background = 'red';
        });
    });

};
tableClick();
// @SUPER-FrontEnd
/*
 У вас есть 3 блока смотри events.html
 при mousedown и движении мышки нужно сделать
 ресайз одного блока.
 Подсказка - событие необходимо повесить на доп. элемент .resize
 */

class Events{
    constructor(){
        let sectionDiv = [... document.body.querySelector('section').children];
        sectionDiv.forEach(elem => {
            // let state = true;
            elem.onmousedown =(event) => {
                if(event.target.className == 'resize'){
                    let right = elem.offsetWidth,
                        blockWidth = 1,
                        move = event.screenX;
                    console.log('blockWidth', blockWidth);
                    // event.target.onmouseup  =(event) => {
                    //     state = false;
                    //
                    //     console.log('state', state);
                    //     console.log('move', move);
                    // };
                    event.target.onmousemove =(event) => {
                        let position = event.screenX;
                        console.log('position', position);
                        console.log('move', move);
                        if(position > move){
                            right += blockWidth;
                            console.log('right', right);
                            this.right(right, blockWidth, elem);
                            move += 1;

                        }else if(position < move){
                            right -= blockWidth;
                            console.log('left', right);
                            this.left(right, blockWidth, elem);
                            move -= 1;
                        }
                        // return state
                    };
                }
                // return state;
            };
        });
    }
    right(right, blockWidth, elem){
        let leftMoove = blockWidth + right;
        elem.style.flex = 'none';
        elem.style.flexBasis = `${right}px`;
        elem.style.background = 'red';
    }
    left(right, blockWidth, elem){
        let leftMoove = blockWidth + right;
        elem.style.flex = 'none';
        elem.style.flexBasis = `${right}px`;
        elem.style.background = 'red';
    }
}
let events = new Events();