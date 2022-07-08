function generateSeventhNumber(n1, n2, n3, n4, n5, n6){

        let ruleCompare = (n1 < n2 < n3 < n4 < n5 < n6);
        let ruleEqual = (n1 == n2 == n3 == n4 == n5 == n6);
        let fourthRule = (isEven(n1) && isEven (n2)) || (isOdd(n3) && isOdd(n4) && isOdd(n5));
        let thirdRule = (isEven(n1) || isEven(n3) || isEven(n5));
        let secondRule = (isOdd(n1) && isOdd(n3) && isOdd(n5));
        let firstRule = (isEven(n1) && isEven(n3) && isEven(n5));
    
    if (generateSixthNumber > 10){
        return 7;
    }
    else if (generateSixthNumber<10){
        return 6;
    }
    else if (ruleCompare){
        return 5;
    }
    else if (ruleEqual){
        return 4;
    }
    else if (fourthRule){
        return 3;
    }
    else if (thirdRule){
        return 2;
    } 
    else if (secondRule){
        return 1;
    }
    else if (firstRule){
        return 0;
    }
    else {
        return 9;
    }
    







}