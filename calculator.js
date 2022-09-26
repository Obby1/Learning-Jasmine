


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector(`#loan-amount`);
  const loanYears = document.querySelector(`#loan-years`);
  const loanRate = document.querySelector(`#loan-rate`);
  loanAmount.value = 10000;
  loanYears.value = 10;
  loanRate.value = 10;

}

// Get the current values from the UI
// Update the monthly payment
function update() {
const currentValues = getCurrentUIValues();
updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);


}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}


// old code:
// let loanMonths = loanYears*12;
//   const interest = (loanAmount *(loanRate))/ (loanMonths);
//   console.log(interest);
//   const monthlyPaymentValue = ((loanAmount/(loanMonths))+interest).toFixed(2);
//   return monthlyPaymentValue;


// function calculateMonthlyPayment(loanAmount, loanYears, loanRate) {
//   loanAmount = Math.round(document.querySelector(`#loan-amount`).value*100)/100;
//   loanYears = document.querySelector(`#loan-years`).value;
//   loanRate = parseFloat(document.querySelector(`#loan-rate`).value);
//   numerator = Math.round((loanAmount*loanRate)*100)/100;
//   console.log(numerator);
//   denominator = 1-(1+loanRate)**(-(loanYears*12));
//   console.log(denominator);
//   let monthlyPaymentValue = numerator/denominator
//   console.log(monthlyPaymentValue);
//   return monthlyPaymentValue


// }
