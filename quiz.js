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

//queryselector # uses the name of a ID
s.addEventListener("click", function() {
    let checkedRadios = document.querySelectorAll('input[type="radio"]#correct:checked').length;
    let checkedtext = 0;
    let q3 = document.getElementById("q3").value;
    if (q3.toLowerCase() === "test") {
        checkedtext += 1
    }
    document.getElementById("demo").innerHTML = "Radios" + checkedRadios + "Text" + checkedtext;
});