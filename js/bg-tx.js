$(window).scroll(function(e) {

  let scrollSeviye = $(this).scrollTop();
  
  if(scrollSeviye>2400){
    scrollSeviye=2400;
  }
  
  let buyutme=(scrollSeviye/6000)+1;
 
  $('.arkaplan').css('-webkit-filter', 'blur('+scrollSeviye/120+'px)');
  $('.arkaplan').css('transform', 'scale('+buyutme+')');

});