$(function() {
    $("#card").flip();
    $(".daniel__card__buttom").on("click", function(){
        $("#card").flip('toggle');
    })
})