function generateThirdNumber(){
    let isAdoult = prompt("Пълнолетен ли си?");
    let Adult = isAdoult == "да";
    if (Adult){
        return 0;
    }
    
   // let adult = age >= 18;
    let motherBirth = +prompt("Въведете годината на раждане на майка Ви.");
    let fatherBirth = +prompt("Въведете годината на раждане на баща Ви.");

  //  if (adult) return 0;

    let lastNumberMother = (motherBirth % 10);
    let lastNumberFather = (fatherBirth % 10);
    let resultLastNumber = lastNumberMother == lastNumberFather;
    let thirdNumberMother = Math.floor((motherBirth % 100) / 10);
    if (resultLastNumber){
        return thirdNumberMother;
    }
    else if (!resultLastNumber){
        return lastNumberFather;
    }
  

}