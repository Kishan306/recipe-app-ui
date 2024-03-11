// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
//     if(menu.classList.contains('hidden')){
//         menu.classList.remove('hidden');
//     }else{
//         menu.classList.add('hidden');
//     }
// })

$(document).ready(function() {
    $("#burger").click(function(){
        if($("#menu").hasClass("hidden")){
            $("#menu").removeClass("hidden");
        }else{
            $("#menu").addClass("hidden");
        }
    });

    $("#load-more").click(function() {
        if($(".popular-more").hasClass("hidden")){
            $(".popular-more").removeClass("hidden");
            $(".popular-more").slideDown(1000);
            $("#load-more").text("show less");
            // $("#load-more").fadeOut();
        }else{
            $(".popular-more").addClass("hidden");
            $("#load-more").text("load more");
            $(".popular-more").slideUp(1000);
        }
        // $(".popular-more").slideToggle(1000);
    })
})