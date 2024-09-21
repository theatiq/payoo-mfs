document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault()

    const addMoney = getInputFieldValueById("input-add-money")
    const pinNUmber = getInputFieldValueById("input-pin-number")
    if(isNaN(addMoney)){
        alert("Failed to add money")
        return
    }

    if (pinNUmber === 1234) {
        const balance = getTextFieldValueById("account-balance")
        const newBalance = balance + addMoney
        document.getElementById("account-balance").innerText = newBalance
        const p = document.createElement("p")
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`
        document.getElementById("transaction-container").appendChild(p) 

    } else {
        alert("Failed to add money, Please try later.")
    }
})

