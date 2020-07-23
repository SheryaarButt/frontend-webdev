$(document).ready(function(){
    $('article')
        .on('mouseenter',function() {
            $(this).addClass('active');
        })
        .on('mouseleave',function() {
            $(this).removeClass('active');
        });

    $('#button1').on('click',function(){
        $('#target').prepend($('#text').val())
    });
    $('#button2').on('click',function(){
        $('#target').append($('#text').val())
    });
    $('#button3').on('click',function(){
        $('#target').html($('#text').val())
    });

    $(this).on('contextmenu',function(){
        return false;
    });

    $(this).on('mousedown',function(event){
        event.stopPropagation();
        let menu = $('#context');
        let imgItem = $('#context a.img')
        console.log(imgItem);
        if (event.which === 3) {
            if($(event.target).hasClass('image')){
                imgItem.removeClass('hidden');
            } else {
                imgItem.addClass('hidden');
            }
            menu.css({
                top: event.pageY,
                left: event.pageX,
                display: 'inline-block'
            });
        } else {
            menu.fadeOut();
        }
    });

})