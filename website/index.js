let countEl=document.getElementById("count-el")
let count=0
//document.getElementById("count-el").innerText=0


function increment()
{
    //alert("The button was clicked")
    // getElementById("count-el")=getElementById("count-el")+1
    count+=1
    countEl.textContent=count
    
}
let saveEl=document.getElementById("save-el")
function save(){
    let countStr=count+" - "
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
}

// let welcomeEl=document.getElementById("welcome-el")
// let name="Arya"
// let greetings="welcome back "
// welcomeEl.innerText=greetings+name
// welcomeEl.innerText+="👋"