$(document).ready(function(){
	
	//STICKY MENU
	$(".js__services_section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});
	
	
	//MIXITUP (PORTFOLIO SECTION)
	var mixer = mixitup('.container');
	
	//SMOOTH SCROLL FOR IE/EDGE/SAFARI
	$("a").on('click', function(event){
		if(this.hash !== ""){
			event.preventDefault();
			var hash = this.hash;
			
			$('html, body' ).animate({
			scrollTop:$(hash).offset().top
			}, 800, function(){window.location.hash = hash;
			});
		}
	});
		
});
$(document).on('click', 'ul li', function(){
	$(this).addClass('active').siblings().removeClass('active');
	
});
function openNav(){
	document.getElementById("mynav").style.width = "100%";
}
function closeNav(){
	document.getElementById("mynav").style.width = "0%";
}