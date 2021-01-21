// https://github.com/pinky50/basic-javascript-assignment3


function kilometerToMeter(input){

//    if(input == -input){
//         console.log("Distance can not be negative.");
//    }
   var element = input*1000;
   return element;

}

var result = kilometerToMeter(5);
console.log(result);

// budget calculator

function budgetCalculator(watchNumber, phoneNumber, laptopNumber){

    var perWatchPrice = 50;
    var perPhonePrice = 100; 
    var perLaptopPrice = 500;
    var totalWatchPrice = watchNumber * perWatchPrice;
    var totalPhonePrice = phoneNumber * perPhonePrice;
    var totalLaptopPrice = laptopNumber * perLaptopPrice;
    var totalValue = totalWatchPrice + totalPhonePrice + totalLaptopPrice
    return totalValue;

}

var total = budgetCalculator(2,2,6);
console.log(total);

// hotel cost

function hotelCost(day){
    var first10DaysPrice = 100;
    var tenToTwentyDaysPrice = 80;
    var otherdaysPrice = 50;
    if(day<10){
       var totalTk = day * first10DaysPrice;
        return totalTk;
    }
    else if(day<10 && day>20){

    var discountTk = day * tenToTwentyDaysPrice;
    return discountTk;
    }
    else{
        var overDiscountTk = day * tenToTwentyDaysPrice;
        return overDiscountTk;
    }

    var totalTk1 = totalTk + discountTk + overDiscountTk;
    return totalTk1;

}

var result1 = hotelCost(25);
console.log(result1);
