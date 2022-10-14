var btn = document.querySelector("#btn");
var input = document.querySelector("#input");
var outputdiv = document.querySelector("#outputdiv");

var url = "https://api.funtranslations.com/translate/minion.json"
btn.addEventListener("click", clickHandler)

function clickHandler() {
   
    var inputText = input.value;
    newUrl = `${url}?text=${inputText}`
    fetch(newUrl).then((data) => data.json()).then((data) =>{
        console.log(data);
        outputdiv.innerText = data.contents.translated;
    })
    
};

