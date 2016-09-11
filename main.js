//Listeners
var timer;
var timer2;

document.addEventListener("mousemove", function() {
	showProgramWheel(event);
	
	clearInterval(timer);
    clearInterval(timer2);
                          
	timer = setTimeout(function() {
    		hideProgramWheel(event);
	}, 3000);
});

document.addEventListener("mousedown", function() {
	showProgramWheel(event);
                          
    clearInterval(timer);
    clearInterval(timer2);
                          
    timer = setTimeout(function() {
                        hideProgramWheel(event);
                                             }, 3000);
});

$( window ).resize(function() {
  	formingLayout();
});

$( window ).load(function() {
  	formingLayout();
});

function live() {
    document.getElementById("videoStream").setAttribute("src", "https://www.youtube.com/embed/ujmFUjfRVsc?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0");
    document.getElementById("live").className="live";
}

function t1() {
    document.getElementById("videoStream").setAttribute("src", "https://www.youtube.com/embed/Ir2a7rBKxSY?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0");
    document.getElementById("live").className="vod";
}

function t2() {
    document.getElementById("videoStream").setAttribute("src", "https://www.youtube.com/embed/itrCC1FNVxM?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0");
    document.getElementById("live").className="vod";
}

function t3() {
    document.getElementById("videoStream").setAttribute("src", "https://www.youtube.com/embed/RZJLh2buUAM?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0");
    document.getElementById("live").className="vod";
}

//Functions
function showProgramWheel(e) {
	formingLayout();
	$("#showName").stop();
	$("#now").stop();
	$("#nowCanvas").stop();
	$("#showInfo").stop();
	$("#showEp").stop();
	
	$("#showName").fadeIn(150);
	$("#now").fadeIn(150);
	$("#nowCanvas").fadeIn(150);
	$("#showInfo").fadeIn(300);
	$("#showEp").fadeIn(450);
    
    var blurAmt = $("#videoStream").css("-webkit-filter");
    var blurVal = blurAmt.substring(0,6);
    if (blurVal == "blur(0" ) {
        $(function() {
          $({blurRadius: 0}).animate({blurRadius: 4}, {
                                     duration: 300,
                                     easing: 'swing', // or "linear"
                                     // use jQuery UI or Easing plugin for more options
                                     step: function() {
                                     console.log(this.blurRadius);
                                     $("#videoStream").css({
                                                           "-webkit-filter": "blur("+this.blurRadius+"px)",
                                                           "filter": "blur("+this.blurRadius+"px)"
                                                           });
                                     }
                                     });
          });
    $(function() {
      $({opacityPx: 1}).animate({opacityPx: 0.5}, {
                                 duration: 300,
                                 easing: 'swing', // or "linear"
                                 // use jQuery UI or Easing plugin for more options
                                 step: function() {
                                 console.log(this.opacityPx);
                                 $("#videoStream").css({
                                                       "opacity": this.opacityPx
                                                       });
                                 }
                                 });
      });
}

}

function hideProgramWheel(e) {
	$("#showName").stop();
	$("#now").stop();
	$("#nowCanvas").stop();
	$("#showInfo").stop();
	$("#showEp").stop();
	
	$("#showName").fadeOut(450);
	$("#now").fadeOut(450);
	$("#nowCanvas").fadeOut(450);
	$("#showInfo").fadeOut(300);
	$("#showEp").fadeOut(150);
    

    $(function() {
      $({blurRadius: 4}).animate({blurRadius: 0}, {
                                 duration: 300,
                                 easing: 'swing', // or "linear"
                                 // use jQuery UI or Easing plugin for more options
                                 step: function() {
                                 console.log(this.blurRadius);
                                 $("#videoStream").css({
                                                       "-webkit-filter": "blur("+this.blurRadius+"px)",
                                                       "filter": "blur("+this.blurRadius+"px)"
                                                       });
                                 }
                                 });
      });
    $(function() {
      $({opacityPx: 0.5}).animate({opacityPx: 1}, {
                                duration: 300,
                                easing: 'swing', // or "linear"
                                // use jQuery UI or Easing plugin for more options
                                step: function() {
                                console.log(this.opacityPx);
                                $("#videoStream").css({
                                                      "opacity": this.opacityPx
                                                      });
                                }
                                });
      });
}

function formingLayout() {
	var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	
	
	$("#now").css("color", "white");
	
    if (minutes < 10) {
        document.getElementById("now").innerHTML = hour + ":0" + minutes;
    }
    
    if (minutes >= 10) {
        document.getElementById("now").innerHTML = hour + ":" + minutes;
    }
    
	$("#showDetails").css("left", w/3);
	$("#showDetails").css("top", h/2 - 1.75*w/100);
	
	$("#now").css("top", h/2);
    if (hour < 10) {
        $("#now").css("left", w/4 - 5.25*w/100);
    }
    if (hour >= 10) {
        $("#now").css("left", w/4 - 7*w/100);
    }
	$("#nowCanvas").css("top", h/2 - 4*w/100);
	$("#nowCanvas").css("left", w/4 - 7.75*w/100);
	
    var c = document.getElementById("nowCanvas");
    var ctx = c.getContext("2d");
	c.width = 16*w/100;
	c.height = 16*w/100;
	ctx.clearRect(0, 0, 900, 900);
	ctx.beginPath();
	ctx.arc(7.5*w/100, 7.5*w/100, 7.5*w/100, 7.5*w/100, 7.5*w/100 * Math.PI);
    ctx.fillStyle = "#3a579d";
	ctx.fill();
    
}