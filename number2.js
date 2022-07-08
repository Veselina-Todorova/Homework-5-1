function generateSecondNumber(){
    let sex = prompt("Моля, въведете вашият пол!");
    let manSex   = sex == "мъж";
    let womanSex = sex == "жена";
 
        if (manSex)   return 1;
        if (womanSex) return 3;

while(true){

    let randNumber = randomNumber(1, 9);
    let thirdType = (randNumber !=1 && randNumber!=3);

        if(thirdType) return randNumber;

}

}