// declaring arrays and variables
let inputArray = []
let savedInputArray = []
let renderedArray = []
let i = 0

// declaring constants
const input = document.querySelector("#inputElement")
const inputButton = document.querySelector("#inputButton")
const clearLinkButton = document.querySelector("#clearLinksButton")
const saveTabButton = document.querySelector("#saveTabButton")
const list = document.querySelector("#listElement")

// Event listeners for buttons
inputButton.addEventListener("click", function(){
    inputBtn()
})
// inputButton.addEventListener("keypress", function(){
//     if(Event.keyCode === 13){
//         inputBtn()
//     }
    
// } )
clearLinkButton.addEventListener("dblclick", function(){
    clearBtn()
})
saveTabButton.addEventListener("click" , function(){
    saveTabBtn()
})


// button functions
function inputBtn(){

    if(inputElement.value != ""){
        inputArray.push("https://" + inputElement.value)
        inputElement.value = ""
    
        localStorage.clear
        localStorage.setItem( "savedLinks", JSON.stringify(inputArray))
        createList(inputArray)
    }
    
}

function clearBtn(){
    
    let length = inputArray.length - 1

    for(i=length;i>=0;i--){
        list.removeChild(list.childNodes[i])
    }

    localStorage.clear()
    inputArray = []
    i = 0
}

function saveTabBtn(){
    chrome.tabs.query({active:true,currentWindow:true} , function(tabs){
        inputArray.push(tabs[0].url)
        localStorage.clear
        localStorage.setItem("savedLinks", JSON.stringify(inputArray))
        createList(inputArray)
    })

}

// print saved array on startup
savedInputArray = JSON.parse(localStorage.getItem("savedLinks"))
if (savedInputArray != null){
    inputArray = savedInputArray
    createList(savedInputArray)
}

// print array fnction
function createList(renderedArray){

    for(i;i<renderedArray.length;i++)
    {
        let a = document.createElement("a")
        a.target = "_blank"
        a.href =renderedArray[i]
        a.innerText = renderedArray[i]
        
        let li = document.createElement("li")
        li.appendChild(a)

        list.appendChild(li)
    }

}

    
/* 
>>> or <<<

function createList(){
    let outputString = ""
    for(let i=0;i<inputArray.length;i++){
        outputString += "<li><a href = '"+inputArray[i]+"' target = '_blank'>" + inputArray[i] +"<a><li>"
    }

    list.innerHTML = outputString
}
*/

 
