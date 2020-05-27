// JavaScript Document
$(document).ready(function(){

$("#replay").click(function() {
  // not gonna work
$("#p1").removeClass("p1_ani");
$("#p2").removeClass("p2_ani");
$("#p3").removeClass("p3_ani");
$("#title").removeClass("title_ani");
	
setTimeout(function(){  
	$("#p1").addClass("p1_ani"); $("#p2").addClass("p2_ani");
	$("#p3").addClass("p3_ani");
	$("#title").addClass("title_ani");}, 1);
	

})
})