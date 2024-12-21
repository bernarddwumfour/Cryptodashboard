function switchContentOnElementClick(trigger,contentToBeReplaced,replacementcontent){
    document.querySelector(trigger)&& document.querySelector(trigger).addEventListener("click",()=>{
        document.querySelector(contentToBeReplaced).classList.add("hidden") 
        document.querySelector(replacementcontent).classList.remove("hidden")
    })
}
function hideContentOnElementClick(trigger,contentToHide){
    document.querySelector(trigger) && document.querySelector(trigger).addEventListener("click",()=>{
        document.querySelector(contentToHide).classList.add("hidden")
    })
}

//FOR NO TRANSACTION
switchContentOnElementClick(".overview",".recenttransaction",".norecenttransaction")
switchContentOnElementClick(".overview",".recenttransactiontable",".norecenttransactiontable")
hideContentOnElementClick(".overview",".creditCard")
hideContentOnElementClick(".overview",".withDrawalAmount")

//FOR WITHDRAWAL SUCCESS AND ERROR
switchContentOnElementClick(".continuetosuccess",".withDrawalAmount",".withdrawalsuccess")
switchContentOnElementClick(".continuetoerror",".withDrawalAmount",".withdrawalerror")