/**
 * Created by HP on 18.06.2016.
 */
$(document).ready(function(){
    $('.top-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });
    $(function() {
        $( "#mixes" ).accordion({
            heightStyle: "content"
        });
    });
    $(function() {
        $( "#cement" ).accordion({
            heightStyle: "content"
        });
    });
    $(function() {
        $( "#concrete" ).accordion({
            heightStyle: "content"
        });
    });
});

