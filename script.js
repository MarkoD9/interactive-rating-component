
var ratingBtns = document.getElementsByClassName("rating-btn");
var selectCard = document.querySelector(".select-card");
var thankyouCard = document.querySelector(".thankyou-card");
var submitBtn = document.querySelector(".submit-btn");
var ratingSpan = document.getElementById("ratingSpan");

submitBtn.addEventListener("click", onSubmit);

var selectedBtn = 0;
var submitted = false;


for (let index = 0; index < ratingBtns.length; index++) {
    let btn = ratingBtns[index];
    btn.addEventListener("click", function() {
        for (let index2 = 0; index2 < ratingBtns.length; index2++) { 
            let btn2 = ratingBtns[index2];
            if(btn2.classList.contains("activebtn")) {
                btn2.classList.remove("activebtn")
            }
        }
        selectedBtn = btn.innerHTML;
        btn.classList.toggle("activebtn");
    })
}

function onSubmit() {
    if(selectedBtn != 0) {

    submitted = true;
    selectCard.classList.add("hidecard");
    thankyouCard.classList.remove("hidecard");
    ratingSpan.innerHTML = selectedBtn;

    }
}