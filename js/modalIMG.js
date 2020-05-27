//JavaScript Document

$(document).ready(function(){
	$(".click").click(function(){

		
		var modal = $("*").find(".modal");
		var modalImg = $("*").find("#img01");
		
		modal.css("display", "block");
		modalImg.attr("src", this.src);
		
		$("#myModal").click(function(){
		modal.css("display", "none");
		})
	})
	
	
		
});
