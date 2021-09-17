var billAmount = document.querySelector("#bill-amount");
var givenAmount = document.querySelector("#given-amount");
var btnCheck = document.querySelector("#btn-check");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var errorMessageDiv = document.querySelector("#error-message-div");

var notesArr = [2000, 500, 100, 20, 10, 5, 1]

function showErrorMessage(errorMessage) {
    errorMessageDiv.innerHTML = errorMessage;
    // console.log(errorMessage)
}
function hideErrorMessage() {
    errorMessageDiv.innerHTML = ""
}

function vadiladateAmounts() {

    if (Number(billAmount.value) >= 0) {

        if (Number(givenAmount.value) > Number(billAmount.value)) {
            var amountToReturn = Number(givenAmount.value) - Number(billAmount.value)
            //    console.log(amountToReturn)
            hideErrorMessage()
            calculateChange(amountToReturn)

        } else {
            var errorMessage = "*Please enter valid amount: Given amount should be greater than Bill amount"
            showErrorMessage(errorMessage)
        }

    } else {
        var errorMessage = "*Enter valid Bill Amount"
        showErrorMessage(errorMessage)
    }

    function calculateChange(amountToReturn) {

        for (var i = 0; i < notesArr.length; i++) {

            var calculateNumberOfNotes = Math.trunc(amountToReturn / notesArr[i])
            amountToReturn = amountToReturn % notesArr[i]
            noOfNotes[i].innerHTML = calculateNumberOfNotes
        }

    }



}
btnCheck.addEventListener("click", vadiladateAmounts)