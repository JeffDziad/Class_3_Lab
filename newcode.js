$(document).ready(function()
{
    $('#bookButton').click(lateFeeCalc);
    $('#pizzaButton').click(pizzaSplitCalc);

    function lateFeeCalc()
    {
        let numBooks = parseFloat($("#bookCount").val());
        let numDVDs = parseFloat($("#DVDCount").val());
        let numDays = parseFloat($("#dayCount").val());

        let feeBook = numDays * (numBooks * .25);
        let feeDVD =  numDays * (numDVDs * .50);
        let totalLateFees = feeBook + feeDVD;

        //Finished Output
        $("#feeOutput").text(`Your late fees are $${totalLateFees.toFixed(2)}.`);
        $(".output").show();
    }

    function pizzaSplitCalc()
    {
        let numPizzas = parseFloat($("#pizzaCount").val());
        let numToppings = parseFloat($("#topCount").val());
        let numWorkers = parseFloat($("#workCount").val());

        let toppingTotal = numToppings * 1.25;
        let pizzaTotal = numPizzas * 15;
        let orderTotal = toppingTotal + pizzaTotal;
        let coworkerTotal = orderTotal / numWorkers;

        //Finished Output
        $("#splitOutput").text(`Each worker pays $${coworkerTotal.toFixed(2)}.`);
        $(".output").show();
    }
});