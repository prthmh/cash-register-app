const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error");

checkButton.addEventListener("click", function validateBillAmount(){
    message.style.display = "none";
    if(billAmount > 0){
        if(cashGiven.value >= billAmount.value){
            const amtToBeReturned = cashGiven.value - billAmount.value;
        } else{
            showMessage("The cash provided should be equal to the bill amount");
        }
    } else{
        showMessage("Invalid bill amount");
    }
});

function caluculateChange()
function showMessage(message){
    message.style.display = "block"
        message.innerText = message;
}