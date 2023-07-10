const amountInput = document.getElementById("amount");

console.log(amountInput);

const button = document.getElementById("calculate");

button.addEventListener("click", function () {
  console.log(amountInput.value * getRate(select.value));
});

const euro = 4.45;
const select = document.getElementById("currency");

function getRate(currency) {
  return axios
    .get(
      "https://api.nbp.pl/api/exchangerates/rates/c/" +
        currency +
        "/?format=json"
    )
    .then((response) => {
      return response.data.rates[0].bid;
    })
    .catch((err) => {
      console.error(err);
    });

  //   if (currency === "EUR") {
  //     return 4.45;
  //   } else if (currency === "USD") {
  //     return 4.1;
  //   } else if (currency === "CHF") {
  //     return 3.8;
  //   }
}

const result = document.getElementById("result");

button.addEventListener("click", function () {
  result.innerText = amountInput.value * getRate(select.value);
});
