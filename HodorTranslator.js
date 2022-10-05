var btn = document.querySelector("#btn");
var input = document.querySelector("#input");
var outputdiv = document.querySelector("#outputdiv");

var url = "https://api.funtranslations.com/translate/chef.json"
// var url = "https://api.funtranslations.com/translate/groot.json"
btn.addEventListener("click", clickHandler)

// function geturl(text){
//     return url +"?"+"text="+text
// }

function clickHandler() {
   
    var inputText = input.value;
    newUrl = `${url}?text=${inputText}`
    fetch(newUrl).then((data) => data.json()).then((data) =>{
        console.log(data);
        outputdiv.innerText = data.contents.translated;
    })



    
    //  fetch(geturl(inputText))
    //  .then(Response => Response.json())
    //  .then(json => {
    //     var inpText = json.contents.translated;
    //      outputdiv.innerText = inpText;
    //  })

    
};

