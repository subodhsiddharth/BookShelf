var count=0;
var ScreenSize=window.innerHeight;
var c=0;


ActiveBook();
document.getElementById("flexopen").onclick = flexview;
document.getElementById("cross").onclick = flexviewRev;
document.getElementById("TopOption").onclick = Topflexview;
document.getElementById("RefBookStore").onclick = RefBookStore;
document.getElementById("RefProfile").onclick = RefProfile;
document.getElementById("TopOption").onclick = Topflexview;
window.onscroll = function(){HideTemp()}; // hide temp objects on scrolling
document.getElementById("logo").onmouseenter = Bigheader;//mouse enter header header become big


//back ground top in index   -------------17-10-20
document.getElementById("back").style.backgroundImage = "url(images/back.jpg)";
document.getElementById("back").style.backgroundSize = "100% 100%";
// back-------------------------


function HideTemp() {  //temp header view with search menu and also fix image at background
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
    document.getElementById("TempHead").style.opacity=0;
    document.getElementById("TopOption").style.opacity=1;
    document.getElementById('flex-box').style.top='10%';
    setTimeout(()=>{if(count==0){scrollTo(0,ScreenSize);count=count+1;}},400);
    }
else{
    document.getElementById("TopOption").style.opacity=0;
    document.getElementById("TempHead").style.opacity=1;
    document.getElementById('flex-box').style.top='15%';
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

function ActiveBook()
{
    var main=document.getElementById('main');
    var MainSize=0.8*(window.innerWidth);
    var size=MainSize;
    setInterval(function(){ main.scrollBy(MainSize,0); c=c+1; if(c==4){main.scrollLeft=0; c=0;} }, 4500);
    
}

function Bigheader(){
    document.getElementById("TopOption").style.opacity=0;
    document.getElementById("TempHead").style.opacity=1;
    document.getElementById('flex-box').style.top='15%';
}

function RefBookStore(){
    window.open("bookstore.php");
}

function RefProfile(){
    if(sessionStorage){
        window.open("profile.php");
    }
}

function RefBookStore(){
    window.open("bookstore.php");
}
