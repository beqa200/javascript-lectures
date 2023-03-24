const billInput = document.getElementById("bill-input");
const tips = document.getElementsByClassName("tip");
const tipsArray = [...tips];
const peopleInput = document.getElementById("people-input");
const totalResult = document.getElementById("total-result");
const tipResult = document.getElementById("tip-result");
const resetButton = document.getElementById("reset");
const validation = document.getElementById("validation");

let billValue = 0;
let tipsValue = 0;
let peopleValue = 0;
let total = 0;
let tipAmount = 0;

billInput.addEventListener("input", (event) => {
  billValue = parseInt(event.target.value);
  calculation();
});

for (let i = 0; i < tipsArray.length; i++) {
  tipsArray[i].addEventListener("click", (event) => {
    tipsValue = parseInt(event.target.innerText);
    calculation();
  });
}

peopleInput.addEventListener("input", (event) => {
  peopleValue = parseInt(event.target.value);
  if (event.target.value == 0) {
    validation.innerText = "Can’t be zero";
    peopleInput.style.borderColor = "red";
  } else {
    validation.innerText = "";
  }
  calculation();
});

resetButton.addEventListener("click", () => {
  billInput.value = "0";
  tipsValue = 0;
  peopleInput.value = "";
  totalResult.innerText = "0.00$";
  tipResult.innerText = "0.00$";
});

function calculation() {
  total = ((billValue + billValue * (tipsValue / 100)) / peopleValue).toFixed(
    2
  );

  tipAmount = ((billValue * (tipsValue / 100)) / peopleValue).toFixed(2);

  if (peopleValue == 0 || peopleValue.length == 0 || peopleInput.value == "") {
    totalResult.innerText = "0.00$";
    tipResult.innerText = "0.00$";
  } else {
    totalResult.innerText = `${total}$`;
    tipResult.innerText = `${tipAmount}$`;
  }
}
