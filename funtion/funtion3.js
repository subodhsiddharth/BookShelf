var count=0;
var ScreenSize=window.innerHeight;
var c=0;


document.getElementById("flexopen").onclick = flexview;
document.getElementById("cross").onclick = flexviewRev;
document.getElementById("TopOption").onclick = Topflexview;
window.onscroll = function(){HideTemp()}; // hide temp objects on scrolling


function HideTemp() {  //temp header view with search menu and also fix image at background
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
    document.getElementById("TempHead").style.opacity=0;
    document.getElementById("TopOption").style.opacity=1;
    document.getElementById('flex-box').style.top='10%';
    document.getElementById('profile').style.top='10%';
    }
else{
    document.getElementById("TopOption").style.opacity=0;
    document.getElementById("TempHead").style.opacity=1;
    document.getElementById('flex-box').style.top='15%';
    document.getElementById('profile').style.top='15%';
    }
if(document.body.scrollTop > ScreenSize || document.documentElement.scrollTop > ScreenSize){
    document.getElementById("scrollup").style.visibility='visible';
    }
else{
    document.getElementById("scrollup").style.visibility='hidden';
}
   
}


function flexview()  // flex of index of books to bring on screen
{
    document.getElementById('flex-box').style.visibility='visible';
    document.getElementById('flex-box').style.left=0;
}

function flexviewRev()  // flex to remove again
{
    document.getElementById('flex-box').style.visibility='hidden';
    
}

function Topflexview()  // flex of index of books to bring on screen from header 
{
    document.getElementById('flex-box').style.visibility='visible';
    document.getElementById('flex-box').style.left="87%";
}