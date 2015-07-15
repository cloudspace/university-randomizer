var chosen_numbers = []; //Array to store numbers we have previously chose

function pick_number() {
    var start = Number(document.getElementById('firstNumber').value); //First Number
    var end = Number(document.getElementById('secondNumber').value); //Second number
    if (start > end) { //Account for stupid people
        var start = Number(document.getElementById('secondNumber').value);
        var end = Number(document.getElementById('firstNumber').value);
    }


    chosen_numbers = chosen_numbers.filter(function(x) { //Make sure chosen numbers are in the current range.
			if (start <= x && x <= end) {return x}
		})

    val = getSecureRandomInt(start, end); //Get a crypto random number

    while (chosen_numbers.indexOf(val) > -1) { //Make sure the number hasn't been chosen before
        val = getSecureRandomInt(start, end);
        if (chosen_numbers.length > (end-start)) { //If all numbers have been chosen.
        	document.getElementById('response').innerHTML = 'All numbers have been chosen'
        }
    }

    chosen_numbers.push(val) //Add number to previous chosen array

    document.getElementById('response').innerHTML = val //Display chosen number

}

function getSecureRandomInt(min, max) { //This function creates a secure number
    var byteArray = new Uint8Array(1); // Create byte array and fill with 1 random number
    window.crypto.getRandomValues(byteArray); //Securely create random number

    var range = max - min + 1; //Determine the range of numbers
    var max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range) //If number isn't in our range
        return getSecureRandomInt(min, max); //Recursively call function
    return min + (byteArray[0] % range); //Else we give them our number
}