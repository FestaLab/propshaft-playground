const element = document.querySelector("#js-target span")
element.textContent = "loaded"
element.style = "color: green";

import("./async.js")

import url from './logo-js.svg'
let image = new Image
image.src = 'assets/' + url
document.querySelector("#image-js-target").appendChild(image)
