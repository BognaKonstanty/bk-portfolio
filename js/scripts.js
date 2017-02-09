
$(document).ready(function(){

  $(".occur").fadeIn(3000, function() {
    $( ".occur-post" ).fadeIn(6000);
  });
  console.log("slogan jest widoczny!");
  return false;

});
  
/*$(document).ready(function() {

 $(window).scroll(function() {
     if ($(".section-hide").scrollTop() > 50) {
        $(".occur-post").addClass("test");
          } else {
      $(".occur-post").removeClass("test");
    }  
        });
        
    });*/

  


$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $(".section-hide").addClass("test");
    } else {
      $(".section-hide").removeClass("test");
    }
  });
});

/*$(document).ready(function(){
    if ($(".section-hide").scrollTop() > 50) {
      console.log("scroll>50");
        $("section-hide").animate({
            height: 'toggle'
        });
    } else {

    };
    });*/