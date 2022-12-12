"use strict";

const body = document.querySelector("body")

const enterancePage = () => {
    const enterance = document.createElement("h1")
    enterance.textContent = "hi welcome"
    body.appendChild(enterance)

}

document.addEventListener("DOMContentLoaded", enterancePage);