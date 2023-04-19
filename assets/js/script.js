// Assignment Code
var generateBtn = document.querySelector("#generate");
var pass_length = String;
var c_lowercase = String;
var c_uppercase = String;
var c_numbers = String;
var c_special = String;
var times = 0;

// Write password to the #password input
function writePassword() {
	var passwordText = document.querySelector("#password");
	var terminate;

	// Capture Password Criterias

	passwordText.value = "Your Secure Password";

	terminate = confirm_length();

	if (terminate !== null) {

		passwordText.innerHTML = confirm_lowercase();

		passwordText.value += confirm_uppercase();

		passwordText.value += confirm_numbers();

		passwordText.value += confirm_special();

		passwordText.value = generatePassword();
	}
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
					}
				break;

				case "upp":
					if (c_uppercase) {
						chain += random_uppercase();
						i++;
					}
				break;

				case "low":
					if (c_lowercase) {
						chain += random_lowercase();
						i++;
					}
				break;

				case "sym":
					if (c_special) {
						chain +=random_special();
						i++;
					}
				break;

			}
		}
		return chain;
	}


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
		var passwordText = document.querySelector("#password");

		c_lowercase = confirm("Should include Lowercase Letters?");
		if (c_lowercase) {
			chain = random_lowercase();
		}
		passwordText.value = chain;
		console.log(chain);
		return chain;
	}

// Capture if should include Uppercase
	function confirm_uppercase(chain) {
		c_uppercase = confirm("Should include Uppercase Letters?");
		if (c_uppercase) {
			chain = random_uppercase();
		}
		console.log(chain);
		return chain;
	}

// Capture if should include Numbers
	function confirm_numbers(chain) {
		c_numbers = confirm("Should include Numbers?");
		if (c_numbers) {
			chain = random_number();
		}
		console.log(chain);
		return chain;
	}

// Capture if should include special characters
	function confirm_special(chain) {
		c_special = confirm("Should include Special Characters?");
		if (c_special) {
			chain = random_special();
		}
		console.log(chain);
		return chain;
	}

// Random Selection of Characters base on ASCII code table

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


































