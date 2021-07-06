
  $(".fa-bars").click(function(){
    
    $("ul").slideToggle();
    $(".options").slideToggle();
  });
  
  // Code Written Here For Switch Section Of index.html Page

  $(".switch-1").click(function(){
    
    $(".card-1,.card-2,.card-3,.card-4,.card-5,.card-6,.card-7,.card-8").show(600);
  });


  $(".switch-2").click(function(){
    
    $(".card-1,.card-3,.card-5,.card-7").hide(600);
    $(".card-2,.card-4,.card-6,.card-8").show(600);
    
  });

  $(".switch-3").click(function(){
    
    $(".card-3,.card-5,.card-7").hide(600);
    $(".card-1,.card-2,.card-4,.card-6,.card-8").show(600);
  
  });

  $(".switch-4").click(function(){

    $(".card-2,.card-4,.card-5").hide(600);
    $(".card-1,.card-3,.card-7,.card-6,.card-8").show(600);
  });
  // Code Written Here For Switch Section Of index.html Page


// Code Written Here For Form Section Of Aboutus.html Page
$('.about-form').on('click', function(e){
  e.preventDefault();
  $('.about-form').css('border-color','#6266ea');
});
// Code Written Here For Form Section Of Aboutus.html Page



// Code Written Here For Click Section Of work.html Page

$(".switch-01").click(function(){
    
  $(".card-01,.card-02,.card-03,.card-04,.card-05,.card-06").show(600);
});


$(".switch-02").click(function(){
  
  $(".card-02,.card-05,.card-06").hide(1000);
  $(".card-01,.card-03,.card-04").show();
  
});

$(".switch-03").click(function(){
  
  $(".card-04,.card-05").hide(600);
  $(".card-1,.card-02,.card-03,.card-06").show(600);

});

$(".switch-04").click(function(){

  $(".card-02,.card-03,.card-06").hide();
  $(".card-01,.card-04,.card-05").show(600);
});

$(".switch-05").click(function(){

  $(".card-01,.card-04,.card-05").hide();
  $(".card-02,.card-03,.card-06").show(600);
});
// Code Written Here For Click Section Of work.html Page


$(".windowup"). click( function() { $(window). scrollTop(0); }); 