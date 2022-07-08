function generateFourthNumber(){
    let personHight = +prompt("Въведете вашата височина в см.");
    let personWeight = +prompt("Въведете вашето тегло в кг.");
        
    let sumHight = personHight / 100;
    let massIndex = personWeight / (sumHight * sumHight);

        if (massIndex <=16 ){
            return 1;
        }
        if ( massIndex <=16.99 && massIndex >16){
            return 2
        }
        if ( massIndex >17 && massIndex <=18.49){
            return 3
        }
        if ( massIndex >18.5 && massIndex <=24.99){
            return 4
        }
        if ( massIndex >25 && massIndex <=29.99){
            return 5
        }
        if ( massIndex >30 && massIndex <=34.99){
            return 6
        }
        if ( massIndex >35 && massIndex <=39.99){
            return 7
        }
        if ( massIndex >40){
            return 8
        }


}