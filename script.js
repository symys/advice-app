"use strict";
const APIUrl = "https://api.adviceslip.com/advice"

const cardDiv = document.getElementById("advice-card")
const idDiv = document.getElementById("advice-id")

let adviceHolder;
let idHolder;

const initial = () => {
    fetchAdvice();
}

const fetchAdvice = async() => {
    const result = await fetch(APIUrl).then((res) => res.json()).then((data) => passAdviceToHolder(data.slip.advice, data.slip.id))
    // setTimeout(() => {
    //     console.log(advice) // state is "fulfilled" or "rejected"
    //   }, 5000);
}
//fetchAdvice()

function passAdviceToHolder(newAdvice, id){
    adviceHolder = newAdvice
    idHolder = id;
    //return adviceHolder
    enterancePage(adviceHolder, idHolder)
}

const enterancePage = (adviceHolder, idHolder) => {
    //element for advice id
    const idNum = document.createElement("p")
    idNum.id = "advice-id-text"
    idNum.innerHTML = `ADVICE #${idHolder}`
    idDiv.appendChild(idNum)
    //element for advice
    const enterance = document.createElement("p")
    enterance.id = "advice-p-tag"
    enterance.innerHTML = `"${adviceHolder}"`
    cardDiv.appendChild(enterance)

}



document.addEventListener("DOMContentLoaded",initial );