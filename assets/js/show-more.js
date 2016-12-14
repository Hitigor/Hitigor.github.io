
/*
$(document).ready(function(){
    $(".show-more-button").click(function(){
        $(".comments-block-1").slideToggle("slow");
        $(this).toggleClass("active-comments-block-1");
    });
});*/

$(document).ready(function(){
    $('.show-more-button').click(function(){
        $(".comments-block-1").load('assets/js/more-comments.html').slideToggle("slow");
        $(this).toggleClass("active-comments-block-1");
        $('.show-more-button').toggleClass("show-more-button-hide");
    })
});