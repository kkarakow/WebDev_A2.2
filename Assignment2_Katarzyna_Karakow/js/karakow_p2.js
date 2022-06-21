var myFirstName;
var myLastName;
var myStudentId;
var myUserName;
var myProgram;
var myHomeCountry;

$(document).ready(function (){

    myFirstName = localStorage.getItem("FirstName");
    myLastName = localStorage.getItem("LastName");
    myStudentId = localStorage.getItem("StudentID");
    myUserName = localStorage.getItem("UserName");
    myProgram = localStorage.getItem("Program");
    myHomeCountry = localStorage.getItem("HomeCountry");

    rowID = localStorage.getItem("rowID");
    cList = JSON.parse(localStorage.getItem("cList"));
    aList = JSON.parse(localStorage.getItem("aList"));

    $("#cName").html(
        `<h3>Category: ${cList[rowID].cattype}</h3>`
    );
            
    loadAnimals(cList[rowID], aList);
    

    $("#headerMyInfo").html(
        `
        SYST24444 Assignment 2 for <br>${myFirstName} ${myLastName}
        / ${myStudentId} / ${myUserName}
        <hr>
        `
        );

    $("#footerMyInfo").html(
        `
        <hr>
        My Sheridan Program : ${myProgram} <br>
        My Home Country : ${myHomeCountry}
        `
        ); 
  

    $("#headerMyInfo").css(
        {"color": "#F0EAD2", 
        "font-family": "Arial",
        "font-size": "15px",
        "text-align": "center"}
    );

    $("#footerMyInfo").css(
        {"color": "#F0EAD2", 
        "font-family": "Arial",
        "font-size": "15px",
        "text-align": "center"}
    );


}); // end of doc ready

function loadAnimals(c, aList){
    $("#infoList").html("");
    for (let a of aList) {
        if (c.cattype == a.category) {
            $("#infoList").append(
                `
                <tr>
                <td><p>Name: ${a.animal}<br>
                Category: ${a.category}<br>
                Scientific: ${a.scientific}<br>
                Colors: ${a.colors}<br>
                </p></td>
                <td><img src='${a.photoDepiction}' width='100'></td>
                </tr>
                `
                );
    
            }
        }
}
function goToIndex() {
	location.assign("../index.html");
}