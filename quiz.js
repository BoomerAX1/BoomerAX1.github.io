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
const begin = document.getElementById("beginbutton");
const t = document.getElementById("timer")
let time = 600;
let score = 0;
let min = 10;
let sec = 1;

begin.addEventListener("click", function(){
  
  document.getElementById("quizform").style.display = "block";
  document.getElementById("startform").style.display = "none";
  document.getElementById("quizhide").style.display = "none";
  const timer = setInterval(function(){

    sec -=1
    if (sec < 0 && min >= 1){
      sec = 59
      min -= 1
    }

    if (sec >= 0 && sec <= 9){
      document.getElementById("ttext").innerHTML = "time: " + min + ":0" + sec
    }
    else  {
      document.getElementById("ttext").innerHTML = "time: " + min + ":" + sec
    }
    
    if (sec <= 0 && min <= 0){
      document.getElementById("ttext").innerHTML = "time: finished"
    }

}
, 1000)
});

//queryselector # uses the name of a ID, . uses name of a class

s.addEventListener("click", function() {
    let checkedRadios = document.querySelectorAll('input[type="radio"].correct:checked');
    let checkedtext = 0;
    let allRadios = document.querySelectorAll('input[type="radio"]');
    let allChecks = document.querySelectorAll('input[type="checkbox"]');
    let allText = document.querySelectorAll('input[type="text"]');
    let q3 = document.getElementById("q3").value;
    let uncheckedRadios = document.querySelectorAll('input[type="radio"].correct:not(:checked)');
    let q4 = document.querySelectorAll('input[name="q4"].correct:checked');
    let checkedcheck = 0;

    document.getElementById("quizhide").style.display = "none";
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
    let demotime = document.getElementById("demotime");

if (sec >= 51){
      demotime.innerHTML = "Time spent: " + (9-min) + ":0" + (60-sec)
    }
    else  {
      demotime.innerHTML = "Time spent: " + (9-min) + ":" + (60-sec)
    };    
    demotime.style.display = "block";
    document.getElementById("ttext").style.display = "none";

    allRadios.forEach((radio) => {
      radio.classList.add("lock");
      radio.tabIndex = "-1";
    });
    allChecks.forEach((checkbox) => {
      checkbox.classList.add("lock");
      checkbox.tabIndex = "-1";
    });
    allText.forEach((text) => {
      text.classList.add("lock");
      text.tabIndex = "-1";
    });
    s.style.display = "none";
    s.tabIndex = "-1";

    //https://stackoverflow.com/questions/507138/how-to-add-a-class-to-an-html-element-with-javascript 
    // I was also looking through general input security and discovered the tabIndex HTML tag through https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex 
    });

//q3 else statement should hodl wrong/right logic
//(maybe use classes pt.2?) The "G:,  1:, etc. text should be nested with checked/unchecked radio logic and make it turn green/red based off answer"
//no code was copied, but I learned a bit from some of the references