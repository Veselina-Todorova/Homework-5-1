function generateEighthNumber(){
    let isOdd  = userData.isAdult && userData.isBodyOverweight && userData.doesUserConsumeSugar && userData.isConsumeOften;
    let isEven = userData.isUserUnderaged && userData.isBodyAttletic && userData.doesUserConsumeFrootsAndVeg && userData.isConsumeSometimes;
    
    if(isOdd){

     
        let number = randomNumber(0, 9);
        if(isOdd(number))
        return number;
    
}

    if(isEven){
        
            let number = randomNumber(0, 9);
            if(isEven(number))
            return number;
    
    
    }
    return 0;
}