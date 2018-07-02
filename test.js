
$(document).ready(function(){

	$(".toggle-sidebar").click(function(){
		if(!$("#sidebar").is(":visible")){
			$("#content").css("width","70%");
		}
		$("#sidebar").animate({width:'toggle'},350,function(){
		if($("#sidebar").is(":visible")){
			$("#content").css("width","70%");
		}else{
			$("#content").css("width","100%");
		}
		});
	});

	$("#mobile").click(function(){
		$("ul#menu").toggle();
	});

});
