/**
 * Created by user on 24.07.2017.
 */
`use strict`;
// alert('Hello');
console.log('Hello');
/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

// const regExpFunc = (val) => {
//     // val = '[^\s]{1}';
//     // console.log('val', val);
//     let change = '$2'.toLowerCase();
//     // console.log(val.replace(/(\w*)-(\w)(\w*)/g, `$1$2.toUpperCase()$3`));
//     console.log('fdasfa'.toLowerCase());
//     console.log('task 0', val.replace(/(\w*)(:)(\w)(\w*)/g, '$1' + '$2'.toLowerCase() + '$3'));
//     console.log('task 0', val.replace(/-/g, '' + '/s'.toLowerCase()));
//     // console.log(/\s\w*/.test(val));
//     // console.log(val.replace(/'-'/g, ' '));
// };

// regExpFunc('ActiveModel::Errors');
// regExpFunc('HelloHowAreYou');
// regExpFunc('MyNAMEIsBOND-JamesBond');
// regExpFunc('MAINCompany::BEST-MAINUser');


const hyphenFormat = (propertyName) => {
    // const regExpFunc = (string, a1, a2, a3, s, r, b, w, q, t) => {
    const regExpFunc = (part1, part2) => {
console.log('part1:', part1);
console.log('part2:', part2);
        let result = `_${part1.toLowerCase()}`;
        return result;
    };
    return propertyName.replace(/([A-Z/g])([a-z/g])/, regExpFunc);
}
console.log('task 0:', hyphenFormat('ActiveModel::Errors'));
// console.log('task 0:', hyphenFormat('HelloHowAreYou'));
// console.log('task 0:', hyphenFormat('MyNAMEIsBOND-JamesBond'));
// console.log('task 0:', hyphenFormat('MAINCompany::BEST-MAINUser'));


// const hyphenFormat1 = propertyName1 => {
//     const regExpFunc1 = string => {
//         return 'string ' + string.toLowerCase();
//     };
//     return propertyName1.replace(/[A-Z]/, regExpFunc1);
// };
// console.log('task 01', hyphenFormat1('ActiveModel'));

// function styleHyphenFormat(propertyName) {
//   function upperToHyphenLower(match) {
//     return 'match ' + match.toLowerCase();
//   }
//   return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
// }
// console.log(styleHyphenFormat('ActiveModel'));