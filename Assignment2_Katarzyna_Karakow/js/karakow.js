var myFirstName;
var myLastName;
var myStudentId;
var myUserName;
var myProgram;
var myHomeCountry;
var cList = new Array();
var aList = new Array();
var rowID;
var catType;
var catLogo;

//Category class for 'Categories' data
class Category {
    constructor(cattype, logo) {
        this.cattype = cattype;
        this.logo = logo;
    }
}

class Animalas{
    constructor(animal, category, scientific, colors, photoDepiction) {
        this.animal = animal;
        this.category = category;
        this.scientific = scientific;
        this.colors = colors;
        this.photoDepiction = photoDepiction;
    }
}

$(document).ready(function (){

    //console.log("in doc ready"); 

    // ajax call
    $.ajax({
        type: "GET",
        url: "data/A2-JSON.json",
        dataType: "json",
        success: loadJSON,
        error: function(e) {alert(`${e.status} - ${e.statusText}`);}
    }); // end of ajax call

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

function loadJSON(data){
    // console.log(data);
    // declare variables and populate from LS
    myFirstName = data.A2Personal.FirstName;
    myLastName = data.A2Personal.LastName;
    myStudentId = data.A2Personal.StudentID;
    myUserName = data.A2Personal.UserName;
    myProgram = data.A2Personal.Program;
    myHomeCountry = data.A2Personal.HomeCountry;
   
    // populate Category lis - cList
    category = data.Categories;
    for (let x of category) {
        cList.push(new Category(x.cattype, x.logo));
    }
    //console.log(cList);


    // populate AnimalDetails List - aList
    animal = data.AnimalDetails;
    for (let a of animal) {
        aList.push(new Animalas(a.animal, a.category, 
            a.scientific, a.colors, a.photoDepiction));
    }

    bulidView(data);  

} // end of loadJSON

function bulidView(data) {

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
    ) ;

    $("#catList").html("");
    for (let x=0; x<cList.length; x++) {
        $("#catList").append(
            `
            <li id='${x}'>
            <a href='pages/karakow_p2.html' class='btnLook'>
                ${cList[x].cattype} </a>

            </li>
            <img src='images/${cList[x].logo}' width='100' heigth='75'>    

            `
        );
    }    
} // end of bulid view



// Save data to local storage
$(document).on("click", "#catList >li", function () {
    localStorage.setItem(
        "rowID",
        $(this).closest("li").attr("id")
    );
    localStorage.setItem("cList", JSON.stringify(cList));
    localStorage.setItem("aList", JSON.stringify(aList));
    localStorage.setItem("FirstName", myFirstName);
    localStorage.setItem("LastName", myLastName);
    localStorage.setItem("StudentID", myStudentId);
    localStorage.setItem("UserName", myUserName);
    localStorage.setItem("Program", myProgram);    
    localStorage.setItem("HomeCountry", myHomeCountry); 
});



