const result = document.getElementById("result");
const amountInput = document.getElementById("amount");
const button = document.getElementById("calculate");
const select = document.getElementById("currency");
const errorInfo = document.getElementById("error-info");

function getRate() {
  errorInfo.innerText = "";
  result.innerText = "";
  if (amountInput.value <= 0) {
    errorInfo.innerText = "Należy podać kwotę większą od 0";
    return;
  }

  axios
    .get(
      `https://api.nbp.pl/api/exchangerates/rates/a/${select.value}/?format=json`
    )
    .then((response) => {
      const rate = response.data?.rates?.[0]?.mid;

      if (rate) {
        result.innerText = `to ${(amountInput.value * rate).toFixed(2)}PLN`;
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
