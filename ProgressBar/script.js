
var Next = $('.Next');
var Prev = $('Prev');
var index = 0;
var width = 0;
var Circle=document.querySelectorAll(".step")
function border(ind){
$(Circle[ind]).addClass("active")
}
Next.on("click", () => {
    if (index >= 0) {
        $(".Prev").removeAttr('disabled');
        index++;
    }

    width = index * 6; // Calculate width based on the updated index
    $('.container').css('--before-width', width + '%');

    $(".Prev").attr('disabled', index === 0 ? 'disabled' : null);
   border(index)
    if (index >= 3) {
        $(".Next").attr('disabled', 'disabled');
    }
});

$(".Prev").on("click", () => {
    if (index > 0) {
        $(".Next").removeAttr('disabled');
        index--;
    }

    width = index * 6; // Calculate width based on the updated index
    $('.container').css('--before-width', width + '%');
    $(Circle[index+1]).removeClass("active")

    $(".Prev").attr('disabled', index === 0 ? 'disabled' : null);
});


