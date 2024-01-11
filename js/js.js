


function test(el){
    if($(el).text()=="Test"){
        $(el).text("Cancel");
        $(".answerDiv").attr("onclick","answer(this)");
        $(".correctBox").addClass("correctAnswer").removeClass("correctBox")
    }else{
        $(el).text("Test");
        $(".answerDiv").attr("onclick","");
        $(".correctAnswer").addClass("correctBox").removeClass("correctAnswer");
        $(".wrongA").removeClass("wrongA");
    }

    var answerBox = document.getElementsByClassName('answerBox');
    for (let i2 = 0; i2 < answerBox.length; i2++) {
        const element = answerBox[i2];
        for (var i = element.children.length; i >= 0; i--) {
            element.appendChild(element.children[Math.floor(Math.random() * i)]);
        }
    }
}


function answer(el){
    $(el).attr("onclick","")
    $(el).siblings().attr("onclick","")
    if($(el).hasClass("correctAnswer")){
        $(el).addClass("correctBox").removeClass("correctAnswer");
    }else{
        $(el).addClass("wrongA");
        $(el).siblings(".correctAnswer").addClass("correctBox").removeClass("correctAnswer");
    }
}
for(i=0;i< $(".activeSec").find(".quesCount").length; i++){
    $($(".activeSec").find(".quesCount")[i]).text((i+1)+"/"+($(".activeSec").find(".quesCount").length ))
}
function goUp(el){
    window.scrollTo(0,0)
}
var d=0;
for(i=0; i<$(".ays_quiz_question").length; i++){
    var find=false;
    for(i2=0; i2<$(".ques").length; i2++){

        if($($(".ays_quiz_question")[i]).children("p").text()==$($(".ques")[i2]).children("p").text() && i!=i2){
            find=true;
            // continue;
            console.log(i+"-"+i2);
            console.log($($(".ays_quiz_question")[i]).children("p").text());
            console.log($($(".ques")[i2]).children("p").text());
            console.log(d++)
        }
    }
    // if(!find){
    //     console.log(i)
    //     console.log(d++)
    // }
}
// $(".boxMenu").on("click",function(){
//     $(".boxList").toggleClass("show");
// })
document.addEventListener("click",function(e){
var parentE=e.target.matches("[boxMenu]");
if(!parentE && e.target.closest("[list]")==null){
    $(".boxList").removeClass("show")
}
else if(parentE){
    $(".boxList").toggleClass("show");
}
})
function shoeSec(el){
    var classN=$(el).text();
    $("."+classN).addClass("activeSec").siblings().removeClass("activeSec");
    for(i=0;i< $(".activeSec").find(".quesCount").length; i++){
        $($(".activeSec").find(".quesCount")[i]).text((i+1)+"/"+($(".activeSec").find(".quesCount").length ))
    }
}
$("font").on("mouseover",function(){
    $(this).parent().text($(this).tex());
})
