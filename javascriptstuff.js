//File hooked with index.html
$(document).ready(function(){
  //Onclick stuff
  $('.twitterbtn').click(function(){
    twitter();
  })
  $('.youtubebtn').click(function(){
    youtube();
  })
  $('.githubbtn').click(function(){
    github();
  })
  $('.freecodecampbtn').click(function(){
    freecodecamp();
  })
  //Sticky navigation
  var navOffSet = $("nav").offset().top;;

  $("nav").wrap('<div class="nav placeholder"></div>');
  $(".nav-placeholder").height($("nav").outerHeight);

  $(window).scroll(function(){
      var scrollPos = $(window).scrollTop();

      if(scrollPos >= navOffSet){
        $("nav").addClass("fixed");
      }else{
        $("nav").removeClass("fixed");
      }
      if(scrollPos >= 300){
        $(".me").addClass("animated rotateIn");
        $(".aboutme").addClass("animated fadeInUp");
        $('.me').show();
        $('.aboutme').show();
      }else if(scrollPos < 300){
        $('.me').hide();
        $('.aboutme').hide();
      }else{
        $('.me').hide();
        $('.aboutme').hide();
      }
      $(".portfoliobk").addClass("animated slideInLeft");
  })
  var width = $('.justified').width();
  $('.justified').css('margin-left', '-' + (width / 2) + 'px');
})
function twitter(){
  window.open("https://twitter.com/opticodesoft");
}
function youtube(){
  window.open("https://www.youtube.com/channel/UCEgc6SMmlV-H6_qCPwh_m_Q");
}
function github(){
  window.open("https://github.com/Azbo400");
}
function freecodecamp(){
  window.open("https://freecodecamp.com/azbo400");
}
