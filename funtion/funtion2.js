document.getElementById("ForgotCross").onclick= NoForgotView;
document.getElementById("PasswordForgot").onclick= ForgotView;



function NoForgotView(){
    document.getElementById('main').style.opacity=1;
    document.getElementById('forgotPassword').style.visibility='hidden';
}

function ForgotView(){
    document.getElementById('main').style.opacity=0.5;
    document.getElementById('forgotPassword').style.visibility='visible';
}