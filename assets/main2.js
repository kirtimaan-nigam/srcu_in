var channelName = ["SRCU Network", "Aaj Tak", "NASA Live TV", "DD News", "Sky News", "France 24 English", "India Today", "ABN Live | Telugu News Channel"];
var logo = ["channelLogo/channelLogo0.png", "channelLogo/channelLogo1.png", "channelLogo/channelLogo2.png", "channelLogo/channelLogo3.png", "channelLogo/channelLogo4.png", "channelLogo/channelLogo5.png", "channelLogo/channelLogo6.png", "channelLogo/channelLogo7.png"];
var info = ["Broadcasting Uttrakhand's one of the most popular regional News Channel exclusively on SRCU Network.", "AAJ TAK is a 24-hour Hindi news television channel.", "Get the latest updates on NASA missions, watch NASA TV live, and learn about our quest to reveal the unknown.", "DD News or Doordarshan News is a News TV channel. The News channel is controlled by the Ministry of Communications and Information Technology.", "Sky News is a 24-hour international, multi-media news operation based in Britain. It provides non-stop rolling news on television, online, and on a range of mobile devices", "Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America.", "India Today Television marks the entry of the nation's most credible name in journalism - India Today into news television. Powered by a future-ready look and backed with the 40 year legacy of the India Today brand, the channel addresses the news consumption habits of an evolved digital-savvy audience while staying true to the journalistic principles of the India Today Group.", "ABN Telugu News channel Live. ABN is the most popular Telugu News channel. Watch ABN News Channel For all Latest Statewide, National and International News."];
var showEp = ["nil", "nil", "nil", "nil", "nil", "nil", "nil", "nil"];
var stream = ["https://www.youtube.com/embed/ujmFUjfRVsc?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0", "https://www.youtube.com/embed/E9QXO5m_iS0?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0", "https://www.youtube.com/embed/njCDZWTI-xg?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0", "https://www.youtube.com/embed/pangmDyTtwU?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0", "https://www.youtube.com/embed/y60wDzZt8yg?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0", "https://www.youtube.com/embed/gq11un3xqsA?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0", "https://www.youtube.com/embed/9kct3FSQyvE?autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0", "https://www.youtube.com/embed/QzQnFY6CioA?t=6m10s&autohide=1&autoplay=1&modestbranding=0&showinfo=1&controls=0&rel=0&fs=0"];
var shows = ["1", "nil", "nil", "nil", "nil", "nil", "nil", "nil"];




function channelClicked(id) {
    $("#channels").fadeOut();
    $("#container").fadeIn();
    
    changeName(id);
    changeLogo(id);
    changeDescription(id);
    changeStream(id);
    changeShow(id);
    changeShowEp(id);
}

function changeName(id) {
    $("#showName").html(channelName[id]);
}

function changeLogo(id) {
    document.getElementById("channelLogoImg").setAttribute("src", logo[id]);
}

function changeDescription(id) {
    $("#showInfo").html(info[id]);
}

function changeStream(id) {
    document.getElementById("videoStream").setAttribute("src", stream[id]);
    document.getElementById("live").setAttribute("onmousedown", "live(" + id +")");
}

function changeShow(id) {
    if (shows[id] == "nil") {
        $("#showsButton").html("");
    } else {
        document.getElementById("showsButton").setAttribute("onmousedown", "showsbuttonclicked(" + shows[id] + ");");
    }
}

function changeShowEp(id) {
    if (shows[id] == "nil") {
        $("#showEp").html("");
    } else {
        $("#showEp").html('<img id="1" onmousedown="t1();" class="thumb" src="shows/sh1/t1.png"/><img id="2" onmousedown="t2();" class="thumb" src="shows/sh1/t2.png"/><img id="3" onmousedown="t3();" class="thumb" src="shows/sh1/t3.png"/>');
    }
}

function live(id) {
    changeStream(id);
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

function showHUD() {
    layout();
    $("#showsButton").stop();
    $("#backButton").stop();
    $("#channelLogo").stop();
    $("#live").stop();
    $("#showName").stop();
    $("#showInfo").stop();
    $("#showEp").stop();
    
    $("#channelLogo").fadeIn(100);
    $("#live").fadeIn(100);
    $("#showsButton").fadeIn(200);
    $("#backButton").fadeIn(200);
    $("#showName").fadeIn(250);
    $("#showInfo").fadeIn(300);
    $("#showEp").fadeIn(350);
    
    $("#menu").fadeOut();
    $("#close").fadeIn();
    
    var blurAmt = $("#videoStream").css("-webkit-filter");
    var blurVal = blurAmt.substring(0,6);
    if (blurVal == "blur(0" ) {
        $(function() {
          $({blurRadius: 0}).animate({blurRadius: 5}, {
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

function hideHUD() {
    $("#showsButton").stop();
    $("#backButton").stop();
    $("#channelLogo").stop();
    $("#live").stop();
    $("#showName").stop();
    $("#showInfo").stop();
    $("#showEp").stop();
    
    $("#channelLogo").fadeOut(350);
    $("#live").fadeOut(350);
    $("#showsButton").fadeOut(250);
    $("#backButton").fadeOut(250);
    $("#showName").fadeOut(200);
    $("#showInfo").fadeOut(150);
    $("#showEp").fadeOut(100);
    
    $("#menu").fadeIn();
    $("#close").fadeOut();
    
    $(function() {
      $({blurRadius: 5}).animate({blurRadius: 0}, {
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

function layout() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    $("#showDetails").css("left", w/3);
    $("#showDetails").css("top", h/2 + 1.3*w/100);
    
    $("#channelLogo").css("left", w/3 - 12*w/100);
    $("#channelLogo").css("top", h/2 - 3*w/100);
    
    $("#live").css("left", w/3 - 1.35*w/100);
    $("#live").css("top", h/2 - 4*w/100);
    
    $("#showsButton").css("left", w/3 - 10*w/100);
    $("#showsButton").css("top", h/2 + 8.75*w/100);
    
    $("#backButton").css("left", w/3 - 19.75*w/100);
    $("#backButton").css("top", h/2 - 1*w/100);
}

function winResized() {
    layout();
}

function backButtonClicked() {
    $("#container").fadeOut();
    $("#channels").fadeIn();
    hideHUD();
}

function backButtonHover() {
    $("#backButtonText").fadeIn(150);
}

function backButtonMouseExit() {
    $("#backButtonText").fadeOut(150);
}

function showsButtonClicked(id) {
    
}

function showsButtonHover() {
    $("#showsButtonText").fadeIn(150);
}

function showsButtonMouseExit() {
    $("#showsButtonText").fadeOut(150);
}

function enterFullscreenButtonClicked() {
    var elem = document.getElementById("viewer");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    document.getElementById("fullscreen").setAttribute("onmousedown", "exitFullscreenButtonClicked();");
    document.getElementById("fullscreen").setAttribute("src", "icons/exitfullscreenButton.png");
}

function exitFullscreenButtonClicked() {
    var elem = document.getElementById("viewer");
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    document.getElementById("fullscreen").setAttribute("onmousedown", "enterFullscreenButtonClicked();");
    document.getElementById("fullscreen").setAttribute("src", "icons/fullscreenButton.png");
}

function liveHover() {
    $("#liveText").fadeIn(150);
}

function liveMouseExit() {
    $("#liveText").fadeOut(150);
}