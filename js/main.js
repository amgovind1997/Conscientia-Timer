(function($) {
"use strict";
jQuery.fn.is_exist = function(){return this.length>0;}
function contentCenter($content){
  var content = $($content),
  half = content.outerHeight() / 2,
  calc = "calc(50% - "+half+"px)";
  content.css({
    top: calc
  });
}
/**
 * START DOCUMENT READY EVENT
 * @param event
 */
$(function() {
if ( $('.jquery-center').is_exist() ) {
  contentCenter('.jquery-center');
}
function contentToggle($this){

  var self    = $this,
    details   = $('#dhanak-details'),
    content   = $('#dhanak-animate-area'),
    close     = $('#dhanak-close-content'),
    hide      = content.data('hide'),
    animation = details.data('animation');

  if ( self.hasClass('dhanak-animate-open') ) {
    close.hide(0);
    self.removeClass('dhanak-animate-open');
    content.removeClass(hide).addClass(animation).addClass('mrs-active');
    details.removeClass(animation).addClass(hide).removeClass('mrs-content-appear').addClass('mrs-conent-disapear');
  } else {
    close.delay(600).show(0);
    self.addClass('dhanak-animate-open');
    content.removeClass(animation).addClass(hide);
    details.removeClass(hide).addClass(animation).addClass('mrs-active').addClass('mrs-content-appear').removeClass('mrs-conent-disapear');
  }

}
function scrollToDiv(e){
  var href = "#dhanak-details",
      offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500);
    e.preventDefault();
}
$(document).on("click", ".learn_more", function(e){
  e.preventDefault();
  var self    = $(this);

  if(window.matchMedia("(min-width: 1025px)").matches){
    contentToggle( self );
  } else {
    scrollToDiv(e);
  }
});
function clickToSlide($this){  
  var self    = $this,
    content   = $('#dhanak-details'),
    col   = $('.dhanak-col-content'),
    close     = $('#dhanak-close-content-slide'),
    animation = content.data('animation');
  if ( self.hasClass('dhanak-animate-open') ) {
    close.hide(0);
    self.removeClass('dhanak-animate-open');
    content.removeClass(animation);
    col.removeClass('mrs-default-content-off');
  } else {
    close.delay(600).show(0);
    self.addClass('dhanak-animate-open');
    content.addClass(animation);
    col.addClass('mrs-default-content-off');
  }
}
$(document).on("click", ".dhanak-content-view", function(e){
  e.preventDefault();
  var self = $(this);
  if(window.matchMedia("(min-width: 1025px)").matches){
    clickToSlide( self );
  } else {
    scrollToDiv(e);
  }
});
$(document).on("click", "#dhanak-close-content", function(e){
  e.preventDefault();
  var self    = $(this),
    details   = $('#dhanak-details'),
    btn       = $('.dhanak-animate-btn'),
    content   = $('#dhanak-animate-area'),
    close     = $('#dhanak-close-content'),
    hide      = content.data('hide'),
    animation = details.data('animation');
    close.hide();
    btn.removeClass('dhanak-animate-open');
    content.removeClass(hide).addClass(animation).addClass('mrs-active');
    details.removeClass(animation).addClass(hide).removeClass('mrs-content-appear').addClass('mrs-conent-disapear');  
});
$(document).on("click", "#dhanak-close-content-slide, .dhanak-col-content.mrs-default-content-off", function(e){
  e.preventDefault();
  var self    = $(this),
    details   = $('#dhanak-details'),
    btn       = $('.dhanak-content-view'),
    close     = $('#dhanak-close-content-slide'),
    col   = $('.dhanak-col-content'),
    animation = details.data('animation');
    close.hide();
    btn.removeClass('dhanak-animate-open');
    details.removeClass(animation);
    col.removeClass('mrs-default-content-off');  
});

function resize_logo(){
  if($('#logo').outerHeight()+$('#text_logo_image').height()>$('#logo_container').height()){
    $('#logo_container').css('flexDirection','row');
    var w = $('#logo_image').width();
    if(w*2.5>230){
      w = 76.67;
    }
    $('#logo_image').css('height',w*2.5);
  }
  else{
    if($('#change_display').css('display')=='block'){
      $('#logo_container').css('flexDirection','row');
    }
    else{
      $('#logo_container').css('flexDirection','column');
      if($(window).height()/4 >= 200){
        $('#logo_image').css('height',$(window).height()/4);
      } 
      else{
        $('#logo_image').css('height',200);
      }
    }
    
  }
}
resize_logo();
if($('#change_display').css('display')=='block'){
  $('#triangle_canvas').css('width','100%');
  $('#triangle_canvas canvas').css('width','100%');
  resize_logo();
}
}); // end document ready
/**
 * START WINDOW LOAD EVENT
 * @param event
 */
$(window).on("load", function(){
$(".dhanak-loading-screen").delay(100).fadeOut('slow');
if ( $('.jquery-center').is_exist() ) {
  contentCenter('.jquery-center');
}
}); // end window load
/**
 * START WINDOW RESIZE EVENT
 * @param event
 */
$(window).on("resize", function(){
  if ( $('.jquery-center').is_exist() ) {
    contentCenter('.jquery-center');
  }
  function resize_logo(){
    if($('#logo').outerHeight()+$('#text_logo_image').height()>$('#logo_container').height()){
      $('#logo_container').css('flexDirection','row');
      var w = $('#logo_image').width();
      if(w*2.5>230){
        w = 76.67;
      }
      $('#logo_image').css('height',w*2.5);
    }
    else{
      if($('#change_display').css('display')=='block'){
        $('#logo_container').css('flexDirection','row');
      }
      else{
        $('#logo_container').css('flexDirection','column');
        if($(window).height()/4 >= 200){
          $('#logo_image').css('height',$(window).height()/4);
        } 
        else{
          $('#logo_image').css('height',200);
        }
      }
      
    }
  }
  resize_logo();
});
})(jQuery); // end anonymous function
var countDownDate = new Date("Sep 28, 2018 16:00:00").getTime();
var now = new Date().getTime();		
var distance = countDownDate - now;		
var seconds = Math.floor(distance / (1000));
$('#data-remaining-sec').attr('data-remaining-sec',seconds);
$('#bugs_bunny').css('left',$('#tagline').offset().left);
//Colorful Balls
const w = $('#change_display').width();
const h = $('#change_display').height();
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const numBalls = 100;
const balls = [];
const left = [];
for (var i = 0; i < numBalls; i++) {
var ball = document.createElement("div");
ball.classList.add("ball");
ball.style.background = colors[Math.floor(Math.random() * colors.length)];
left[i] = Math.floor(Math.random() * w);
ball.style.left = left[i] + 'px';
ball.style.top = Math.floor(Math.random() * h) + 'px';
ball.style.transform = 'scale(' + Math.random() +')';
ball.style.width = Math.random() + 'em';
ball.style.height = ball.style.width;		
balls.push(ball);
document.body.appendChild(ball);
}
// Keyframes
var fontSize = parseFloat($('html').css('font-size'));
balls.forEach(function(el, i, ra){
		var to = {
			x: Math.random() * (i % 2 === 0 ? -11 : 11),
			y: Math.random() * 12
		};
		if(to.x > 0 && left[i] + to.x * fontSize + 50 >= w){
			el.style.display = 'none';
		}
		var anim = el.animate(
			[
			{ transform: "translate(0, 0)" },
			{ transform: 'translate(' + to.x +'rem, ' + to.y + 'rem)' }
			],
			{
			duration: (Math.random() + 1) * 2000, // random duration
			direction: "alternate",
			fill: "both",
			iterations: Infinity,
			easing: "ease-in-out"
			}
		);
});
