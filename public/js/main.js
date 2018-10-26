$("#filemanager").on("click",function(){
    var x=$("#mainfilem").css("display");
    if(x==="none")
    {
    $("#mainfilem").css("display","block");}
    else
      {$("#mainfilem").css("display","none");}
});
$("#homeleftm").on("click",function(){
$("#mainfilemhome").css("display","block");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#documentsleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","block");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#uploadsleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","block");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#musicleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","block");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#picturesleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","block");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","none");
});
$("#videosleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","block");
$("#mainfilemtrash").css("display","none");
});
$("#trashleftm").on("click",function(){
$("#mainfilemhome").css("display","none");
$("#mainfilemdocuments").css("display","none");
$("#mainfilemuploads").css("display","none");
$("#mainfilemmusic").css("display","none");
$("#mainfilempictures").css("display","none");
$("#mainfilemvideos").css("display","none");
$("#mainfilemtrash").css("display","block");
});

$("#firefox").on("click",function(){
        if($(".ubuntu-terminal").css("display")==="none") {
            $(".ubuntu-terminal").css("display","block");
        } else {
            $(".ubuntu-terminal").css("display","none");
        }
});
$("#music").on("click", function(){
    if ($("#musicplayer").css("display")==="none"){
        $("#musicplayer").css("display","block");
    } else {
        $("#musicplayer").css("display","none");
    }
});

$("#clockbox").on("click",function(){
    if($('#underclock').css('display') == 'none') {
        $("#underclock").css("display","block");
    } else {
        $("#underclock").css("display","none");
    }
});
$("#topside").on("click",function(){
    if($('#undertopside').css('display') == 'none') {
        $("#undertopside").css("display","block");
    } else {
        $("#undertopside").css("display","none");
    }
});

$(document).ready(function() {
    $('#uploadForm').submit(function() {
        $(this).ajaxSubmit({
            error: function(xhr) {
                console.log(xhr.status);
            },
            success: function(response) {
                if(response!=="error") {
                    var ind = response.search(" ");
                    $("#mainfilemuploads").append("<li><button onclick='showTextarea(&#34;" + response.slice(ind+1,response.length) +"&#34;)'>"+ response.slice(0,ind) + "</button></li>");
                }
            }
    });
    return false;
    });    
});
