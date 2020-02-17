$(document).ready(function() {
    $(window).scroll( function(i){
        $('.visibleOnScroll').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            //console.log(i," - ",parseInt(bottom_of_window) , parseInt(bottom_of_element) )
            if( parseInt(bottom_of_window) >= parseInt(bottom_of_element)){
                $(this).show(500);
            }
        }); 
    });
});