

$('.container').on('dblclick', (e) => {
    $('.Heart').css('left', e.pageX);
    $('.Heart').css('top', e.pageY);
    $('.Heart').addClass('animation');
    // ... other code
    setTimeout(()=>{
        $('.Heart').removeClass('animation')
    },800)

})
