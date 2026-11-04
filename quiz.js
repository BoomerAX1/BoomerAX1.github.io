// creating a mutable score value (test)
//let score = 0;

//https://www.sitepoint.com/community/t/best-way-to-get-all-selected-radio-button-values-on-form-submission/305430/3
//https://www.wufoo.com/html5/radio-type/
//https://www.scaler.com/topics/compare-two-strings-in-javascript/ (toUpperCase/toLowerCase)
//references

//const c = document.getElementById("correct");
//c.addEventListener("change", function () {
  //  score += 1;
//
  //  document.getElementById("demo").innerHTML =
    //   "Total score: " + checkedRadios;
//});
//personal testing and reference

//const checkedRadios = document.querySelectorAll('input[type="radio"] [id="correct"]:checked').length;

const s = document.getElementById("submit");
let score = 0;
const t = document.getElementById("timer")
let time = 600;
t.addEventListener("click", function(){
  const timer = setInterval(function(){

    time -=1
    document.getElementById("ttext").innerHTML = "time: " + time
    if (time <= 0){
      document.getElementById("ttext").innerHTML = "time: finished"
    }

}
, 1000)
});

//queryselector # uses the name of a ID, . uses name of a class

s.addEventListener("click", function() {
    let checkedRadios = document.querySelectorAll('input[type="radio"].correct:checked');
    let checkedtext = 0;
    let q3 = document.getElementById("q3").value;
    let uncheckedRadios = document.querySelectorAll('input[type="radio"].correct:not(:checked)');
    let q4 = document.querySelectorAll('input[name="q4"].correct:checked');
    let checkedcheck = 0;

    uncheckedRadios.forEach((radio) => {
      document.getElementById(radio.name).innerHTML = "wrong"
    });
    checkedRadios.forEach((radio) => {
      document.getElementById(radio.name).innerHTML = "correct"
    });

    if (q3.toLowerCase() === "test") {
        checkedtext += 1
    };

    if (q4.length == 2){
      checkedcheck += 1
    }
    else if (q4.length == 1){
      checkedcheck += 0.5
    }
    else {
      checkedcheck = 0.1
    };

    document.getElementById("demo").innerHTML = "Radios" + checkedRadios.length + "Text" + checkedtext + "Check" + checkedcheck;

  });

//q3 else statement should hodl wrong/right logic
//(maybe use classes pt.2?) The "G:,  1:, etc. text should be nested with checked/unchecked radio logic and make it turn green/red based off answer"
