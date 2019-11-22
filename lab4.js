
debugger;
let user = {
    name: "Ahmed",
    DOB: "1995-12-25",
    caloriTarget: 2000,
    meals: [
        {
            title: "breakfast",
            date: "2019-12-20",
            description: "first meal",
            calories: 450,
        },
        {
            title: "Lunch",
            date: "2019-12-20",
            description: "middle meal",
            calories: 500,
        },
        {
            title: "breakfast",
            date: "2019-12-20",
            description: "last meal",
            calories: 500,
        }],
    caloriesEatenOn: function(date){
        let totalCal = 0;
        this.meals.forEach(function(meal){
            if( meal.date == date) {
                totalCal += meal.calories;
            }
        });
        return totalCal;

    },
    avgDailyCalories: function(){
        averAll = 0;
        this.meals.forEach(function(meal){
            averAll += meal.calories;
        });
        return averAll / this.meals.length;
    },
    onTrack: function(){   
      let averageofcal = this.avgDailyCalories(); 
        if(averageofcal <= this.caloriTarget ) {
            return true;
        } else {
            return false;
        }
    },
}

console.log(user.caloriesEatenOn("2019-12-20"));
console.log(user.onTrack());
console.log(user.avgDailyCalories());

