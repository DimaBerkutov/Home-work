/* TASK 0
 Сделайте валидацию кредитной карты, валидация происходит
 используя алгоритм Луна.
  Простое описание:
   1. Начиная с последнего правого числа, двигаясь влево,
   умножайте каждое второе число на 2, 
   если результат умножения больше 9
   (например 8 х 2 = 16),
   тогда сумируйте получившиеся число 
   (например 16: 1+6 = 7, 18: 1+8 = 9).
   2. Получите сумму всех чисел.
   3. Если сумма всех чисел кратно 10, тогда число является подходящим, 
      иначе нет.
P.S. -> проверьте на свой карте.
arguments ["4408041234567893"] => expected true
arguments ["1234567890123456"] => expected false
arguments ["4408042234567893"] => expected false
arguments ["38520000023237"] => expected true
arguments ["4222222222222"] => expected true
*/

let arguments = (val) => {
    let answer = 0,
        arrReverse = val[0].split('').reverse('');
    let newArr = arrReverse.map((elem, index) => {
        if(index !== 0 && index % 2 !== 0){
            if(elem * 2 > 9){
                let newElems = String (elem * 2).split(''),
                    summ = +newElems[0] + +newElems[1];
                answer += summ;
            }
        }
    });
    if(answer % 10 == 0) console.log('expected true');
    else console.log('expected false');
};
arguments(["4408041234567893"]);
arguments(["1234567890123456"]);
arguments(["4408042234567893"]);
arguments(["38520000023237"]);
arguments(["4222222222222"]);