const productNameInputElement = document.getElementById("product-name");

const remainingCharsElement = document.getElementById("remaining-chars");
function updateRemainingCharacters(addEventListener) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharsElement = 60 - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
