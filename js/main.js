
function alertInterval(){
    var interval = setInterval (function(){
        var ci = 0;
        $('.alertJS .alertA').each(function(e){
            var t1 = $(this).attr("value");
            var t2 = new Date();
            var dif = (t2.getTime() - t1) / 1000;
            if(dif>=5){
            closeAlert(this);
            }
            ci++;
        });
        //alert(ci);
        if(ci<1)
            clearInterval(interval);
    },1000);
}

function closeAlert(e){
    $(e).addClass('ani');
    setTimeout(function() {
        $(e).remove();
    }, 400);
}

function alertJS(e, colr){
    var t1 = new Date();
    var parent = $('.alertJS');
    var msg = "<div class=\"alertA ani\"><span class=\"closerr\">&times;</span><div>"+e+"</div></div>";
        parent.prepend(msg);
        setTimeout(function() {
            var NewAlert = parent.find('.alertA:first-child');            
            NewAlert.attr("value",t1.getTime());
            if(colr==0){
                NewAlert.addClass("dangBg")
            }
            else if(colr==1){
                NewAlert.addClass("succBg")
            }
            else{
                NewAlert.addClass("infoBg")
            }
            NewAlert.removeClass('ani');
        }, 10);
        alertInterval();
}