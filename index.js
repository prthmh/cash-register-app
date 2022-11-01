const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes=[2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAmount(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amtToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amtToBeReturned);
        } else{
            showMessage("Do you wanna wash plates?");
        }
    } else{
        showMessage("Invalid bill amount");
    }
});

function calculateChange(amtToBeReturned){
    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amtToBeReturned/availableNotes[i]);
        amtToBeReturned %= availableNotes[i]; 
        noOfNotes[i].innerText = numberOfNotes; 
    }
}
function hideMessage(){
    message.style.display = "none";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}