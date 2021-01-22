// https://github.com/pinky50/basic-javascript-assignment3

// kilometer to meter convertor function

function kilometerToMeter(kilometerAsInput){

    if(kilometerAsInput > 0){
        var output = kilometerAsInput * 1000;
        return output;
    }

    else if(kilometerAsInput < 0){
        return("Distance can not negative.");
    }
    
}

var result = kilometerToMeter(-2);
console.log(result);

// budget calculator function

function budgetCalculator(watchNumber, phoneNumber, laptopNumber){

    var perWatchPrice = 50;
    var perPhonePrice = 100; 
    var perLaptopPrice = 500;

    if(watchNumber < 0 || phoneNumber < 0 || laptopNumber< 0 ){
        return"Number can not be negative "
    }
    var totalWatchPrice = watchNumber * perWatchPrice;
    var totalPhonePrice = phoneNumber * perPhonePrice;
    var totalLaptopPrice = laptopNumber * perLaptopPrice;
    var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    return totalPrice;

}

var total = budgetCalculator(7,0,8);
console.log(total);

// hotel cost function


function hotelCost(stayDays){

    var totalHotelCost = 0;
    
    // for negative input
    if (stayDays < 0) {
            return('Days can not be negative');
    }

    else if (stayDays <= 10) { 
        totalHotelCost = stayDays * 100;
    } 

    else if (stayDays <= 20) { 
        var first10DaysCost = 10 * 100;
        var remainingDays = stayDays - 10;
        var second11To20daysCost = remainingDays * 80;
        totalHotelCost = first10DaysCost + second11To20daysCost;
    } 
     
    else if (stayDays > 20) { 
        var first10DaysCost = 10 * 100;  
        var second11To20daysCost = 10 * 80;
        var remainingDays = stayDays - 20;
        var moreThan20DaysCost = remainingDays * 50;
        totalHotelCost = first10DaysCost + second11To20daysCost + moreThan20DaysCost;
    }

    // for string input
    else if (isNaN(stayDays) ) {
        return('stayDays is not a number');
    }
    
    return totalHotelCost;
}

var result = hotelCost(18);
console.log(result);

// largest element in a array

function megaFriend(friendName){
  
    var initialValue = 0;
    
    for (var i = 0; i < friendName.length; i++) {
        var friendNameLength = friendName[i].length;
      if ( friendNameLength > initialValue) {
        var initialValue = friendName[i].length;
        var longestName = friendName[i];
      } 
      else if(friendName.length <= 0){
        return"There is no element";
      }
    }
    return longestName;
  }
  
  var arr = megaFriend([]);
    
  console.log(arr);
