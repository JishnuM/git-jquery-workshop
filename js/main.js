//console.log("main.js is in the house!");
//$("img").width(200);
$(document).ready(function(){

	$("li").on("click",function(){
			if($(this).hasClass("done")){
				$(this).removeClass("done");
			} else {
				$(this).addClass("done");
			}
			//$("li").addClass("done");
		});


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
I was here.