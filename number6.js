function generateSixthNumber(n1, n2, n3, n4, n5){

    let sum = n1 + n2 + n3 + n4 + n5;

    if(isNumberTwoDigits(sum)){
        let firstNum = Math.floor(sum/10);
        let secondNum = sum % 10;

        return firstNum + secondNum;
    }
    return sum;
}