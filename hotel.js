
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