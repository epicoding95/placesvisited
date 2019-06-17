//Business Logic ----
function Information (){
  this.Myplaces = []
}

function Myplaces(places,landmarks,time,notes){
  this.places = places;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

var Seattle = new Myplaces ("Seattle", "Space Needle", 2019, "others" );
var LosAngeles = new Myplaces ("LosAngeles", "Hollywood", 2018, "others");
var Tennessee = new Myplaces ("Knoxville", "Neyland", 2017, "others");

//user Interface

$(document).ready(function(){
    $("#button1").click(function(){
    $("#seattle").text(Seattle.landmarks+ " " + Seattle.time + " " + Seattle.notes+ ".");
    event.preventDefault();
  });
    $("#button2").click(function(){
    $("#los-angeles").text(LosAngeles.landmarks+ " " + LosAngeles.time + " " + LosAngeles.notes+ ".");
    event.preventDefault();
  });
    $("#button3").click(function(){
    $("#Tennessee").text(Tennessee.landmarks+ " " + Tennessee.time + " " + Tennessee.notes+ ".");
    event.preventDefault();
  });
});
