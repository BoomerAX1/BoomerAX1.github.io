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
const t = document.getElementById("timer");
const q = document.getElementById("quizgrid");
const submitclick = new Event("click");
let activated = false;
let time = 600;
let score = 0;
let min = 10;
let sec = 0;

begin.addEventListener("click", function(){
  
  document.getElementById("quizform").style.display = "block";
  document.getElementById("startform").style.display = "none";
  document.getElementById("quizhide").style.display = "none";
  const timer = setInterval(function(){

    sec -=1
    if (sec <= 0 && min >= 1){
      sec = 59
      min -= 1
    }

    if (sec >= 0 && sec <= 9){
      document.getElementById("ttext").innerHTML = "Time Remaining: " + min + ":0" + sec
    }
    else  {
      document.getElementById("ttext").innerHTML = "Time Remaining: " + min + ":" + sec
    }
    
    if (sec === 0 && min === 0 && activated == false){
      document.getElementById("ttext").innerHTML = "Time Remaining: None"
      s.dispatchEvent(submitclick)
      //dispatch event was brought to my attention via gemini in the base google search engine, and I did not copy and code whatsoever
      //https://www.reddit.com/r/learnjavascript/comments/16wxe4j/how_to_add_a_listener_for_when_another_function/ is further reference for it
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
    let q8 = document.getElementById("q8").value;
    let uncheckedRadios = document.querySelectorAll('input[type="radio"].correct:not(:checked)');
    let q4 = document.querySelectorAll('input[name="q4"].correct:checked');
    let q4i = document.querySelectorAll('input[name="q4"].incorrect:checked');
    let q9 = document.querySelectorAll('input[name="q9"].correct:checked');
    let q9i = document.querySelectorAll('input[name="q9"].incorrect:checked');
    let checkedcheck = 0;

    activated = true;
    document.getElementById("quizhide").style.display = "none";
    
    uncheckedRadios.forEach((radio) => {
      document.getElementById(radio.name).innerHTML += ' | <span style="color: red;">Incorrect</span>'
    });
    checkedRadios.forEach((radio) => {
      document.getElementById(radio.name).innerHTML += ' | <span style="color: green;">Correct</span>'
    });

    document.querySelectorAll(".questioncorrect").forEach(element => {
      element.style.color = "green";
    });
  
    document.querySelectorAll(".questionincorrect").forEach(element => {
      element.style.color = "red";
    });

    //. =  class



    if (q3.toLowerCase() == "sourceforge" || q3.toLowerCase() == "github") {
        checkedtext += 1
        document.getElementById("q3p").innerHTML += '<span style="color: #f54284;"> GitHub</span> or <span style="color: #f54284;">SourceForge</span>'
        document.getElementById("q3q").innerHTML += ' | <span style="color: green;">Correct</span>'
    }
    else{
      document.getElementById("q3p").innerHTML += '<span style="color: #f54284;"> GitHub</span> or <span style="color: #f54284;">SourceForge</span>'
      document.getElementById("q3q").innerHTML += ' | <span style="color: red;">Incorrect</span>'
    };

    if (q8.toLowerCase() == "written" || q8.toLowerCase() == "audio" || q8.toLowerCase() == "photographic" || q8.toLowerCase() == "video" || q8.toLowerCase() == "file" || q8.toLowerCase() == "interactive"){
        checkedtext += 1
        document.getElementById("q8p").innerHTML += '<span style="color: #f54284;"> Written, Audio, Photographic, Video, File,</span> or <span style="color: #f54284;">Interactive</span>'
        document.getElementById("q8q").innerHTML += ' | <span style="color: green;">Correct</span>'
    }
    else{
      document.getElementById("q8p").innerHTML += '<span style="color: #f54284;"> Written, Audio, Photographic, Video, File,</span> or <span style="color: #f54284;">Interactive</span>'
      document.getElementById("q8q").innerHTML += ' | <span style="color: red;">Incorrect</span>'
    };


    if (q4.length == 3 && q4i.length == 0){
      checkedcheck += 1
      document.getElementById("q4q").innerHTML += ' | <span style="color: green;">Correct</span>'
    }
    else if (q4.length >= 1){
      checkedcheck += 0.5
      document.getElementById("q4q").innerHTML += ' | <span style="color: orange;">Partial</span>'
    }
    else {
      checkedcheck += 0
      document.getElementById("q4q").innerHTML += ' | <span style="color: red;">Incorrect</span>'
    };

    if (q9.length == 3 && q9i.length == 0){
      checkedcheck += 1
      document.getElementById("q9q").innerHTML += ' | <span style="color: green;">Correct</span>'
    }
    else if (q9.length >= 1){
      checkedcheck += 0.5
      document.getElementById("q9q").innerHTML += ' | <span style="color: orange;">Partial</span>'
    }
    else {
      checkedcheck += 0
      document.getElementById("q9q").innerHTML += ' | <span style="color: red;">Incorrect</span>'
    };

// text updator for the actual popup
    //document.getElementById("score").innerHTML = "Radios" + checkedRadios.length + "Text" + checkedtext + "Check" + checkedcheck;
    let totalscore = checkedRadios.length + checkedtext + checkedcheck;
    document.getElementById("totaltext").innerHTML = "Total Score: " + totalscore + "/10"; 
    let timetext = document.getElementById("timetext");
    if (totalscore < 7){
      document.getElementById("passfailtext").innerHTML = "Result: " + '<span style="color: red;">Fail</span>'
    }
    else if (totalscore >= 7 && totalscore <= 10){
      document.getElementById("passfailtext").innerHTML = "Result: " + '<span style="color: green;">Pass</span>'
    };


if (sec >= 51){
      timetext.innerHTML = "Time spent: " + (9-min) + ":0" + (60-sec)
    }
    else if (sec !== 0){
      timetext.innerHTML = "Time spent: " + (9-min) + ":" + (60-sec)
    }
    else {
      timetext.innerHTML = "Time spent: " + (9-min+1) + ":00"
    };   
    document.getElementById("ttext").style.display = "none";

    //locking all questions after submit (see css file for lock)
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

//tabIndex removes them from being tabbed, making it a encompassing lock
//https://stackoverflow.com/questions/507138/how-to-add-a-class-to-an-html-element-with-javascript 
// I was also looking through general input security and discovered the tabIndex HTML tag through https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex 


    s.style.display = "none";
    s.tabIndex = "-1";
    q.style.display = "grid";

});

//q3 else statement should hodl wrong/right logic
//(maybe use classes pt.2?) The "G:,  1:, etc. text should be nested with checked/unchecked radio logic and make it turn green/red based off answer"
//no code was copied, but I learned a bit from some of the references