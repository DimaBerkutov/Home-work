/**
 * Created by Dima on 20.06.2017.
 */

function Phonebook() {
    this.numberMethod = function (val) {
        for(let i = 0; i < val.length; i++){
            if(isNaN(+val[i])){
                console.log('Error, please enter correct phone number');
                return
            }
            this.formatMethod(val);
        }
    };
    this.formatMethod = function (val) {
        let newNumber = `${val.slice(0, 3)} ${val.slice(3, 5)}-${val.slice(5, 7)}-${val.slice(7, 11)}`;
        console.log(newNumber);
        return newNumber;
    };
}

let phonebook = new Phonebook;
phonebook.numberMethod("0993378130");