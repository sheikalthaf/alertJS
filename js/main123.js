document.body.insertAdjacentHTML('beforeend','<span class="alertJS"></span>');

document.querySelector('#addAlert').addEventListener("click", function(){
    var msg = document.querySelector('#Msg').value;
    addAlert(msg);
});


setInterval (function(){
    var parent = document.querySelectorAll('.alertJS .alertA');
    parent.forEach(function(e){
        var t1 = e.getAttribute("value");
        var t2 = new Date();
        var dif = (t2.getTime() - t1) / 1000;
        if(dif>=5){
           closeAlert(e);
        }
    });
},1000);

function closeAlert(e){
    e.classList.add("ani");
    setTimeout(function() {
        e.parentNode.removeChild(e)
    }, 400);
}

function addAlert(e, colr){
    var t1 = new Date();
    var alertDiv = document.querySelector('.alertJS');
    var span = document.createElement("span");
    var msg = "<div class=\"alertA ani dangBg\"><span class=\"closerr\">&times;</span><div>"+e+"</div></div>";
        alertDiv.insertAdjacentHTML('afterbegin',msg);
        setTimeout(function() {
            alertDiv.querySelectorAll('.alertA')[0].classList.remove('ani');
            var a = document.createAttribute("value");
            a.value = t1.getTime();
            alertDiv.querySelectorAll('.alertA')[0].setAttributeNode(a);
        }, 10);
}


document.querySelector(".closerr").addEventListener("click", function(){
    alert();
    closeAlert(this);
});
document.querySelector('.alertJS').addEventListener('click', function(event) {
    alert(event);
 // if (event.target.class= 'closerr') {
  //  alert(event.target.id);
  //}
});