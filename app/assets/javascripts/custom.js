var p = $("p");

p.css("font-style","italic");

$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle();
    });
});

var a = $("#animate");
a.hide();