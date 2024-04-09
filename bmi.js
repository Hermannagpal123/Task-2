const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const bmi_value = document.querySelector('#bmi-value');
const bmi_status = document.querySelector('#bmi-status');
const calculate = document.querySelector('#calculate-bmi');
var dietPlanLink = document.getElementById('dietPlanLink');

calculate.addEventListener('click', () => {
   if( height.value === "" || weight.value === "" ) {
        alert('Please enter your height and weight');
