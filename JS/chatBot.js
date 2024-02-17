let cToggler = document.querySelector(".chatToggler");
let cSwitch = document.querySelector("#chatSwitch");


function chatToggle(){
if (cSwitch.classList.contains("show-chatbox")) {
cSwitch.classList.remove("show-chatbox");
}
else{   
    cSwitch.classList.add("show-chatbox");   
}

}

