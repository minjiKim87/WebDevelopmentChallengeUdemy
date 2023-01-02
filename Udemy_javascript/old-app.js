// console.log(window.document);

// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("#external-id");
// anchorElement.href = "https://academind.com";

let h1Element = document.body.firstElementChild;
h1Element = document.body.firstElementChild[0];

console.dir(h1Element.parentElement);
console.dir(h1Element.nextElementSibling);

h1Element = document.body.firstElementChild[0];

let highlightedParagraph = document.querySelector(".highlighted-paragraph");

let newAnchorElement = document.createElement("a");
let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchorElement);

let firstElement = document.querySelector("h1");

firstH1Element.parentElement.removeChild(firstH1Element);

firstParagraph.parentElement.append(firstParagraph);

console.log(firstParagraph.textContent);

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";
