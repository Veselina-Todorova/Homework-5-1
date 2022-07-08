function generateNinethNumber(){
    let maxOdd = globalData.getMaxNumberOddPosition();
    let maxEven = globalData.getMaxNumberEvenPosition();

    if(maxOdd>maxEven){
        return (maxOdd + 1 == 9) ? 0 : maxOdd + 1;
    }

    if (maxEven > maxOdd){
        return (maxOdd - 1 == 0) ? 1 : maxOdd - 1;
    }
    return 0;


}