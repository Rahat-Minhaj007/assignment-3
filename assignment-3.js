//https://github.com/Rahat-Minhaj007/assignment-3





//(kilometerTOMeter) assignment start :

function kilometerTOMeter(kilo) {
    if (kilo < 0) {                     //checking the value is positive or .not            
        return " Don't put any negative value";

    }
    else {
        var meter = kilo * 1000;  //converting into meter.
        return meter;
    }

}
var result = kilometerTOMeter(8);
console.log(result);

//(kilometerTOMeter) assignment finished.





// (budgetCalculator) assignment  start :

function budgetCalculator(clock, phone, laptop) {
    if (clock < 0 || phone < 0 || laptop < 0) {        //checking the value is positive or not .
        return " Don't put any negative value";
    }
    else {
        var clockPrice = clock * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var total = (clockPrice) + (phonePrice) + (laptopPrice);  //sum the total ammount of price.
        return total;
    }
}
var totalSum = budgetCalculator(4, 3, 2);
console.log(totalSum);

// (budgetCalculator) assignment  finished.





//(hotelCost) assignment start :

function hotelCost(day) {
    if (day < 0) {                               //checking the value is positive or not .
        return " Don't put any negative value";
    }
    else {
        if (day <= 10) {
            var totalCost = day * 100;
            return totalCost;
        }
        else if (day > 10 && day <= 20) {
            var tenDaysCost = 10 * 100;    //first 10 days cost
            var moreDays = day - 10;       //after first 10 days,extra how much time stay in hotel .
            var moreDaysCost = moreDays * 80; //after 10 days cost
            var totalCost = (tenDaysCost) + (moreDaysCost); //total hotel cost
            return totalCost;
        }
        else {
            var tenDaysCost = 10 * 100;  //first 10 days cost
            var secndTenDaysCost = 10 * 80;  //second 10 days cost
            var moreDays = day - 20;          //after 20 days ,extra how much time stay in hotel .
            var moreDaysCost = moreDays * 50;  //after 20 days cost
            var totalCost = (tenDaysCost) + (secndTenDaysCost) + (moreDaysCost); //total hotel cost
            return totalCost;
        }
    }
}
var result = hotelCost(22);
console.log(result);

//(hotelCost) assignment finished.





// (megaFriend) assignment start :

function megaFriend(elementName) {
    if (elementName.length == 0) {         //checking the array is empty or not
        return "Don't put any empty array"
    }
    else {
        var max = elementName[0].length;
        var large;
        for (var i = 0; i < elementName.length; i++) {
            element = elementName[i].length; //get every index element length
            if (element > max) {            //checking element length is getter than or not from the initial value
                max = element;
                large = elementName[i]; //final result assign on large
            }
        }
        return large;
    }


}

var elementName = ["rahat", "minhajulAbedin", "abedin", "rahatMinhaj", "i love the examiner who checking my assignment"];
var largeFriend = megaFriend(elementName);  //get the return value from the function
console.log(largeFriend);

// (megaFriend) assignment finished.