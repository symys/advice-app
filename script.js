"use strict";
const APIUrl = "https://api.adviceslip.com/advice"

const body = document.querySelector("body")

const fetchAdvice = async() => {
    const result = await fetch(APIUrl).then((res) => res.json()).then((data) => console.log(data.slip.advice))
    // setTimeout(() => {
    //     console.log(advice) // state is "fulfilled" or "rejected"
    //   }, 5000);
}
//fetchAdvice()

const enterancePage = () => {
    fetchAdvice();
    const enterance = document.createElement("h1")
    enterance.textContent = ""
    body.appendChild(enterance)

}

document.addEventListener("DOMContentLoaded", enterancePage);