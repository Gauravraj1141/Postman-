let timer;

let btnreset = false;

setInterval(() => {

    let date = new Date

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    // pm/am modification

    let xm;
    if (hour > 12) {
        xm = "PM";
    } else {
        xm = "AM"
    }


    // hour modify
    if (hour > 12) {
        hour = hour - 12
    }

    if (hour.toString().length < 2) {
        hour = `0${hour}`
    }

    // minute modification

    if (minute.toString().length < 2) {
        minute = `0${minute}`
    }
    // second modification

    if (second.toString().length < 2) {
        second = `0${second}`
    }

    // we acess wrapper for give time in h1 

    let wrapper = document.getElementsByClassName("wrapper")
    let h1 = wrapper[0].firstElementChild.nextElementSibling
    h1.innerHTML = `${hour}:${minute}:${second} ${xm}`

    if (hour == 05 && minute == 41 && second == 50 && xm) {


        document.getElementById('myAudio').play();
        console.log("skks")
    }

    // we add audio in alarm 
    if (timer == `${hour}:${minute} ${xm}`) {
        document.getElementById('myAudio').play();
    }

    

}, 100);




// we give hour for set alarm by the grab id and after we add innnerhtml

let selecthour = document.getElementById("selecthour")
let htmlhour = "";
for (let index = 0; index < 13; index++) {

    if (index < 10) {
        index = `0${index}`;
    }

    htmlhour += `<option id="hourvalue" value="Hour" selected hidden>Hour</option>
    <option value=${index}>${index}</option>`

    selecthour.innerHTML = htmlhour;
}

// we give minute for set alarm by the grab id and after we add innnerhtml

let selectminute = document.getElementById("selectminute")

let htmlminute = "";

for (let index = 0; index < 61; index++) {

    if (index < 10) {
        index = `0${index}`
    }

    htmlminute += `<option value="Minute" selected hidden>Minute</option>
    <option value=${index}>${index}</option>`

    selectminute.innerHTML = htmlminute;

}



// we got btn for set alarm and add event on it
let setalarm = document.getElementById("setalarm")
setalarm.addEventListener("click", alarm)


function alarm() {
   // now we add in disable class in content 
   let content = document.getElementById("content")

    if(btnreset){
        timer = ""; // we empty the timer
        document.getElementById('myAudio').pause();
        content.classList.remove("disable");
        setalarm.innerText  = "Set Alarm"
        return btnreset = false; //we again false this btnreset
    }

    // we take all elements which have our input for set alarm
    let hourvalue = document.getElementById("selecthour")
    let minutevalue = document.getElementById("selectminute")
    let xmvalue = document.getElementById("selectxm")

    let time = `${hourvalue.value}:${minutevalue.value} ${xmvalue.value}`

    // now write the logic of it for set alarm 

    // we again take time here 
    let date = new Date

    let hour = date.getHours()
    let minute = date.getMinutes()


    let xm;
    if (hour > 12) {
        xm = "PM";
    } else {
        xm = "AM"
    }

    if (hour > 12) {
        hour = hour - 12
    }

    if (hour.toString().length < 2) {
        hour = `0${hour}`
    }

    if (minute.toString().length < 2) {
        minute = `0${minute}`
    }
    // now logic for our alrm 
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM") ){

        alert("please choose correct time.")
    }

    else {
        timer = time;
        btnreset = true;
1
     

        // we add this disable class it disable all the select
        content.classList.add("disable")

        // now we add clear alarm in alarm btn
        setalarm.innerText = "Stop Alarm"

    }
}

