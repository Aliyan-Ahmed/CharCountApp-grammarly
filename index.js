const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("Remaining-counter");


let  userchar = 0;


const updatecounter = () => {
   userchar = charVal.value.length;
   totalCount.innerText = userchar;
   remainingCount.innerText = 150 - userchar;
}
charVal.addEventListener("keyup", () => updatecounter());

//copy the text

const copytext = () => {
    charVal.select();
    charVal.setSelectionRange(0,9999) //For Mobile Version
    navigator.clipboard.writeText(charVal.value);   //important code
}