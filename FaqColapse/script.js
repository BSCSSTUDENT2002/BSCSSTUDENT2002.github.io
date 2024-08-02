const Answers=["Ans1","Ans2","Ans3","Ans4","Ans5"]
$('.q').each(function(){
    $(this).on("click",()=>{
        $(this).children().toggleClass('active')
        console.log($(this).html())
    })
})
