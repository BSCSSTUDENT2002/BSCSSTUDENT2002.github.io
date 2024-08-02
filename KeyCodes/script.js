var flag=0
$('body').keydown((e)=>{
if(flag==0){
    $(".main").remove()
    $(".container").append("<div class='append'><div id='1'></div><div id='2'></div><div id='3'></div></div>")
    $('#1').text(e.key);
    $('#2').text(e.keyCode);
    $('#3').text(e.code);
    flag=1
}
else app(e)
$('#1, #2, #3').css({
    'color': 'gray',
    'border': '2px solid grey',
    'height': '50px',
    'width':'150px',
    'background-color': '#f1faee',  // 'text-direct'
});
$('#3').css('font-size','1.5rem')
})
function app(e){
    $('#1').text(e.key);
$('#2').text(e.keyCode);
$('#3').text(e.code);
flag=1;
}

