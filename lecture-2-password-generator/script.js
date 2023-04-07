const passwrodLength = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("include-number");
const includeSymbols = document.getElementById("include-symbols");
const password = document.getElementById("password");

function generateRandomPassword() {
  let characterSet = "";
  console.log(characterSet[0]);
  if (uppercase.checked) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowercase.checked) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeNumbers.checked) {
    characterSet += "0123456789";
  }

  if (includeSymbols.checked) {
    characterSet += "!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  }

  let generatedPassword = "";

  for (let i = 0; i < passwrodLength.value; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    generatedPassword += characterSet[randomIndex];
  }

  if (
    uppercase.checked ||
    lowercase.checked ||
    includeNumbers.checked ||
    includeNumbers.checked
  ) {
    password.innerText = generatedPassword;
  } else {
    password.innerText = "";
  }
}
