/*
* * * * * * * * * * * * * * * * *
* * * Created by : Thabet El Debuch
* * * Facebook : https://www.facebook.com/soene.doeb
* * * * * * * * * * * * * * * *
* */

/*active showPage function after 1 second*/
function showPage() {
    setTimeout(showPageFunc, 1000);
}
/*show page content and hide loading spinner*/
function showPageFunc() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

/*show the next audio and hide the current audio*/
var ID = 1;
function nextAudio() {
    ID++;
    if(ID===7) {//last stage
        alert('Check your speaker then try again');
        ID = 6;
    }
    //hide current stage
    document.getElementById('stage'+ (ID-1)).style.display='none';
    var current_audio = document.getElementById('aud'+(ID-1));
    current_audio.classList.add("d-none");
    //show next stage
    document.getElementById('stage'+ID).style.display='inline';
    var next_audio = document.getElementById('aud'+ID);
    next_audio.classList.remove("d-none");
}

/*set new cookies*/
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
/*get old cookies*/
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/*Save Test Result and output it */
function done() {
    setCookie("vTest",ID,3);
    result ();
}
/*Output The Result*/
function result (){
    var text,
        btn = "<a href='../index.html' class='btn btn-outline-primary'>Back to Main menu</a>";
    switch (ID) {
        case 1:
            text = "your age between 1-20 year";
            break;
        case 2:
            text = "your age between 20-24 year";
            break;
        case 3:
            text = "your age between 24-30 year";
            break;
        case 4:
            text = "your age between 30-40 year";
            break;
        case 5:
            text = "your age between 40-50 year";
            break;
        case 6:
            text = "Everyone can hearing this sound ಠ‿ಠ";
            break;
        default:
            text = "Error";
    }
    document.getElementById("result").innerHTML = text + btn;
    document.getElementById("result").classList.remove("d-none");
    document.getElementById("myDiv").classList.add("d-none");
}

/*output the saved result*/
function showOldResult(){
    var ID = parseInt(getCookie("vTest"));
    switch (ID) {
        case 1:
            alert("your age between 1-20 year");
            break;
        case 2:
            alert("your age between 20-24 year");
            break;
        case 3:
            alert("your age between 24-30 year");
            break;
        case 4:
            alert("your age between 30-40 year");
            break;
        case 5:
            alert("your age between 40-50 year");
            break;
        case 6:
            alert("Everyone can hearing this sound ಠ‿ಠ");
            break;
    }
}

/*show how to use page*/
function howToUse (){
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("howToUse").style.display = "block";
}
/*go from 'how To Use' to 'Main Menu'*/
function howToMenu() {
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("howToUse").style.display = "none";
}