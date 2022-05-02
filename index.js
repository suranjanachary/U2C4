// write js code here corresponding to index.html
// You should add submit event on the form
var newarray=JSON.parse(localStorage.getItem("schedule")) || [];
document.querySelector("#masaiForm").addEventListener("submit",clickme);
function clickme(){
    event.preventDefault()

    var dataobj={
        matchnumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        matchdate:masaiForm.date.value,
        matchvenue:masaiForm.venue.value,
    }
    console.log(dataobj)
    newarray.push(dataobj);
    localStorage.setItem("schedule",JSON.stringify(newarray))
    window.location.href="matches.html";
}

