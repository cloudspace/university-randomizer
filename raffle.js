function pick_number(){
	var start = Number(document.getElementById('firstNumber').value);
	var end = Number(document.getElementById('secondNumber').value);

	var range = (end - start) + 1
	var val = retry(range,start)

	if (end-start < chosen_numbers.length) {
		return;
	}

	while (chosen_numbers.indexOf(val) >=0){
		val = retry(range, start)
	}


	chosen_numbers.push(val)

	document.getElementById('response').innerHTML = val
}

function retry (range, start){
	var rand = ((Math.random() * (range)) + start)
	var val = Math.floor(rand)
	return val
}

var chosen_numbers = [];
