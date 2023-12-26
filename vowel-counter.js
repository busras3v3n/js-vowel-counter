document.addEventListener("DOMContentLoaded", function(){

let textInput = document.querySelector(".text-input");
let submitButton = document.querySelector(".button");
let para = document.querySelector(".para");
let vowelcount = 0;

submitButton.addEventListener("click", function(){

    for(i = 0; i < textInput.value.length; i++){
        switch(textInput.value[i]){
            case "e":
            case "u":
            case "ı":
            case "o":
            case "ü":
            case "a":
            case "i":
            case "ö":
            vowelcount += 1;
            break;
        }
    }
    if(textInput.value === ""){
        para.style.visibility = "hidden"
    } else{
        para.innerHTML = `${textInput.value} has ${vowelcount} vowels`
        para.style.visibility = "visible";
    }

})

textInput.addEventListener("input", function(){
    vowelcount = 0;
})















})