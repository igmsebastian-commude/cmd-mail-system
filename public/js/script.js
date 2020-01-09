function sidebar_submenu() {
	$('.dropdown').on('click', function(){
		$(this).find('.submenu').fadeToggle();
		if($(this).hasClass('js-dropdown')){
			$(this).removeClass('js-dropdown');
		}
		else{
			$(this).addClass('js-dropdown');
		}
	});
}

function viewport(){
	var _ua = (function(u){
	  return {
	    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
	      || u.indexOf("ipad") != -1
	      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
	      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
	      || u.indexOf("kindle") != -1
	      || u.indexOf("silk") != -1
	      || u.indexOf("playbook") != -1,
	    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
	      || u.indexOf("iphone") != -1
	      || u.indexOf("ipod") != -1
	      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
	      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
	      || u.indexOf("blackberry") != -1
	  }
	})(window.navigator.userAgent.toLowerCase());
	if(_ua.Tablet){
		//for this code only apply tablet
		$("meta[name='viewport']").attr('content', 'width=1100');
	}
}

function clickableRow(){
    $(".clickableRow").click(function() {
        window.location = $(this).data("href");
    });
}

function configCategory() {
	if ($(".js-configNav").length) {
		$('.configNav__item').click(function () {
			$('.configNav .td .configNav__item').removeClass('active');
			$(this).addClass('active');
			$('.section__config').removeClass('active');
			$('.section__config').removeClass('visible');
		    var configcat = $(this).attr("id");
	    	if(configcat=="configNav-details") {
				$('#config-details').addClass('active');
				setTimeout(function(){
					$('#config-details').addClass('visible').delay(1500);
				}, 1500);
			}
	    	if(configcat=="configNav-field") {
				$('#config-field').addClass('active');
				setTimeout(function(){
					$('#config-field').addClass('visible').delay(1500);
				}, 1500);
			}
	    	if(configcat=="configNav-userlink") {
				$('#config-userlink').addClass('active');
				setTimeout(function(){
					$('#config-userlink').addClass('visible').delay(1500);
				}, 1500);
			}
	    	if(configcat=="configNav-security") {
				$('#config-security').addClass('active');
				setTimeout(function(){
					$('#config-security').addClass('visible').delay(1500);
				}, 1500);
			}
		});
	}
}

$(function(){
	sidebar_submenu();
	viewport();
	clickableRow();
}); // ready





$(window).on('load', function(){
}); // load





$(window).on('resize', function(){
}); // resize





$(window).scroll(function(){
}); // scroll





$(window).on('load resize', function(){
}); // load resize
