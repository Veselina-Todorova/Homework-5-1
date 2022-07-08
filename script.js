let firstNumber = generateFirstNumber();
globalData.acomulateCardNumberBarCode(firstNumber);
    console.log(`Първата цифра е: ${firstNumber}`);

let secondNumber = generateSecondNumber();
globalData.acomulateCardNumberBarCode(secondNumber);
    console.log(`Втората цифра е ${secondNumber}`);

let thirdNumber = generateThirdNumber();
globalData.acomulateCardNumberBarCode(thirdNumber);
    console.log(`Третата цифра е ${thirdNumber}`);

let fourthNumber = generateFourthNumber();
globalData.acomulateCardNumberBarCode(fourthNumber);
    console.log(`Четвъртата цифра е ${fourthNumber}`);

let fifthNumber = generateFifthNumber();
globalData.acomulateCardNumberBarCode(fifthNumber);
    console.log(`Петата цифра е ${fifthNumber}`);

let sixtNumber = generateSixthNumber(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);
globalData.acomulateCardNumberBarCode(sixtNumber);    
    console.log(`Шестата цифра е ${sixtNumber}`);

let seventhNumber = generateSeventhNumber(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixtNumber);
globalData.acomulateCardNumberBarCode(seventhNumber);   
    console.log(`Седмата цифра е ${seventhNumber}`);

let eightNumber = generateEighthNumber();
globalData.acomulateCardNumberBarCode(eightNumber);
    console.log(`Осмата цифра е ${eightNumber}`);

let ninethNumber = generateNinethNumber();
globalData.acomulateCardNumberBarCode(ninethNumber);
    console.log(`Деветата цифра е ${ninethNumber}`);

    console.log(`Вашият баркод е: ${globalData.getCardBarCode()}`);