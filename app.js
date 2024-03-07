var chemmarks = document.querySelector('#chem-marks');
var phymarks = document.querySelector('#phy-marks');
var mathmarks = document.querySelector('#math-marks');
var commarks = document.querySelector('#com-marks');
var TotalMarks = document.querySelector('#total-marks');
var Percentage = document.querySelector('#percentage');
var Grade = document.querySelector('#grade');

function calculatePercentage(){
    console.log(chemmarks.value);
    console.log(phymarks.value);
    console.log(mathmarks.value);
    console.log(commarks.value);

}


var TotalMarks = 400;
var obtainedMarks = +chemmarks + +phymarks + +mathmarks + +commarks;

console.log('obtainedMarks ===>', obtainedMarks);

StudentTotal.innerHTML = obtainedMarks;

var StudentPercentage = obtainedMarks, TotalMarks*100;

Percentage.innerHTML = StudentPercentage;

if (StudentPercentage > 80){
    Grade.innerHTML = 'A+'
}
else if (StudentPercentage > 70){
    Grade.innerHTML = 'A'
}
else if (StudentPercentage > 60){
    Grade.innerHTML = 'B'
}
else if (StudentPercentage > 50){
    Grade.innerHTML = 'C'
}
else if (StudentPercentage < 50){
    Grade.innerHTML = 'F'
}