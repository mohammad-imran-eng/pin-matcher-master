// hide message section
document.getElementById('wrongPin').style.display = "none";
document.getElementById('rightPin').style.display = "none";

// display generated pin
function generatePin() {
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generatePinInput').value = randomNumber;
    return randomNumber;
}

// handle calculator button event
document.getElementById('digits-container').addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {

    }

    else {
        var typedInput = document.getElementById('typedPin');
        typedInput.value = typedInput.value + digit;
    }
})

function matchPin() {
    var generatePin = document.getElementById('generatePinInput').value;
    var pin = document.getElementById('typedPin').value;

    if (generatePin == pin) {
        document.getElementById('rightPin').style.display = "block";
        document.getElementById('wrongPin').style.display = "none";
    }
    else {
        document.getElementById('wrongPin').style.display = "block";
        document.getElementById('rightPin').style.display = "none";
    }
}




