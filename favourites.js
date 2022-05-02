// write js code here corresponding to favourites.html
var favarray=JSON.parse(localStorage.getItem("favourites"))
displaydata=(favarray);

function displaydata(favarray)
{
    favarray.forEach(function(el,index)
    {

        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=el.matchnumber;

        var td2=document.createElement("td");
        td2.innerText=el.teamA;

        var td3=document.createElement("td");
        td3.innerText=el.teamB;

        var td4=document.createElement("td");
        td4.innerText=el.matchdate;

        var td5=document.createElement("td");
        td5.innerText=el.matchvenue;

        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.addEventListener("click", function(){
            clickme(el,index)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
        
    })

}
function clickme(el,index){
    var removedata=JSON.parse(localStorage.getItem("favourites"))
    removedata.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favarray));
    window.location.reload();
}