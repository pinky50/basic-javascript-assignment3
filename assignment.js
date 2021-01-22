// https://github.com/pinky50/basic-javascript-assignment3

// kilometer to meter convertor function

function kilometerToMeter(kilometerAsInput) {

    if (kilometerAsInput > 0) {
        var output = kilometerAsInput * 1000;
        return output;
    }

    else if (kilometerAsInput < 0) { //if parameter value is negative
        return ("Distance can not be negative."); 
    }

    else if (isNaN(kilometerAsInput)) { //if parameter value is not a number like string
        return ("kilometerAsInput is not a number"); 
    }

}

// budget calculator function

function budgetCalculator(watchNumber, phoneNumber, laptopNumber) {

    var perWatchPrice = 50; //per watch price
    var perPhonePrice = 100; //per phone price
    var perLaptopPrice = 500; //per laptop price

    var totalWatchPrice = watchNumber * perWatchPrice;
    var totalPhonePrice = phoneNumber * perPhonePrice;
    var totalLaptopPrice = laptopNumber * perLaptopPrice;
    var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        
    return totalPrice;

}

// hotel cost function

function hotelCost(stayDays) {

    var totalHotelCost = 0;

    if (stayDays < 0) { //if parameter is a negative value
        return ('Days can not be negative');
    }

    else if (stayDays <= 10) { //if parameter is  1 to 10 days
        totalHotelCost = stayDays * 100;
    }

    else if (stayDays <= 20) { //if parameter is  11 to 20 days
        var first10DaysCost = 10 * 100;
        var remainingDays = stayDays - 10;
        var second11To20daysCost = remainingDays * 80;
        totalHotelCost = first10DaysCost + second11To20daysCost;
    }

    else if (stayDays > 20) { //if staydays are more than 20 days
        var first10DaysCost = 10 * 100;
        var second11To20daysCost = 10 * 80;
        var remainingDays = stayDays - 20;
        var moreThan20DaysCost = remainingDays * 50;
        totalHotelCost = first10DaysCost + second11To20daysCost + moreThan20DaysCost;
    }

    else if (isNaN(stayDays)) { //if parameter is not a number like string
        return ('stayDays is not a number');
    }

    return totalHotelCost;
}

// largest element in a array

function megaFriend(friendsName) {

    var initialValue = 0;

    for (var i = 0; i < friendsName.length; i++) {

        var friendNameLength = friendsName[i].length;

        if (friendNameLength > initialValue) {
            var initialValue = friendNameLength;
            var longestName = friendsName[i];
        }

        else if (friendsName == null) { //if parameter is empty
            return "There is no elements";
        }
    }

    return longestName;
}

