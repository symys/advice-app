"use strict";
const APIUrl = "https://api.adviceslip.com/advice"

const body = document.querySelector("body")
let adviceHolder;

const initial = () => {
    fetchAdvice();
}

const fetchAdvice = async() => {
    const result = await fetch(APIUrl).then((res) => res.json()).then((data) => passAdviceToHolder(data.slip.advice))
    // setTimeout(() => {
    //     console.log(advice) // state is "fulfilled" or "rejected"
    //   }, 5000);
}
//fetchAdvice()

function passAdviceToHolder(newAdvice){
    adviceHolder = newAdvice
    //return adviceHolder
    enterancePage(adviceHolder)
}

const enterancePage = (adviceHolder) => {
    const enterance = document.createElement("h1")
    enterance.innerHTML = adviceHolder
    body.appendChild(enterance)

}



document.addEventListener("DOMContentLoaded",initial );