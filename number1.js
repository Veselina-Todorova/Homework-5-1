function generateFirstNumber() {

        const birthYear = +(prompt("Въведете година на раждане?"));
        let isOddCardNumber = birthYear < 1965;
        let isEvenCardNumber  = birthYear > 1965;
        let isSpecialCard    = birthYear == 1965;
    
    let processedNumber = customerAge(birthYear);
    let cardOne = isNumberTwoDigits(processedNumber)
                  ? Math.floor(processedNumber / 10)
                  : processedNumber;
  
    
     
    if(isOddCardNumber) {
         return Math.floor(isOdd(cardOne) ?cardOne : cardOne +1);
         

    }
    if(isEvenCardNumber){
         return Math.floor(isEven(cardOne) ?cardOne : cardOne+1);
    }

    if(isSpecialCard){ return 0;}
 
}

 function customerAge(birthYear){
     let currentYear = +(new Date().getFullYear());
     let age = currentYear - (+birthYear);
     userData.isAdult = age >=18;

     let randomNumberFirstNum = randomNumber(1, 7);
    
     return age / randomNumberFirstNum;
}