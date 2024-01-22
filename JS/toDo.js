const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
    alert("Are you Mental? There's nothing to add!");
    }

    else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
   LocalSave();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    LocalSave();
    }
    else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    LocalSave();
    }}
,false);

function LocalSave(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function onReload(){
    listContainer.innerHTML=localStorage.getItem("data");

}
onReload();