//console.log("main.js is in the house!");
//$("img").width(200);
$(document).ready(function(){

	$("img").on("dblclick",function(){

		$("img").width(200);

		$("h1").fadeOut();

		$(".booboo").slideUp();

		$("#rahul").hide();
	});

	// $("img").click(function(){
	// 	$("img").width(200);
	// });
});