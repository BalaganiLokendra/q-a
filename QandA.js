let questionsFormEl = document.getElementById("questionsForm");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");
let hyderabadEl = document.getElementById("cityHyderabad");
let chennaiEl = document.getElementById("cityChennai");
let delhiEl = document.getElementById("cityDelhi");
let mumbaiEl = document.getElementById("cityMumbai");
let selectedCity = null;
hyderabadEl.addEventListener("change", function(event) {
    selectedCity = hyderabadEl.value;
});
chennaiEl.addEventListener("change", function(event) {
    selectedCity = chennaiEl.value;
});
delhiEl.addEventListener("change", function(event) {
    selectedCity = delhiEl.value;
});
mumbaiEl.addEventListener("change", function(event) {
    selectedCity = mumbaiEl.value;
});

questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsgEl.classList.remove("text-success");
        resultMsgEl.classList.add("text-danger");
        resultMsgEl.textContent = "Please select the answer!";

    } else if (selectedCity === "delhi") {
        resultMsgEl.classList.remove("text-danger");
        resultMsgEl.classList.add("text-success");
        resultMsgEl.textContent = "Correct Answer!";
    } else {
        resultMsgEl.classList.remove("text-success");
        resultMsgEl.classList.add("text-danger");
        resultMsgEl.textContent = "Wrong Answer";
    }

});