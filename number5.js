function generateFifthNumber(){
    let choice  = +prompt("Посочете една от посочените група стоки? 1 - Плодове и зеленчуци, 2 - Месо и месни продукти, 3 - Цигари и алкохол, 4 - Млечни продукти, 5 - Захарни изделия");
    let howTime = +prompt("Колко често купувате продуктите, които избрахте? 1 - рядко, 2 - понякога, 3 - често");

        userData.foodCategody      = choice;
        userData.frequencyCategory = howTime;

        return choice + howTime;






}

