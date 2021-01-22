// First problem Solving....
function kilometerToMeter (kilometer){
     var distance = kilometer/ 1000;
     return distance;
}
var overallDistance = kilometerToMeter(20000);






// Second problem Solving....

function budgetCalculator(phone, laptop, watch){
     var quantity = phone * 7;
     var quantity = laptop * 3;
     var quantity = watch * 4;
     totalElectronic = phone + laptop + watch;
     return totalElectronic;

}




var totalPrices = budgetCalculator(100, 500, 50);








// Third problem Solving....



function hotelCost(days){
     var price = 0;
     if(days <= 10) {
          price = days * 100;
     } else if(days <= 20) {
           var firstWeek = 10 * 100;
           var remainingDays = days - 10;
           var secondWeek = remainingDays * 80;
           price = firstWeek + secondWeek;
     
      } else{
          var firstWeek = 10 * 100;
          var secondWeek = 10 * 80;
          var remainingDays = days - 20;
          var lastWeek = remainingDays * 50;
          price = firstWeek + secondWeek + lastWeek;
          
     }
     
     return price;
     
     }
     
      var totalCost = hotelCost(21);
      
     
      
     
 




// Fourth problem Solving....



    
     


function megaFriend(friendsName) {
     var biggerName = friendsName[0];
     for(var i = 0; i < friendsName.length; i++){
          var friend = friendsName[i];
          if(friend > biggerName){
               biggerName = friend;
          }
     }
     return biggerName;
     }
     
     var largeName = megaFriend (["Anwar", "Kamal Khan", "Masum Mullah", "Azmol Islam"]);
     
    
     
     
     
