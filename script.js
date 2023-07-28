const result = document.getElementById("result");
const amountInput = document.getElementById("amount");
const button = document.getElementById("calculate");
const select = document.getElementById("currency");
const errorInfo = document.getElementById("error-info");

function getRate() {
  if (amountInput.value <= 0) {
    errorInfo.innerText = "Należy podać kwotę większą od 0";
    result.innerText = "___";
    return;
  }

  axios
    .get(
      `https://api.nbp.pl/api/exchangerates/rates/a/${select.value}/?format=json`
    )
    .then((response) => {
      const rate = amountInput.value * response.data.rates[0].mid;

      if (rate) {
        result.innerText = rate;
      } else {
        errorInfo.innerText = "Niestety nie dysponujemy wystarczającymi danymi";
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

button.addEventListener("click", function () {
  getRate();
});
