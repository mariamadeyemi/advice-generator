const getAdviceBtn = document.querySelector(".dice");
const adviceBody = document.querySelector(".advice-body");
const adviceId = document.querySelector(".advice-id");


async function getAdvice(){
    let advice = await fetch("https://api.adviceslip.com/advice");
   let adviceData = await advice.json();
   adviceData = adviceData.slip;
   adviceBody.textContent = adviceData.advice;
   adviceId.textContent = `Advice #${adviceData.id}`
}

getAdvice();

getAdviceBtn.addEventListener("click", getAdvice);
