const birthDate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector(".result");
const closeButton = document.querySelector("#close-button") 
const privacyNote = document.querySelector(".privacy-note")

closeButton.addEventListener("click",function closePrivacyNote(){
    privacyNote.style.display="none";
})


checkButton.addEventListener("click", function checkBirthDay(){

    var bDay = birthDate.value;
    bDay = bDay.replaceAll("-","")
    
    let sum = 0

    if(bDay && luckyNumber.value){

        for(let i=0;i<bDay.length;i++){
            sum = sum + Number(bDay.charAt(i));
        }
        message.style.display = "none";
        if(sum % luckyNumber.value === 0){
            message.style.display="block";
            message.style.color="blue";
            message.innerHTML = "Hurray !!! Your Birthday is Lucky"
        }else{
            message.style.display="block";
            message.style.color="blue";
            message.innerHTML = "Oh no!!! Your Birthday is Not Lucky"
        }


    }else {
        message.style.color="red";
        message.innerText = "Please enter both inputs"
    }
})