

persons = [

    {
        name: "Gaurav Rajput",
        profession: "Software Engineer",
        language: "python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "sudhir Rajput",
        profession: "trader",
        language: "lists",
        framework: "trades",
        image: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        name: "archna Rajput",
        profession: "Tester",
        language: "Go",
        framework: "telvind",
        image: "https://randomuser.me/api/portraits/women/74.jpg"
    },
    {
        name: "Ravi Rajput",
        profession: "Software Engineer",
        language: "java",
        framework: "kotlin",
        image: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    {
        name: "Diksha Rajput",
        profession: "Technical Requiter",
        language: "Booleaans",
        framework: "Searching booleans",
        image: "https://randomuser.me/api/portraits/women/79.jpg"
    },

]

// we use iterator for iterate this array 
let cviter = persons[Symbol.iterator]();

// we call this for display first user details. 
nextcv();

let next = document.getElementById("next")

next.addEventListener("click", nextcv)

// when it function call then  iteration will start and next candidate will come
function nextcv() {
    let candidatedetail = cviter.next().value

    if (candidatedetail != undefined) {

        let image = document.getElementById("image")
        let details = document.getElementById("details")

        let img = `<img src="${candidatedetail.image}" alt="image">`


        let list = `<ul class="list-group">
    <li class="list-group-item list-group-item-success">${candidatedetail.name}</li>
    <li class="list-group-item list-group-item-primary">${candidatedetail.profession}</li>
    <li class="list-group-item list-group-item-primary">Familiar with ${candidatedetail.language}</li>
    <li class="list-group-item list-group-item-primary"> Experties in ${candidatedetail.framework} Framework</li>
  </ul>`

        image.innerHTML = img;
        details.innerHTML = list;
    }

    else {
        alert("it is end please reload page ")
        window.location.reload()
    }
}
