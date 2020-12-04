var count=0;
var ScreenSize=window.innerHeight;


document.getElementById("flexopen").onclick = flexview;
document.getElementById("cross").onclick = flexviewRev;
document.getElementById("TopOption").onclick = Topflexview;
window.onscroll = function(){HideTemp()}; // hide temp objects on scrolling


//back ground top in index   -------------17-10-20
document.getElementById("back").style.backgroundImage = "url(images/back.jpg)";
document.getElementById("back").style.backgroundSize = "100% 100%";
// back-------------------------


function HideTemp() {  //temp header view with search menu and also fix image at background
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
    document.getElementById("TempHead").style.opacity=0;
    document.getElementById("TopOption").style.opacity=1;
    document.getElementById('flex-box').style.top='10%';
    setTimeout(()=>{if(count==0){scrollTo(0,ScreenSize-30);}count=count+1;},200);}
   else{
    document.getElementById("TopOption").style.opacity=0;
    document.getElementById("TempHead").style.opacity=1;
    document.getElementById('flex-box').style.top='15%';
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
