$(function() {
    $('.link-note').hide()
    $('.stat-links-container').hide()
    
    $('.ShortenLink').click(function() {
        if($(this).val() == "") {
            $('.link-note').show(300)
            $('.stat-links-container').show(300)
            $(this).addClass('input-val')
        }
    })
    $('.ShortenLink').keyup(function() {
        $('.link-note').hide(300);
        if($('.ShortenLink').val() == "") {
            $('.link-note').show(300)
        }
    })
    
    $('#shorten').click(function(e) {
        if($('.ShortenLink').val() == ""){
            e.preventDefault()
            $('.link-note').show(300)
            $('.stat-links-container').show(300)
            $('.shortenLink').addClass('input-val')
        } else {
            $('.link-note').hide(300)
            $('.stat-links-container').hide(300)
            $('.shortenLink').removeClass('input-val')
        }
    })
    $('.copy').click(function() {
        $('.copy').removeClass('input-purple')
        $('.copy').text('copy')
        $(this).addClass('input-purple')
        $(this).text('copied!')
    })
    
})
