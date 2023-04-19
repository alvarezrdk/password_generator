// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass_length = String;
var c_lowercase = String;
var c_uppercase = String;
var c_numbers = String;
var c_special = String;
var password = String;

// Write password to the #password input
	function writePassword() {
	var v_cancel;

	// Capture Password Criterias

	password = "Your Secure Password"; // Refresher for multiple iterations
	write_pass();

	// The routine will stop if first question is cancelled
	v_cancel = confirm_length();

	if (v_cancel !== null) {

		password = confirm_lowercase();
		if (password !== "") {
			alert(password);
		}

		password += confirm_uppercase();
		if (password !== "") {
			alert(password);
		}

		password += confirm_numbers();
		if (password !== "") {
			alert(password);
		}
		password += confirm_special();
		if (password !== "") {
			alert(password);
		}
		
		// Generate Password based on selected Criterias
		password = generatePassword();
		write_pass();
	}
	}

	function write_pass() {
		var passwordText = document.querySelector("#password");

		passwordText.value = password;
	}

	function generatePassword(chain) {
		var random_type = ["num", "upp", "low", "sym"];
		chain = "";

		// Random selection of character type
		for (var i = 0; i < pass_length;) {
			x = Math.floor(Math.random() * 4);

			switch (random_type[x]) {
				case "num":
					if (c_numbers) {
						chain += random_number();
						i++;
						console.log(chain);
					}
				break;

				case "upp":
					if (c_uppercase) {
						chain += random_uppercase();
						i++;
						console.log(chain);
					}
				break;

				case "low":
					if (c_lowercase) {
						chain += random_lowercase();
						i++;
						console.log(chain);
					}
				break;

				case "sym":
					if (c_special) {
						chain +=random_special();
						i++;
						console.log(chain);
					}
				break;

			}
		}
		return chain;
	}


//---------------- *Capture Password Criterias Section* ---------------------------
// Capture Length of New Password
	function confirm_length() {
		var valid = true;
		var warning1 = " ";

		while (valid) {

			pass_length = prompt("length of the password " + warning1, "8 - 128 digits");

			if (pass_length > 7 && pass_length < 129) {
				valid = false;
			} else if (pass_length != null) {
				warning1 = "...Please Correct Your Entry";
				valid = true;
			}

			if (pass_length == null) {
				valid = false;
			}
		}
		console.log(pass_length);
		return pass_length;
	}

// Capture if should include lowercase
	function confirm_lowercase(chain) {
		c_lowercase = confirm("Should include Lowercase Letters?");
		if (c_lowercase) {
			chain = random_lowercase();
		} else {
			chain = "";
		}
		console.log(chain);
		return chain;
	}

// Capture if should include Uppercase
	function confirm_uppercase(chain) {
		c_uppercase = confirm("Should include Uppercase Letters?");
		if (c_uppercase) {
			chain = random_uppercase();
		} else {
			chain = "";
		}
		console.log(chain);
		return chain;
	}

// Capture if should include Numbers
	function confirm_numbers(chain) {
		c_numbers = confirm("Should include Numbers?");
		if (c_numbers) {
			chain = random_number();
		} else {
			chain = "";
		}
		console.log(chain);
		return chain;
	}

// Capture if should include special characters
	function confirm_special(chain) {
		c_special = confirm("Should include Special Characters?");
		if (c_special) {
			chain = random_special();
		} else {
			chain = "";
		}
		console.log(chain);
		return chain;
	}


// ------- *Random Selection of Characters base on ASCII code table* -------

function random_lowercase() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	}

function random_uppercase() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function random_number() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function random_special() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


































