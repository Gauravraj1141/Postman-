const students = [
    { "name": "gaurav", "course": "js" },
    { "name": "ramu", "course": "csss" }
]



function enrollstudents(newstudent,callback) {
    setTimeout(() => {
        students.push(newstudent)
        callback();
        
    },1000);

}
function studentlist() {

setTimeout(() => {    
    students.forEach((Element) => {
        let elem = "";
        elem = `<li>${Element.name}</li>`;
        
        document.getElementById("list").innerHTML += elem;
    })
}, 4000);
}


let newstudent = { "name": "tushar", "course": "python" }


enrollstudents(newstudent ,studentlist);


