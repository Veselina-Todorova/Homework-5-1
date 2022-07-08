function randomNumber(from, to){
    return Math.floor(Math.random() * (to-from)+ from)
}

function isEven(number){
    return number % 2 == 0;
}

function isOdd(number){
    return !isEven(number);
}

function isNumberTwoDigits(number){
    return number >= 10 && number <= 99;
}

function isNumberSingle(number){
    return number >=0 && number <=9;
}