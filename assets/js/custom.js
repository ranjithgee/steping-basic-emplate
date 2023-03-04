$(document).ready(function(){
    $(document).on('scroll',function(){
        var scroll_pos = $(this).scrollTop();
        if(scroll_pos > 10){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    })
    var load_scroll_pos = $(document).scrollTop();
    if(load_scroll_pos > 10){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
    $('#burger').on('click',function(){
        $('header .menu_sec').toggleClass('active');
        $('.black_overl').toggleClass('active');
        if($('body').css('overflow-y') == 'hidden'){
            $('body').css('overflow-y','visible');
        }else{
            $('body').css('overflow-y','hidden');
        }
    })
    $(document).on('click',function(event){
        var target_class = event.target.classList[0];
        if(target_class == 'black_overl'){
            $('header .menu_sec').removeClass('active');
            $('.black_overl').removeClass('active');
            $('body').css('overflow-y','visible');
            $('#burger')[0].checked = false;
        }
    })
    $('.has_dropdown_li .has_dropdown').on('click',function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    })
    $('.has_deep_dropdown_li .has_deep_dropdown').on('click',function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    })
})