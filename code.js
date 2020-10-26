function lateFeeCalc()
{
    var numBooks = parseInt(prompt("How many books are you returning late?"));

    var numDVDs = parseInt(prompt("How many DVDs are you returning late?"));

    var numDays = parseInt(prompt("How many days late are these items?"));

    var feeBook = numDays * (numBooks * .25);

    var feeDVD = numDays * (numDVDs * .50);

    var totalLateFees = feeBook + feeDVD;

    alert(`Your total late fees are $${totalLateFees.toFixed(2)}.`);
}

function pizzaSplitCalc()
{
    var numPizzas = parseInt(prompt("How many Pizzas are you ordering?"));

    var numToppings = parseInt(prompt("Whats the total amount of toppings your getting?"));

    var numWorkers = parseInt(prompt("How many coworkers are you splitting the total with?"));

    var toppingTotal = numToppings * 1.25;

    var pizzaTotal = numPizzas * 15;

    var OrderTotal = toppingTotal + pizzaTotal;

    var coworkerTotal = OrderTotal / numWorkers;

    alert(`The total is $${coworkerTotal.toFixed(2)} per person.`);
}