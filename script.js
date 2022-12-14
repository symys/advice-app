"use strict";
const APIUrl = "https://api.adviceslip.com/advice"

const cardDiv = document.getElementById("advice-card")
const idDiv = document.getElementById("advice-id")
const newAdviceBtn = document.getElementById("advice-generator")

const idNum = document.createElement("p")
const enterance = document.createElement("p")

let adviceHolder;
let idHolder;

document.addEventListener("DOMContentLoaded", function(){
    newAdviceBtn.addEventListener("click", function(){
        fetchAdvice();
    })

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
        
        idNum.id = "advice-id-text"
        idNum.innerHTML = `ADVICE #${idHolder}`
        idDiv.appendChild(idNum)
        //element for advice
       
        enterance.id = "advice-p-tag"
        enterance.innerHTML = `"${adviceHolder}"`
        cardDiv.appendChild(enterance)
    
    }
    
})
