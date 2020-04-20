
$(".header__burger").click(function(){
  $("body").toggleClass("js-overflow")
    $(".burger").toggleClass("active");
    $(".main-menu").toggleClass("active");
    
  
  });
  windowSize = $(window).width(); 
  console.log(windowSize);
  $(window).on('resize', function(event){
    windowSize = $(window).width(); 
    console.log(windowSize);
});
  $(".main-menu__nav > ul > li > span").on('click', function(){

  
    if(windowSize < 1025){
    if ($(this).hasClass("js-active")) {
        $(this).removeClass("js-active");
        $(this).next().removeClass("js-active");
        $(this).next().slideToggle();
        
    } else {
      
      $(this).closest(".main-menu__nav").find("ul.js-active").slideToggle();
      $(this).closest(".main-menu__nav").find("ul.js-active").removeClass("js-active");
      $(".main-menu__nav > ul > li > span").removeClass("js-active");
      $(this).addClass("js-active");
      $(this).next().addClass("js-active");
      $(this).next().slideToggle();
    }
    }  
  });


  
$(".page-content__button").click(function(){
  $(this).toggleClass("active")
    $(".page-content__list").slideToggle();

    
  
  });