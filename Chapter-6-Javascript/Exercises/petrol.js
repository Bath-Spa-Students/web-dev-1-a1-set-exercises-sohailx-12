document.addEventListener('DOMContentLoaded', function() {
    const costPerLiterInput = document.getElementById('costperliter');
    const litersPurchasedInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('button');
    const totalamountOutput = document.getElementById('totalamount');
calculateBtn.addEventListener('click', function() {
        const costPerLiter = parseFloat(costPerLiterInput.value);
        const litersPurchased = parseFloat(litersPurchasedInput.value);
        const totalAmount = costPerLiter * litersPurchased;
        totalamountOutput.textContent = `Total amount: AED ${totalAmount.toFixed(2)}`;
    });
});