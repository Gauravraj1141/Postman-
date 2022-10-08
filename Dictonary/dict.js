let btn = document.getElementById("submit")

// add event on this submit button
btn.addEventListener("click", loader)

function loader(e) {
    // submit button reload page so we disable this default 
    e.preventDefault();
    // we take word from input tag
    let word = document.getElementById("inp")
   
    // not we work on ajax and get request from api and fetch it 
    const xhr = new XMLHttpRequest();
    
    // now we open and give inputs 
    xhr.open('GET',"https://api.dictionaryapi.dev/api/v2/entries/en/hello" , true)


    xhr.onload = function (){
        console.log(this.status)
       let meaning = JSON.parse(this.responseText)
        meaning.forEach(element => {
            console.log(element.word)
        });
    }

    xhr.send();
}