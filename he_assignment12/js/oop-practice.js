// STEP 1
function Cat() {

}
const Dog = function() {

}
// STEP 2
const cat1 = new Cat();
const dog1 = new Dog();
// STEP 3
function Animal() {
    this.display = function () {
        console.log('The Animal has been created.');
    }
}
const cat2 = new Animal();
cat2.display();
// STEP 4
class Animal {
    constructor() {
        console.log('The Animal has been created.');
    }
}
const dog2 = new Animal();
//STEP 5
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
const cat3 = new Animal('Cat', 'Bengal', 'Grey', 1, 2);
// STEP 6
let proArr = [];
for (let pro in cat3) {
    proArr.push(pro);
}
console.log(proArr);
// STEP 7
Animal.prototype.speak = function(type) {
    if (type === 'Dog') {
        console.log(`The ${this._color} dog is barking.`);
    } if (type === 'Cat') {
        console.log(`The ${this._color} cat is meowing.`);
    }
}
cat3.speak('Cat');
// STEP 8
function Animal(type, breed, color, height, length) {
    let _type = type;
    let _breed = breed;
    let _color = color;
    let _height = height;
    let _length = length;
    let checkType = function() {
        if (_type === 'Dog') {
            return 'dog';
        } else {
            return 'cat';
        }
    }
    this.speak = function() {
       return checkType();
    }
}
const dog3 = new Animal('Dog', 'Aussie', 'Blue', 2, 3);
console.log(`The ${dog3.speak()} has made a noise!`);
// STEP 9
String.prototype.findWords = function(item) {
    let stringText = this.toLowerCase();
    let stringTextArr = stringText.split(' ');
    let count = 0;
    for (let i = 0; i < stringTextArr.length; i++) { 
        if (stringTextArr[i] === item) {
            count++;
        } 
    }
    return (`${item} has been found ${count} times.`);
};
const stringText1 = new String('Today is a good day. He is going to the beach.')
alert(stringText1.findWords('is'));