const globalData = {
    maxNumberOddPosition : -1,
    maxNumberEvenPosition : -1,
    barCode : "",

    processOddPositionNumber(number) {

        if(number > globalData.maxNumberOddPosition) {
            globalCardData.maxNumberOddPosition = number;
        }
    },

    processEvenPositionNumber(number) {

        if(number > globalData.maxNumberEvenPosition) {
            globalData.maxNumberEvenPosition = number;
        }
    },    

    getMaxNumberOddPosition() {
        return globalData.maxNumberOddPosition;
    },

    getMaxNumberEvenPosition() {
        return globalData.maxNumberEvenPosition;
    },

    cardNumberSymbol(number){
        if(number == 0) return "*";
        if(number == 1) return "!";
        if(number == 2) return "@";
        if(number == 3) return "#";
        if(number == 4) return "$";
        if(number == 5) return "%";
        if(number == 6) return "^";
        if(number == 7) return "&";
        if(number == 8) return "/";
        if(number == 9) return "+";   
    },

    acomulateCardNumberBarCode(number) {
        globalData.barCode = globalData.barCode + globalData.cardNumberSymbol(number);
    },

    getCardBarCode() {
        return globalData.barCode;
    }
}

const userData={
 foodCategory      : -1,
 frequencyCategory : -1,
 massIndexCategory : -1,
 isAdult           : false,

 isUserAdoult() {
    return userData.isAdult == true;
},

isUserUnderaged() {
    return userData.isAdult == false;
},    


isBodyNormal    : function() {
    return userData.massIndexCategory == 2 ||
           userData.massIndexCategory == 3 ||
           userData.massIndexCategory == 4;
},

isBodyOverweight() {
    return  userData.massIndexCategory == 6 ||
            userData.massIndexCategory == 7 ||
            userData.massIndexCategory == 8;
},
isBodyAttletic() {
    return userData.massIndexCategory == 3;
},

doesUserConsumeFrootsAndVeg() {
    return userData.foodCategory == 1;   
},

doesUserConsumeMeat() {
    return userData.foodCategory == 2;   
},

doesUserConsumeAlcoholAndCigare() {
    return userData.foodCategory == 3;   
},    

doesUserConsumeMilk() {
    return userData.foodCategory == 4;   
},        

doesUserConsumeSugar() {
    return userData.foodCategory == 5;   
},            

isConsumeRearly() {
    return userData.frequencyCategory == 1;
},

isConsumeSometimes() {
    return userData.frequencyCategory == 2;
},

isConsumeOften() {
    return userData.frequencyCategory == 3;
}





}